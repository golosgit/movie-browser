import styled from "styled-components";
import noImage from "../../common/images/video.svg";

export const MovieListContaier = styled.div`
  margin-top: 24px;
  width: 100%;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    grid-gap: 16px;
    grid-template-columns: 1fr;
  }
`;

export const MovieListTile = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.heather};
  border-radius: 5px;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const MovieListImage = styled.img`
  min-width: 292px;
  aspect-ratio: 292 / 434;
  width: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.silver};
  background-image: url(${noImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    min-width: 114px;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
`;