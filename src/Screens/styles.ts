import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContainerProps } from "./types";

export const Section = styled.div`
  font-size: 20px;
  color: #2091F9;
  display: flex;
  justify-content: center;
  height: 800px;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0000FF;
`;

export const Container = styled.div<ContainerProps>`
  background-image: url(${(props) => props.backgroundImage});
  height: 100vh;
  overflow: auto;
  text-align: center;
  width: 100%;
`;

export const BottomText = styled.div`
  display: flex;
  padding-bottom: 20px;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  width: 148px;
  height: 22px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #0000FF;
`;
