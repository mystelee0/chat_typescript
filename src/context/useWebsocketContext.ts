import { Client } from "@stomp/stompjs";
import { createContext, useContext } from "react";


export const WebsocketContext = createContext<Client|null>(null);

export function useWebsocketClient(){
    const client = useContext(WebsocketContext);

    return client;
}
