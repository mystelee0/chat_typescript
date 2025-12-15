
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppSelector } from "../store/hooks";
import { setUser } from "../store/userSlice";

const SERVER_IP = import.meta.env.VITE_SERVER_IP;

/**
 * 로그인 여부 확인 함수
 * 
 * 요청 결과로 유저정보가 담겨있으면 리덕스 유저정보 공간에 저장
 * check()의 결과로 true,false 반환
 */
export function useAuth() {

    const userInfo = useAppSelector((state) => state.user);
    const dispatch = useDispatch();
    const [isLoggedIn,setIsLoggedIn] = useState<boolean|null>(null);

    async function loginCheck() {
        try {
            const res = await axios.get(`${SERVER_IP}/auth/me`, { withCredentials: true })
            console.log("세션 확인 결과 : ", res.data);

            // 브라우저에 저장되어있는 유저정보가 없거나 요청결과와 다른경우
            if (userInfo?.id !== res.data.id) {
                //유저정보 다시 저장
                dispatch(setUser(res.data));
            }

            setIsLoggedIn(true);
        } catch (err) {
            setIsLoggedIn(false);
        }
    }

    useEffect(()=>{
        console.log("로그인여부 요청 시작")
        loginCheck()
    },[])
    
    return isLoggedIn;
}