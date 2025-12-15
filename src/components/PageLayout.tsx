import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import { useEffect } from "react";
import { useWebsocket } from "../hooks/useWebsocket";

export default function PageLayout(){
    
    useEffect(()=>{
        console.log("페이지레이아웃 마운트");
    },[])
    return(
        <>
            <Header/>
            <Main>
                <Outlet/>
            </Main>
            <Footer/>
        </>
    )
}

const PageContainer = styled.div`
  position: relative;
  overflow:hidden;
  display: flex;
  flex-direction: column;
  height:100dvh;
  width:100%;
  max-width: 600px;
  margin: 0 auto;
  padding:0;
  font-family: 'Arial', sans-serif;
  background:#fff;

  border:2px solid black;
`