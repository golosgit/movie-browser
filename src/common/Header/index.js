import styled, { css } from "styled-components";

export const Header = styled.h2`
  margin: 56px 0 0 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 24px;
    font-size: 20px;
  }

  ${({ errorMessage }) => errorMessage && css`
    margin-top: 24px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-top: 12px;
    }
  `}

  ${({ details }) => details && css`
    margin-top: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-top: 4px;
      font-size: 24px;
      line-height: 1.3;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      font-weight: 500;
      font-size: 14px;
    }
  `}

  ${({ credits }) => credits && css`
    margin-top: 64px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-top: 40px;
      font-size: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      margin-top: 24px;
    }
  `}
`;