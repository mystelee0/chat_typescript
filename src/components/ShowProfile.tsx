import styled from "styled-components";
import { useAppSelector } from "../store/hooks";
import { selectProfileById } from "../store/friendsSlice";

interface ShowProfileProps {
    imageUrls: string[]|undefined;
}

// 컴포넌트 분리해야함 친구목록용, 방목록용
export default function ShowProfile({ imageUrls =["profile.jpg"] }: ShowProfileProps) {

    // 개인 프로필의 경우 imageUrls 바로 사용 case 1
    const images = imageUrls
    //const src0 = useAppSelector((state) => selectProfileById(state, images[0]));
    //const src1 = useAppSelector((state) => selectProfileById(state, images[1]));
    
    // 여러개일경우 id 배열을 전달받음
    // 최대 4크기의 배열을 만들고 그 안에 id를 통해 프로필경로를 가져온다.
    const renderCount = Math.min(imageUrls.length, 4);
    // const profileImages = imageUrls.slice(0, renderCount).map((id) =>
    //     useAppSelector((state) => selectProfileById(state, id))
    // );
    let profileImages = useAppSelector((state) =>
    imageUrls?.map((id) => selectProfileById(state, id)) ?? []
    );
    profileImages = profileImages.slice(0,renderCount);

    function renderImage() {
        console.log(profileImages)
        switch (imageUrls.length) {
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
