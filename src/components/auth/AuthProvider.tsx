import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export function AuthProvider() {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    //유저 로그인 체크
    const isLoggedIn: boolean|null = useAuth();

    useEffect(() => {
        console.log(isLoggedIn);
        if(isLoggedIn === null){
            return;
        }

        if(isLoggedIn){
            setIsLoading(true);
        }else{
            alert("로그인이 필요합니다.");
            navigate("/login");
        }

    }, [isLoggedIn]);

    return isLoading?<Outlet />:<h2>로딩 중...</h2>
}