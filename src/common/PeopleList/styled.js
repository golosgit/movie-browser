import styled, { css } from "styled-components";
import noImage from "../images/profile.svg";

export const PeopleListContainer = styled.div`
  margin-top: 24px;
  width: 100%;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr;
  }

  ${({ credits }) => credits && css`
    margin-top: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      margin-top: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
      margin-top: 16px;
    }
  `}
`;

export const PersonTile = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.heather};
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    padding: 8px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const PersonImage = styled.img`
  min-width: 177px;
  aspect-ratio: 177 / 264;
  width: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.silver};
  background-image: url(${noImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    min-width: 120px;
  }
`;