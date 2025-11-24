import styled from "styled-components";

interface ShowProfileProps {
    imageUrls:string[]
}

export default function ShowProfile({imageUrls }:ShowProfileProps) {
    
    
    //이미지 경로, 이미지 없으면 기본 이미지로 지정됨
    const images = imageUrls.length ? imageUrls : "/profile.jpg";

    function renderImage() {
        switch (imageUrls.length) {
            case 1:
                return (
                    <ProfileImage src={images[0]} alt="profile image" />
                )
            case 3:
                return (
                    <AvatarGroup>
                        <AvatarImage
                            src={images[0]}
                            style={{ bottom: "2px", left: "2px" }}
                        />
                        <AvatarImage
                            src={images[1]}
                            style={{ bottom: "2px", right: "2px" }}
                        />
                        <AvatarImage
                            src={images[2]}
                            style={{ top: "2px", left: "50%", transform: "translateX(-50%)" }}
                        />
                    </AvatarGroup>
                )

        }
    }
    return (
        <>
            {
                renderImage()
            }
        </>
    );
}

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  margin-right: 12px;
`;

const AvatarGroup = styled.div`
  width: 48px;
  height: 48px;
  background: #f0f0f0;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin-right:12px;
`;

const AvatarImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  border: 1px solid white;
`;
