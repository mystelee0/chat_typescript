import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Friends from "../pages/Friends";
import Rooms from "../pages/rooms";
import Settings from "../pages/settings";
import PageLayout from "../components/PageLayout";

export default function AppRoutes(){

    return(
        <BrowserRouter>
            <Routes>
                {/** /로 접속시 /friends로 이동 */}
                <Route path="/" element={<Navigate to="/friends" replace/>}/>

                {/** 친구목록, 채팅방목록, 세팅화면 페이지 */}
                <Route element={<PageLayout/>}>
                    <Route path="/friends" element={<Friends/>}/>
                    <Route path="/rooms" element={<Rooms/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}