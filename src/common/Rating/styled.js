import styled from "styled-components";
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
`;

export const StyledIcon = styled(Star)`
  width: 24px;
  height: auto;
  transform: translateY(-2px);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    width: 16px;
    transform: translateY(-1px);
  }
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
`;