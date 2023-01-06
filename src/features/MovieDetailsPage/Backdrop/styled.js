import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  padding: 0 16px;
`;

export const Poster = styled.div`
  display: flex;
  aspect-ratio: 1368 / 769;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  max-width: 1368px;
  margin: 0 auto;
  padding: 0 16px;
  box-shadow: 
    inset 0 0 30px 38px ${({ theme }) => theme.color.black},
    inset 0 -120px 240px 60px ${({ theme }) => theme.color.black};
  
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
    box-shadow: 
      inset 0 0 20px 30px ${({ theme }) => theme.color.black},
      inset 0 -120px 200px 40px ${({ theme }) => theme.color.black};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    box-shadow: 
      inset 0 0 20px 24px ${({ theme }) => theme.color.black},
      inset 0 -100px 160px 20px ${({ theme }) => theme.color.black};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}px) {
    box-shadow: 
      inset 0 0 10px 10px ${({ theme }) => theme.color.black},
      inset 0 -45px 80px 16px ${({ theme }) => theme.color.black};
  }
`;