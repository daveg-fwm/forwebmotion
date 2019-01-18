import styled from '@emotion/styled';

const ProjectMainStyled = styled.div`
  max-width: 580px;
  margin: 0 auto;

  p {
    margin: 100px 0;
  }

  .gatsby-image-wrapper {
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2, 1.2);
    }

    &.tall:hover {
      transform: scale(1.1, 1.1);
    }
  }

  video {
    width: 100%;
    height: auto;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2, 1.2);
    }
  }
`;

export default ProjectMainStyled;
