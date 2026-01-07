import React from "react";
import styled from "styled-components";

interface SystemMessageProps {
  message: string;
  index: number;
}

function SystemMessage({ message, index }: SystemMessageProps) {
  return <StyledSystemMessage key={index}>{`System: ${message}`}</StyledSystemMessage>;
}

const StyledSystemMessage = styled.div`
  align-self: center;
  font-size: 12px;
  color: #777;
  margin: 8px 0;
  white-space: pre-wrap;
`;

export default SystemMessage;