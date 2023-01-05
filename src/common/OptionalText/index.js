import styled, { css } from "styled-components";

export const OptionalText = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin: 8px 0 0 0;

  ${({ person }) => person && css`
    font-size: 18px;
  `}

  ${({ list }) => list && css`
    margin: 0;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      font-size: 13px;
      transform: translateY(-1px);
    }
  `}

  ${({ movie }) => movie && css`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      margin-top: 4px;
      font-size: 13px;
    }
  `}

  ${({ hidden }) => hidden && css`
    display: none;
  `}

  ${({ details }) => details && css`
    font-size: 14px;
    line-height: 1.2;
    color: ${({ theme }) => theme.color.black};
    margin: 0;
    transform: translateY(3px);

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      font-size: 13px;
      line-height: 1.3;
      color: ${({ theme }) => theme.color.waterloo};
      transform: translateY(0px);
    }

    ${({ votes }) => votes && css`
      margin-left: 4px;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
        margin: 0;
      }
    `}

    ${({ hiddenMax }) => hiddenMax && css`
      @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
        display: none;
      }
    `}
  `}

  ${({ description }) => description && css`
    font-size: 20px;
    line-height: 1.6;
    color: ${({ theme }) => theme.color.black};
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      font-size: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      font-size: 14px;
    }
  `}
`;