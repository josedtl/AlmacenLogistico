# proxy_server.py
import socket
import threading

def handle_client(client_socket, target_host, target_port):
    target_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    target_socket.connect((target_host, target_port))
    
    def forward(src, dst):
        while True:
            data = src.recv(4096)
            if not data:
                break
            dst.send(data)
    
    client_to_target = threading.Thread(target=forward, args=(client_socket, target_socket))
    target_to_client = threading.Thread(target=forward, args=(target_socket, client_socket))
    
    client_to_target.start()
    target_to_client.start()

def proxy_server(bind_host, bind_port, target_host, target_port):
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind((bind_host, bind_port))
    server.listen(5)
    
    print(f"[*] Listening on {bind_host}:{bind_port}")
    
    while True:
        client_socket, _ = server.accept()
        print(f"[*] Incoming connection from {_}")
        
        client_handler = threading.Thread(target=handle_client, args=(client_socket, target_host, target_port))
        client_handler.start()

if __name__ == "__main__":
    BIND_HOST = "127.0.0.1"
    BIND_PORT = 8888
    TARGET_HOST = "localhost"
    TARGET_PORT = 8000
    
    proxy_server(BIND_HOST, BIND_PORT, TARGET_HOST, TARGET_PORT)





import asyncio

async def handle_client(client_reader, client_writer, target_host, target_port):
    target_reader, target_writer = await asyncio.open_connection(target_host, target_port)
    
    async def forward(reader, writer):
        while True:
            data = await reader.read(4096)
            if not data:
                break
            writer.write(data)
            await writer.drain()
    
    asyncio.gather(
        forward(client_reader, target_writer),
        forward(target_reader, client_writer)
    )
    
    try:
        await asyncio.gather(
            forward(client_reader, target_writer),
            forward(target_reader, client_writer)
        )
    except Exception as e:
        print(f"Error handling client: {e}")
    
    client_writer.close()
    target_writer.close()

async def proxy_server(bind_host, bind_port, target_host, target_port):
    server = await asyncio.start_server(
        lambda r, w: handle_client(r, w, target_host, target_port),
        bind_host, bind_port)
    
    async with server:
        await server.serve_forever()

if __name__ == "__main__":
    BIND_HOST = "127.0.0.1"
    BIND_PORT = 8888
    TARGET_HOST = "localhost"
    TARGET_PORT = 8000
    
    asyncio.run(proxy_server(BIND_HOST, BIND_PORT, TARGET_HOST, TARGET_PORT))
