import { Outlet } from "react-router-dom";
import { useWebsocket } from "../hooks/useWebsocket";
import { WebsocketContext } from "../context/useWebsocketContext";
import useSubscription from "../hooks/useSubscription";
import useMessageCallback from "../hooks/useMessageCallback";

export function WebsocketProvider() {

    // 로그인 성공 시 유저정보 불러오기, pagelayout 마운트하며 웹소켓 연결, 자기자신 구독
    const client = useWebsocket();
    const messageCallback = useMessageCallback()
    useSubscription(client,'/topic/roomid',"방이름정하기",['114','119'],messageCallback)
    return (
        <>
            <WebsocketContext.Provider value={client}>
                <Outlet />
            </WebsocketContext.Provider>

        </>
    )
}