import styled from "styled-components";
import { useAppSelector } from "../store/hooks";
import { selectProfileById } from "../store/friendsSlice";

interface ShowProfileProps {
    imageUrls: string[]|undefined;
}

// 채팅방 목록
export default function ShowProfile({ imageUrls =["profile.jpg"] }: ShowProfileProps) {

    
    // 프로필 몇개 들어갈지 지정 (최대4개)
    const renderCount = Math.min(imageUrls.length, 4);

    // const profileImages = imageUrls.slice(0, renderCount).map((id) =>
    //     useAppSelector((state) => selectProfileById(state, id))
    // );

    // 배열로 소속된 유저의 id를 받은 후 id의 profile정보를 가져온다
    let profileImages = useAppSelector((state) =>
    imageUrls?.map((id) => selectProfileById(state, id)) ?? []
    );
    // renderCount 개수 길이로 자르기
    profileImages = profileImages.slice(0,renderCount);

    function renderImage() {
        console.log(profileImages)
        switch (renderCount) {
            case 1:
                return (
                    <ProfileImage src={'/'+profileImages[0]} alt="profile image" />
                )
            case 2:
                return (
                    <AvatarGroup>
                        <AvatarImage
                            src={profileImages[0]}
                            style={{ top: "2px", left: "2px" }}
                        />
                        <AvatarImage
                            src={profileImages[1]}
                            style={{ bottom: "2px", right: "2px" }}
                        />
                    </AvatarGroup>
                )
            case 3:

                return (
                    <AvatarGroup>
                        <AvatarImage
                            src={profileImages[0]}
                            style={{ bottom: "2px", left: "2px" }}
                        />
                        <AvatarImage
                            src={profileImages[1]}
                            style={{ bottom: "2px", right: "2px" }}
                        />
                        <AvatarImage
                            src={profileImages[2]}
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
  border-radius: 16px;
  object-fit: cover;
  position: absolute;
  border: 1px solid white;
`;
