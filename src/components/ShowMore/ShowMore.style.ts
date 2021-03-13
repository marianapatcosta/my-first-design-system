import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { baseStyles, colors } from '../../styles';

export const StyledShowMore = styled.div`
  ${baseStyles}
`;

export const StyledShowMoreLink = styled.a<{
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}>`
  text-decoration: none;
  color: ${colors.highlight};
  margin: 0.5rem 0;
  float: right;
  cursor: pointer;
`;

export const StyledShowMoreIcon = styled.img<{
  showMore?: boolean;
}>`
  ${colors.iconHighlight};
  transform: rotate(0deg);
  transition: transform 0.5s ease-in-out;
  margin-left: 0.5rem;

  ${({ showMore }) => showMore && `transform: rotate(-180deg);`}
`;

export const ShowMoreContent = styled.div<{ showMore?: boolean }>`
  ${({ showMore }) => showMore && ``}
  overflow: hidden;
  /* display: -webkit-box;
  -webkit-box-orient: vertical; 
 -webkit-line-clamp: 3;*/
  padding-right: 1rem;
  padding-bottom: 0.3rem;

  ${({ showMore }) =>
    showMore && ` overflow: auto; /* -webkit-line-clamp: inherit;*/`}
`;
