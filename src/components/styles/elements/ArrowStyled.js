import styled from '@emotion/styled';

const ArrowStyled = styled.span`
  width: 10px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  &.right-arrow {
    transform: rotate(90deg) translateY(-7px) scale(0.8, 0.8);
  }

  span:nth-of-type(1) {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 8px solid;
  }

  span:nth-of-type(2) {
    width: 2px;
    height: 20px;
    background-color: #40afe9;

    &.rsc-arrow {
      background-color: #fedf2f;
    }

    &.iotga-arrow {
      background-color: #bb9847;
    }

    &.wkmpg-arrow {
      background-color: #41a940;
    }
  }
`;

export default ArrowStyled;
