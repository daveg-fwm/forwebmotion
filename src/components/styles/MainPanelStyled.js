import styled from '@emotion/styled';

const MainPanelStyled = styled.main`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 125px 10px 40px;
  display: grid;
  grid-gap: 10vh 40px;
  grid-template-columns: 100%;
  justify-content: end;

  &.scroll {
    position: fixed;
    opacity: 0;
  }

  div.hide-panel {
    overflow: hidden;
    margin: -10px -10px -15px;
    padding: 10px 10px 15px;
    position: relative;
    z-index: 1;
  }

  div.panel {
    overflow: hidden;
    padding: 50px 20px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 400px) {
    div.panel {
      padding: 50px 25px;
      min-height: 580px;
    }
  }

  @media (min-width: 600px) {
    div.panel {
      padding: 85px 50px;
    }
  }

  @media (min-width: 700px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 1200px) and (min-height: 620px) {
    max-width: 1366px;
    grid-template-columns: calc(100% - 340px);
    padding: 20px 40px;
  }

  @media (min-width: 1200px) and (min-height: 660px) {
    padding: 40px;
  }
`;

export default MainPanelStyled;
