import styled from '@emotion/styled';

const MainPanel = styled.main`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  padding: 40px;
  display: grid;
  grid-gap: 10vh 40px;
  grid-template-columns: calc(100% - 340px);
  justify-content: end;

  div.panel {
    padding: 85px 30px;
    background-color: #fff;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

export default MainPanel;
