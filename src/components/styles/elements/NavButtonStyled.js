import styled from '@emotion/styled';

const NavButtonStyled = styled.button`
  width: 50px;
  height: 40px;
  padding: 10px;
  background-color: transparent;
  border: 0;
  margin: -5px -10px 0 0;

  span {
    width: 100%;
    height: 2px;
    background-color: #40afe9;
    display: block;
  }

  span:nth-of-type(2) {
    margin: 7px 0;
  }
`;

export default NavButtonStyled;
