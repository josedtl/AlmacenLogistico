import asyncio

# List of blocked IP addresses
BLOCKED_IPS = ["127.0.0.2", "192.168.1.10"]  # Add IPs you want to block

async def forward_data(reader, writer):
    try:
        while True:
            data = await reader.read(1024)
            if not data:
                break
            writer.write(data)
            await writer.drain()
    except asyncio.CancelledError:
        pass
    finally:
        writer.close()

async def handle_client(client_reader, client_writer):
    client_address = client_writer.get_extra_info('peername')[0]
    if client_address in BLOCKED_IPS:
        print(f"Blocked connection from {client_address}")
        client_writer.close()
        return

    try:
        target_host = '127.0.0.1'
        if client_address == "192.168.18.19":
            target_port = 8001  # Alternate port for specific IP
        else:
            target_port = 8000  # Default port

        target_reader, target_writer = await asyncio.open_connection(target_host, target_port)

        client_to_target = forward_data(client_reader, target_writer)
        target_to_client = forward_data(target_reader, client_writer)

        await asyncio.gather(client_to_target, target_to_client)
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        client_writer.close()

async def proxy_server(inbound_reader, outbound_writer):
    try:
        while True:
            data = await inbound_reader.read(1024)
            if not data:
                break
            outbound_writer.write(data)
            await outbound_writer.drain()
    except asyncio.CancelledError:
        pass
    finally:
        outbound_writer.close()

async def handle_proxy_client(client_reader, client_writer):
    try:
        outbound_reader, outbound_writer = await asyncio.open_connection('127.0.0.1', 8888)
        client_to_outbound = proxy_server(client_reader, outbound_writer)
        outbound_to_client = forward_data(outbound_reader, client_writer)
        await asyncio.gather(client_to_outbound, outbound_to_client)
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        client_writer.close()

def main():
    try:
        loop = asyncio.get_event_loop()

        server = loop.run_until_complete(asyncio.start_server(
            handle_client, '127.0.0.1', 8888))

        proxy_server = loop.run_until_complete(asyncio.start_server(
            handle_proxy_client, '127.0.0.1', 9999))

        print("Proxy servers started.")

        loop.run_forever()
    except KeyboardInterrupt:
        pass
    finally:
        if 'server' in locals() and server:
            server.close()
            loop.run_until_complete(server.wait_closed())
            print("Proxy server stopped.")

        if 'proxy_server' in locals() and proxy_server:
            proxy_server.close()
            loop.run_until_complete(proxy_server.wait_closed())
            print("Outbound proxy server stopped.")

if __name__ == '__main__':
    main()
