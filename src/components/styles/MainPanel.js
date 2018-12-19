import styled from '@emotion/styled';

const MainPanel = styled.main`
  width: 100%;
  max-width: 1920px;
  padding: 40px 40px 0;
  display: grid;
  grid-gap: 10vh;
  grid-template-columns: 73%;
  justify-content: end;

  div {
    padding: 85px 30px;
    background-color: #fff;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

export default MainPanel;
