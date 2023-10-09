import asyncio

async def forward_data(reader, writer, direction):
    try:
        while True:
            data = await reader.read(1024)
            if not data:
                break
            writer.write(data)
            await writer.drain()
            print(f"Relayed {len(data)} bytes {direction}")
    except asyncio.CancelledError:
        pass
    finally:
        writer.close()
        print(f"{direction} relay closed.")

async def handle_client(reader, writer):
    try:
        target_host = '127.0.0.1'
        target_port = 8000

        print("Client connected.")

        target_reader, target_writer = await asyncio.open_connection(target_host, target_port)

        await asyncio.gather(
            forward_data(reader, target_writer, "Client to Target"),
            forward_data(target_reader, writer, "Target to Client")
        )

    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        writer.close()
        print("Client connection closed.")

def main():
    try:
        loop = asyncio.get_event_loop()
        server = loop.run_until_complete(asyncio.start_server(
            handle_client, '127.0.0.1', 8888))
        print("Proxy server started.")
        loop.run_forever()
    except KeyboardInterrupt:
        pass
    finally:
        if 'server' in locals() and server:
            server.close()
            loop.run_until_complete(server.wait_closed())
            print("Proxy server stopped.")

if __name__ == '__main__':
    main()
