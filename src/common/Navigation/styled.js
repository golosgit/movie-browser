import styled from "styled-components";
import { ReactComponent as Icon } from "../images/video.svg";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.black};
`;

export const NavigationWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto 1fr;
  color: ${({ theme }) => theme.color.white};
  max-width: 1368px;
  margin: 0 auto;
  padding: 24px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    padding: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;
  margin-right: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    margin: 0;
    justify-content: center;
    min-width: 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    grid-row: 1;
    padding: 0 0 8px 0;
  }
`;

export const NavigationIcon = styled(Icon)`
  display: inline-block;
  height: 40px;
  width: 40px;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 17px;
    height: 17px;
    margin-right: 8px;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.67;
  letter-spacing: -1.5px;
  text-transform: capitalize;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-weight: 500;
    font-size: 13px;
    line-height: 1.3;
    letter-spacing: -0.5px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  gap: 16px;
  color: ${({ theme }) => theme.color.white};
  margin-right: 32px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    margin: 0;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    line-height: 18px;
    gap: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    grid-row: 2;
  }
`;

export const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 24px;
  cursor: pointer;
  padding: 8px 24px;
  border: 1px solid transparent;
  transition: border 0.3s;

  &:hover, &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 8px 12px;
  }
`;

export const SearchContainer = styled.div`
  justify-self: end;
  width: 432px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    grid-column: 1 / 3;
    grid-row: 2;
    width: 100%;
    margin-top: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    grid-row: 3;
    margin-top: 12px;
  }
`;