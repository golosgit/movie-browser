import styled, { css } from "styled-components";
import { ReactComponent as Icon } from "./arrow-left.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 40px 0 100px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    gap: 8px;
    margin: 32px 0;
  }

  ${({ person }) => person && css`
    margin: 56px 0 124px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      margin: 50px 0 40px;
  }
  `}
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.pattensBlue};
  color: ${({ theme }) => theme.color.mineShaft};
  padding: 8px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    gap: 4px;
    padding: 8px 12px;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.mystic};
    color: ${({ theme }) => theme.color.woodsmoke};
  }
`;

export const Text = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    display: none;
  }
`;

export const PagesWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin: 0 12px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    gap: 2px;
    margin: 0;
  }
`;


export const Page = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    font-size: 10px;
    line-height: 2.4;
  }

  ${({ pageNumber }) => pageNumber && css`
    font-weight: 600;
    color: ${({ theme }) => theme.color.woodsmoke};
  `}
`;

export const Arrow = styled(Icon)`
  width: 7px;
  height: auto;
  color: ${({ theme }) => theme.color.scienceBlue};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    width: 5px;
  }
  
  ${({ right }) => right && css`
    transform: rotate(180deg);
  `}

  ${({ mobile }) => mobile && css`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      display: unset;
    }
  `}

  ${({ disabled }) => disabled && css`
    color: ${({ theme }) => theme.color.waterloo};
  `}
`;