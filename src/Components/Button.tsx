import { FC } from "react";
import styled from "styled-components";

interface ButtonProps {
  width: number;
  title: string;
  bgColor: string;
  color: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ 
  bgColor, color, title, width, onClick 
}) => {
  return (
    <StyledButton
      width={width}
      bgColor={bgColor}
      color={color}
      onClick={() => onClick()}
    >
      { title }
    </StyledButton>
  )
}

interface StyledButtonProps {
  width: number;
  bgColor: string;
  color: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  width: ${(props) => props.width}px;
  height: 64px;
  top: 494px;
  background: ${(props) => props.bgColor};
  border-radius: 10px;
  border: none;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.2px;
  color: ${(props) => props.color};
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;