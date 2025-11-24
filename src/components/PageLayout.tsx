import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";

export default function PageLayout(){

    return(
        <PageContainer>
            <Header/>
            <Main>
                <Outlet/>
            </Main>
            <Footer/>
        </PageContainer>
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

  border:none;
`