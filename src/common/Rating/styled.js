import styled, { css } from "styled-components";
import { ReactComponent as Star } from "./star.svg";

export const Container = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: flex-end;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    gap: 8px;
    align-items: flex-start;
  }

  ${({ list }) => list && css`
    height: 100%;
  `}

  ${({ details }) => details && css`
    margin-top: 24px;
    gap: 8px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-top: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      margin-top: 12px;
    }
  `}

  ${({ backdrop }) => backdrop && css`
    margin-top: 24px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobilelMax}px) {
      margin-top: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      gap: 4px;
      margin-top: 4px;
    }
  `}

  ${({ secondLine }) => secondLine && css`
    margin-top: 16px;
    align-items: center;
    gap: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      display: none;
    }
  `}
`;

export const StyledIcon = styled(Star)`
  width: 24px;
  height: auto;
  transform: translateY(-2px);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    width: 16px;
    transform: translateY(-1px);
  }

  ${({ details }) => details && css`
    transform: translateY(-2px);
  `}

  ${({ backdrop }) => backdrop && css`
    width: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
      width: 32px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      width: 16px;
      transform: translateY(0px);
    }
  `}

  ${({ hidden }) => hidden && css`
    display: none;
  `}
`;

export const Evaluation = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    font-size: 13px;
    line-height: 1.3;
  }

  ${({ details }) => details && css`
    font-size: 22px;
    line-height: 1.3;
  `}

  ${({ backdrop }) => backdrop && css`
    font-weight: 500;
    font-size: 30px;
    line-height: 1.3;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      font-weight: 600;
      font-size: 14px;
    }
  `}
`;