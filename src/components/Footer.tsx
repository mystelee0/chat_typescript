import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components";

export default function Footer() {

    const location = useLocation();
    const navigate = useNavigate();

    type MenuItem = {
        path: string;
        label: string;
        icon: string;
    }
    const menuItems: MenuItem[] = [
        { path: "/friends", label: "친구", icon: "👥" },
        { path: "/rooms", label: "채팅", icon: "💬" },
        { path: "/settings", label: "더보기", icon: "•••" }
    ];

    return (
        <FooterContainer>
            {menuItems.map((item) => (
                <FooterBox
                    key={item.path}
                    $active={location.pathname === item.path}
                    onClick={() => navigate(item.path)}
                >
                    <span className="icon">{item.icon}</span>
                    <span className="label">{item.label}</span>
                </FooterBox>
            ))}
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #f7f7f7;
  border-top: 1px solid #ccc;

  margin: 0 auto;
`;
interface FooterBoxProps {
    $active : boolean;
}
const FooterBox = styled.div<FooterBoxProps>`
  flex: 1;
  text-align: center;
  padding: 6px 0;
  cursor: pointer;
  background-color: ${({ $active }) => ($active ? "#e0e0e0" : "transparent")};
  color: ${({ $active }) => ($active ? "#000" : "#888")};
  transition: background-color 0.3s, color 0.3s;

  .icon {
    font-size: 22px;
    display: block;
  }

  .label {
    font-size: 12px;
    display: block;
  }

  &:hover {
    background-color: #eaeaea;
  }

  // 화면이 작으면 글자 줄이기
  @media (max-width: 400px) {
    .label {
      font-size: 10px;
    }
    .icon {
      font-size: 18px;
    }
  }
`;