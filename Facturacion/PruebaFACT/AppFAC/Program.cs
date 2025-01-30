using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Security.Cryptography.Xml;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace AppFAC
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string xmlFilePath = "C:/Users/DAVID/Desktop/XML/10728110771-01-FFF1-1.xml";
            string pfxFilePath = "C:/Users/DAVID/Desktop/XML/LLAMA-PE-CERTIFICADO-DEMO-10728110771.pfx";
            string pfxPassword = "5253125";


            try
            {
                // Cargar el certificado desde el archivo PFX
                X509Certificate2 cert = new X509Certificate2(pfxFilePath, pfxPassword);

                // Cargar el XML
                XmlDocument xmlDoc = new XmlDocument();
                xmlDoc.PreserveWhitespace = true; // Asegura que se preserven los espacios en blanco
                xmlDoc.Load(xmlFilePath);

                // Firmar el XML
                SignXml(xmlDoc, cert);

                // Guardar el XML firmado
                xmlDoc.Save("C:/Users/DAVID/Desktop/XML/Firmado/10728110771-01-FFF1-1.xml");

                Console.WriteLine("El XML ha sido firmado y guardado.");
            }
            catch (CryptographicException ex)
            {
                Console.WriteLine($"Error criptográfico: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }

        public static void SignXml(XmlDocument xmlDoc, X509Certificate2 cert)
        {
            // Asegurarse de que el documento no está vacío
            if (xmlDoc == null)
                throw new ArgumentException("El documento XML no puede estar vacío.");

            // Asegurarse de que el certificado no está vacío
            if (cert == null)
                throw new ArgumentException("El certificado no puede estar vacío.");

            // Crear un nuevo objeto SignedXml y pasarle el documento XML
            SignedXml signedXml = new SignedXml(xmlDoc);

            // Verificar que el certificado contiene una clave RSA
            if (!(cert.PrivateKey is RSA))
                throw new CryptographicException("El certificado no contiene una clave RSA.");

            // Asignar la clave privada RSA al objeto SignedXml
            signedXml.SigningKey = cert.GetRSAPrivateKey();

            // Crear una referencia al documento que va a ser firmado
            Reference reference = new Reference();
            reference.Uri = "";

            // Añadir las transformaciones necesarias
            reference.AddTransform(new XmlDsigEnvelopedSignatureTransform());

            // Especificar los métodos de digestión y firma
            reference.DigestMethod = "http://www.w3.org/2001/04/xmlenc#sha256";
            signedXml.SignedInfo.SignatureMethod = "http://www.w3.org/2001/04/xmldsig-more#rsa-sha256";

            // Añadir la referencia al objeto SignedXml
            signedXml.AddReference(reference);

            // Crear información de clave y añadirla al objeto SignedXml
            KeyInfo keyInfo = new KeyInfo();
            keyInfo.AddClause(new KeyInfoX509Data(cert));
            signedXml.KeyInfo = keyInfo;

            // Calcular la firma
            signedXml.ComputeSignature();

            // Obtener la representación XML de la firma
            XmlElement xmlDigitalSignature = signedXml.GetXml();
            xmlDigitalSignature.SetAttribute("Id", "NubeFacTSign");

            // Crear los elementos UBLExtensions
            XmlNamespaceManager nsMgr = new XmlNamespaceManager(xmlDoc.NameTable);
            nsMgr.AddNamespace("ext", "urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2");

            XmlNode extElement = xmlDoc.SelectSingleNode("//ext:UBLExtensions", nsMgr);

            if (extElement == null)
            {
                // Si no existe, crear los nodos necesarios
                XmlElement ublExtensions = xmlDoc.CreateElement("ext:UBLExtensions", "urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2");
                xmlDoc.DocumentElement.PrependChild(ublExtensions);
                extElement = ublExtensions;
            }

            // Crear un nuevo UBLExtension y ExtensionContent
            XmlElement ublExtension = xmlDoc.CreateElement("ext:UBLExtension", "urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2");
            XmlElement extensionContent = xmlDoc.CreateElement("ext:ExtensionContent", "urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2");

            // Insertar la firma en el elemento ExtensionContent
            extensionContent.AppendChild(xmlDoc.ImportNode(xmlDigitalSignature, true));
            ublExtension.AppendChild(extensionContent);

            // Insertar el nuevo UBLExtension al principio de UBLExtensions
            if (extElement.HasChildNodes)
            {
                extElement.InsertBefore(ublExtension, extElement.FirstChild);
            }
            else
            {
                extElement.AppendChild(ublExtension);
            }
        }
        //public static void SignXml(XmlDocument xmlDoc, X509Certificate2 cert)
        //{
        //    // Asegurarse de que el documento no está vacío
        //    if (xmlDoc == null)
        //        throw new ArgumentException("El documento XML no puede estar vacío.");

        //    // Asegurarse de que el certificado no está vacío
        //    if (cert == null)
        //        throw new ArgumentException("El certificado no puede estar vacío.");

        //    // Crear un nuevo objeto SignedXml y pasarle el documento XML
        //    SignedXml signedXml = new SignedXml(xmlDoc);

        //    // Verificar que el certificado contiene una clave RSA
        //    if (!(cert.PrivateKey is RSA))
        //        throw new CryptographicException("El certificado no contiene una clave RSA.");

        //    // Asignar la clave privada RSA al objeto SignedXml
        //    signedXml.SigningKey = cert.GetRSAPrivateKey();

        //    // Crear una referencia al documento que va a ser firmado
        //    Reference reference = new Reference();
        //    reference.Uri = "";

        //    // Añadir una transformación para excluir la declaración de XML de la firma
        //    XmlDsigEnvelopedSignatureTransform env = new XmlDsigEnvelopedSignatureTransform();
        //    reference.AddTransform(env);

        //    // Añadir la referencia al objeto SignedXml
        //    signedXml.AddReference(reference);

        //    // Crear información de clave y añadirla al objeto SignedXml
        //    KeyInfo keyInfo = new KeyInfo();
        //    keyInfo.AddClause(new KeyInfoX509Data(cert));
        //    signedXml.KeyInfo = keyInfo;

        //    // Calcular la firma
        //    signedXml.ComputeSignature();

        //    // Obtener la representación XML de la firma y guardarla en el documento XML
        //    XmlElement xmlDigitalSignature = signedXml.GetXml();
        //    xmlDoc.DocumentElement.AppendChild(xmlDoc.ImportNode(xmlDigitalSignature, true));
        //}
    }
}
