import type { ReactNode } from "react"
import styled from "styled-components"

interface MainProps{
    children: ReactNode
}

export default function Main({children} :MainProps) {

    return (
        <MainContainer>
            {children}
        </MainContainer>
    )
}

const MainContainer = styled.main`
display:flex;
flex:1;
  padding:0;
height:100%;
`