import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Friends from "../pages/Friends";
import Rooms from "../pages/Rooms";
import Settings from "../pages/Settings";
import PageLayout from "../components/PageLayout";
import { useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { Chatting } from "../pages/Chatting";
import { WebsocketProvider } from "../components/WebsocketProvider";
import { AuthProvider } from "../components/auth/AuthProvider";
import Login from "../components/auth/Login";
import { SignUp } from "../components/auth/Signup";

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

                {/** 로그인여부 체크 */}
                <Route element={<AuthProvider />}>
                    {/** 웹소켓 연결 client 생성 */}
                    <Route element={<WebsocketProvider />}>
                        {/** 친구목록, 채팅방목록, 세팅화면 페이지 */}
                        <Route element={<PageLayout />}>
                            <Route path="/friends" element={<Friends />} />
                            <Route path="/rooms" element={<Rooms />} />
                            <Route path="/settings" element={<Settings />} />
                        </Route>

                        {/** 채팅창 */}
                        <Route path="/chats/:id" element={<Chatting client={null} />} />
                    </Route>
                </Route>

                {/** 로그인 및 회원가입 화면 */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}