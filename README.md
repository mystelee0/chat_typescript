# MyKakaoTalk

KakaoTalk 클론 채팅 애플리케이션. React와 TypeScript를 기반으로 실시간 채팅 기능을 제공합니다.

## 프로젝트 개요

이 프로젝트는 KakaoTalk을 모방한 웹 기반 채팅 앱으로, 친구 목록, 채팅방, 실시간 메시지 전송 등의 기능을 포함합니다. WebSocket을 통해 실시간 통신을 지원하며, Redux로 상태 관리를 합니다.

## 기술 스택

### 프론트엔드
- **React 19.2.0**: UI 라이브러리
- **TypeScript 5.9.3**: 타입 안전성
- **Vite 7.2.2**: 빌드 도구 (빠른 개발 서버)
- **styled-components 6.1.19**: CSS-in-JS 스타일링
- **React Router DOM 7.9.6**: 클라이언트 사이드 라우팅

### 상태 관리 및 데이터
- **Redux Toolkit 2.11.0**: 상태 관리
- **Axios 1.13.2**: HTTP 클라이언트 (API 호출)
- **STOMP.js 7.2.1**: WebSocket 프로토콜 (실시간 채팅)
- **ws 8.18.3**: WebSocket 라이브러리

### 개발 도구
- **ESLint 9.39.1**: 코드 린팅
- **TypeScript ESLint**: 타입 체크
- **Vite Plugin React**: React 통합

## 프로젝트 구조

```
myKakaoTalk/
├── public/                 # 정적 파일 (아이콘, 이미지 등)
├── src/
│   ├── assets/             # React/Vite 로고 등
│   ├── components/         # 재사용 가능한 UI 컴포넌트
│   │   ├── auth/           # 인증 관련 (AuthProvider, Login, Signup)
│   │   ├── chattingRoom/   # 채팅방 컴포넌트 (ChatMessages, ChatInput 등)
│   │   └── ...             # Footer, Header, PageLayout 등
│   ├── context/            # React Context (WebSocket 관련)
│   ├── hooks/              # 커스텀 훅 (useAuth, useWebsocket 등)
│   ├── pages/              # 페이지 컴포넌트 (Friends, Rooms, Chatting 등)
│   ├── routes/             # 라우팅 설정 (AppRoutes)
│   ├── store/              # Redux 상태 관리
│   │   ├── chatSlice.ts    # 채팅 메시지 상태
│   │   ├── friendsSlice.ts # 친구 목록 상태
│   │   ├── roomsSlice.ts   # 채팅방 목록 상태
│   │   ├── userSlice.ts    # 사용자 상태
│   │   └── store.ts        # 스토어 설정
│   ├── types/              # TypeScript 타입 정의 (friend.ts, user.ts)
│   ├── App.tsx             # 메인 앱 컴포넌트
│   └── main.tsx            # React 앱 마운트
├── tsconfig*.json          # TypeScript 설정
├── vite.config.ts          # Vite 설정 (개발 서버: 포트 5173)
├── package.json            # 의존성 및 스크립트
└── index.html              # HTML 엔트리 포인트
```

## 주요 기능

- **실시간 채팅**: WebSocket(STOMP)으로 메시지 전송/수신
- **친구 관리**: 친구 목록 조회 및 프로필 표시
- **채팅방 관리**: 채팅방 생성/입장
- **사용자 인증**: 로그인/회원가입 (AuthProvider)
- **반응형 UI**: 모바일 친화적 디자인 (max-width: 600px)

## API 및 통신

### WebSocket (실시간 채팅)
- **라이브러리**: @stomp/stompjs
- **프로토콜**: STOMP over WebSocket
- **사용**: 채팅 메시지, 사용자 상태 업데이트
- **연결**: WebsocketProvider 컴포넌트에서 관리

### HTTP API (Axios)
- **기본 URL**: 설정 필요 (예: 백엔드 서버)
- **엔드포인트 예시**:
  - `GET /api/friends`: 친구 목록 조회
  - `POST /api/rooms`: 채팅방 생성
  - `GET /api/users/:id/profile`: 사용자 프로필 이미지
- **인증**: JWT 또는 세션 기반 (구현 필요)

### 상태 관리 (Redux)
- **슬라이스**:
  - `userSlice`: 현재 사용자 정보
  - `friendsSlice`: 친구 목록 데이터
  - `roomsSlice`: 채팅방 데이터
  - `chatSlice`: 메시지 히스토리
- **사용**: useAppSelector, useAppDispatch 훅

## 설치 및 실행

### 사전 요구사항
- Node.js 18+
- npm 또는 yarn

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```
- 브라우저에서 `http://localhost:5173` 접속

### 빌드
```bash
npm run build
```

### 린팅
```bash
npm run lint
```

## 환경 설정

- **.env 파일**: API URL, WebSocket 엔드포인트 설정
  ```
  VITE_API_BASE_URL=http://localhost:3000/api
  VITE_WS_URL=ws://localhost:3000/ws
  ```

## 기여

1. Fork 및 Clone
2. 브랜치 생성: `git checkout -b feature/new-feature`
3. 변경 후 커밋: `git commit -m "Add new feature"`
4. Push 및 PR

## 라이선스

MIT License
