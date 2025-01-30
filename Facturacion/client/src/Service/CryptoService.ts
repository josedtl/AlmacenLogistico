export class CryptoService {
  private static async getKeyMaterial(): Promise<CryptoKey> {
    const key = 'your-256-bit-key'; // Clave de 32 bytes
    return window.crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(key),
      'AES-GCM',
      true,
      ['encrypt', 'decrypt']
    );
  }

  public static async encrypt(plainText: string): Promise<{ iv: Uint8Array, encryptedText: string }> {
    const key = await this.getKeyMaterial();
    const iv = window.crypto.getRandomValues(new Uint8Array(12)); // IV de 12 bytes
    const encodedText = new TextEncoder().encode(plainText);

    const encrypted = await window.crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      encodedText
    );

    const encryptedArray = Array.from(new Uint8Array(encrypted));
    return { iv, encryptedText: btoa(String.fromCharCode(...encryptedArray)) };
  }

  public static async decrypt(encryptedText: string, iv: Uint8Array): Promise<string> {
    const key = await this.getKeyMaterial();
    const decrypted = await window.crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      new Uint8Array(atob(encryptedText).split('').map(c => c.charCodeAt(0)))
    );
    return new TextDecoder().decode(decrypted);
  }
}
