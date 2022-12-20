import styled, { css } from "styled-components";

export const Text = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  margin: 16px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
  }

  ${({ errorMessage }) => errorMessage && css`
    margin-top: 24px;
    display: inline-block;
    width: 460px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-top: 12px;
      width: 280px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
      width: unset;
    }
  `}
`;