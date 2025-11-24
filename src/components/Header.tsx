import { useLocation } from "react-router-dom"
import styled from "styled-components";


export default function Header() {

    const location = useLocation();

    function getTitle() {
        if (location.pathname === "/friends") return "친구";
        else if (location.pathname === "/rooms") return "채팅";
        else if (location.pathname === "/settings") return "설정";
    }

    return (
        <PageTitle >
            {getTitle()}
        </PageTitle>
    )
}

const PageTitle = styled.header`
    font-weight: bold;
 font-size: 20px;
 text-align:left;
 color:black;
 padding:12px 16px;

 border:2px solid red;
`