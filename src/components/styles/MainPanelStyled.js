import styled from '@emotion/styled';

const MainPanelStyled = styled.main`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  padding: 125px 10px 40px;
  display: grid;
  grid-template-columns: 100%;
  justify-content: end;

  div {
    z-index: 1 !important;
  }

  .tl-wrapper {
    display: grid;
    grid-gap: 10vh 40px;
  }

  div.panel {
    position: relative;
    padding: 50px 20px;
    background-color: #fff;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  }

  @media screen and (min-width: 1200px) and (min-height: 620px) {
    grid-template-columns: calc(100% - 340px);
    padding: 20px 40px;

    div.panel {
      padding: 85px 50px;
      min-height: 580px;
    }
  }

  @media screen and (min-width: 1200px) and (min-height: 660px) {
    padding: 40px;
  }
`;

export default MainPanelStyled;
