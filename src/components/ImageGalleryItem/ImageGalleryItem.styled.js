import styled from 'styled-components';

export const GalleryItemCard = styled.li`
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const GalleryItemImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 250ms linear;

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
