import { Client } from "@stomp/stompjs";
import { useEffect, useState } from "react";

const WS_IP = import.meta.env.VITE_WS_IP;

export function useWebsocket() {
    const [client, setClient] = useState<Client | null>(null);
    console.log(WS_IP);
    useEffect(() => {
        const c = new Client({
            brokerURL: `${WS_IP}/websocket-server`,
            onConnect: () => {
                console.log("웹소켓 연결 성공");
                setClient(c);
            },
            debug: (msg) => console.log(msg),
        });

        c.activate();

        return () => {
            c.deactivate();
        };
    }, []);

    return client;
}