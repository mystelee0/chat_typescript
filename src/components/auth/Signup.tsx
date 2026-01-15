import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SERVER_IP = import.meta.env.VITE_SERVER_IP;

interface SignupData{
    id: string;
    name: string;
    password: string;
}

export function SignUp() {

  const navigate = useNavigate();
  
    let [newUser,setNewUser]=useState<SignupData>({
        id:"",
        name:"",
        password:""
    });
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        setNewUser({
            ...newUser,
            [e.target.name]:e.target.value
        })
    }
  function handleSignUp(){
    axios.post(`${SERVER_IP}/users`,newUser)
    .then((res)=>{
        console.log(res);
        alert("회원가입 성공");
        navigate("/login");
    }).catch((err)=>{
        console.log(err);
        alert("가입 실패 "+err);
    })
  };

  return (
    <Container>
      <LoginBox>
        <Logo src="/kakao.png" alt="Logo" />
        <Title>카톡 회원가입</Title>
        <Input placeholder="아이디" name="id" onChange={handleChange}></Input>
        <Input placeholder="이름" name="name" onChange={handleChange}></Input>
        <Input placeholder="비밀번호" name="password" onChange={handleChange}></Input>
        <LoginButton onClick={handleSignUp}>
          가입하기
        </LoginButton>
        <InfoText>계정이 이미 있으신가요? <Link to={"/login"}>로그인하기</Link></InfoText>
      </LoginBox>
    </Container>
  );
}

const Container = styled.div`
  
  flex:1;
  background: #f7e600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  width: 300px;
  padding: 40px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  text-align: center;
`;

const Logo = styled.img`
  width: 60px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
  color: #3c1e1e;
`;
const Input = styled.input`
    box-sizing:border-box;
    width:100%;
    padding: 12px 10px;
    margin-bottom: 16px;
    background-color: transparent;
    border:1px solid #eee;
    border-radius:6px;
    color:black;
    font-size:16px;
`
const LoginButton = styled.button`
  background: #ffe812;
  border: none;
  width: 100%;
  padding: 12px 0;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 16px;
  transition: background 0.2s;

  &:hover {
    background: #ffde00;
  }
`;

const InfoText = styled.p`
  font-size: 13px;
  color: #666;
  a {
    text-decoration: none;
    color: #3c1e1e;
    font-weight: bold;
  }
`;
