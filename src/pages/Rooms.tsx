import { useAppSelector } from "../store/hooks"
import { selectUser } from "../store/userSlice"

export default function Rooms(){

    const user = useAppSelector(selectUser);
    return (
    <h1>경로 : /rooms 채팅방{user.name}</h1>
    )
}