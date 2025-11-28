import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSubRoom } from "../redux/subRoomSlice";
import type { Client, IMessage, StompSubscription } from "@stomp/stompjs";

interface UseSubscriptionParams {
  client: Client | null; // 또는 undefined 가능하면 Client | null | undefined
  destination: string;
  roomName: string;
  users: string[];
  messageCallback: (message: IMessage) => void;
}

/**
 * 메시지 콜백을 생성하고, 컴포넌트 생명주기에 맞춰 구독/해제를 관리하는 훅
 */
function useSubscription(
  client: UseSubscriptionParams["client"],
  destination: string,
  roomName: string,
  users: string[],
  messageCallback: (message: IMessage) => void
): void {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!client || !client.connected) {
      console.log("client 연결 안된 상태");
      return;
    }

    // STOMP subscribe() 반환 타입: StompSubscription
    const subscription: StompSubscription = client.subscribe(
      destination,
      messageCallback,
      { id: destination }
    );

    console.log("구독id ", subscription.id);

    dispatch(
      addSubRoom({
        roomId: subscription.id.replace("/topic/", ""),
        roomName: roomName,
        users: users
      })
    );

    return () => {
      console.log("구독취소", subscription);
      subscription.unsubscribe();
    };
  }, [client, destination, roomName, users, messageCallback, dispatch]);
}

export default useSubscription;