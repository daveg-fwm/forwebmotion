import styled from '@emotion/styled';

const MainPanelStyled = styled.main`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  padding: 125px 40px 40px;
  display: grid;
  grid-gap: 10vh 40px;
  grid-template-columns: 100%;
  justify-content: end;

  div.panel {
    min-height: 580px;
    position: relative;
    z-index: 1;
    padding: 85px 50px;
    background-color: #fff;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  }

  .rsc-project {
    h1 {
      color: #fedf2f;
    }

    div {
      background-color: #fedf2f;
    }
  }

  .iotga-project {
    h1 {
      color: #bb9847;
    }

    div {
      background-color: #bb9847;
    }
  }

  .wkmpg-project {
    h1 {
      color: #41a940;
    }

    div {
      background-color: #41a940;
    }
  }

  @media screen and (min-width: 1200px) and (min-height: 620px) {
    grid-template-columns: calc(100% - 340px);
    padding: 20px 40px;
  }

  @media screen and (min-width: 1200px) and (min-height: 660px) {
    padding: 40px;
  }
`;

export default MainPanelStyled;
