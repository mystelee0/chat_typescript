import React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SlidingPanel({ open, onClose }: Props) {
  return (
    <>
      <Overlay visible={open} onClick={onClose} />
      <PanelContainer role="dialog" aria-hidden={!open} open={open}>
        <PanelHeader>
          <CloseButton onClick={onClose}>← 뒤로</CloseButton>
        </PanelHeader>
        <PanelBody>
          {/* 원하는 내용을 여기에 넣으세요 (설정, 멤버, 추가 옵션 등) */}
          <h3 style={{ margin: 0 }}>메뉴</h3>
          <p>여기에 패널 내용을 넣으세요.</p>
        </PanelBody>
      </PanelContainer>
    </>
  );
}

const Overlay = styled.div<{ visible: boolean }>`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
  opacity: ${p => (p.visible ? 1 : 0)};
  visibility: ${p => (p.visible ? "visible" : "hidden")};
  transition: opacity 300ms ease, visibility 300ms ease;
  z-index: 1000;
`;

const PanelContainer = styled.aside<{ open: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  max-width: 600px; /* 모바일 화면 폭에 맞춤 */
  background: #fff;
  box-shadow: -4px 0 12px rgba(0,0,0,0.12);
  transform: translateX(${p => (p.open ? '0' : '100%')});
  transition: transform 300ms ease;
  z-index: 1001;
  display: flex;
  flex-direction: column;
`;

const PanelHeader = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-bottom: 1px solid #eee;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const PanelBody = styled.div`
  padding: 16px;
  overflow: auto;
`;
