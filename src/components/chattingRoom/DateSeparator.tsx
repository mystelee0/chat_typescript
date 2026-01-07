import styled from "styled-components";
import React from "react";

interface Props {
  time: string | number | Date;
}

function formatDate(t: Props['time']) {
  const d = new Date(t);
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}

export default function DateSeparator({ time }: Props) {
  return <DateMessage>{formatDate(time)}</DateMessage>;
}

const DateMessage = styled.div`
  align-self: center;
  font-size: 12px;
  color: #777;
  margin: 8px 0;
  white-space: pre-wrap;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 4px 8px;
  text-align: center;
  max-width: fit-content;
`;
