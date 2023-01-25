import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "./error.svg";

export const Wrapper = styled.div`
  margin: 180px auto 0;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;

  @media (max-width: ${({ theme}) => theme.breakpoint.mobileMax}px) {
    margin-top: 80px;
  }
`;

export const StyledIcon = styled(Icon)`
  width: 120px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 60px;
  }
`;

export const Button = styled(Link)`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.36;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  margin-top: 24px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    filter: brightness(1.15);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    margin-top: 12px;
    font-size: 12px;
    padding: 10px 16px;
  }
`;