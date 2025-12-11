import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Friends from "../pages/Friends";
import Rooms from "../pages/Rooms";
import Settings from "../pages/Settings";
import PageLayout from "../components/PageLayout";
import { useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { Chatting } from "../pages/Chatting";

export default function AppRoutes() {

    const user = useAppSelector((state) => state.user);

    useEffect(() => {
        console.log(user.name);
    }, [user])

    return (
        <BrowserRouter>
            <Routes>
                {/** /로 접속시 /friends로 이동 */}
                <Route path="/" element={<Navigate to="/friends" replace />} />

                {/** 친구목록, 채팅방목록, 세팅화면 페이지 */}
                <Route element={<PageLayout />}>
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/settings" element={<Settings />} />

                    <Route path="/chats/:id" element={<Chatting client={null}/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}