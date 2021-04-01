import styled from 'styled-components';
import { baseStyles, colors } from '../../styles';
import { Button } from '../Button/Button';
import { Close } from '../../assets/icons/';

export const StyledUpload = styled(Button)`
  ${baseStyles}
  width: 100%;
  padding: 0.3rem;
`;

export const StyledUploadInput = styled.input`
  visibility: hidden;
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
`;

export const StyledUploadPreview = styled.div<{
  areThereFilesToPreview?: boolean;
}>`
  display: flex;
  flex: 2;
  overflow: auto;
  margin-left: 1.25rem;
  height: 100%;

  ${({ areThereFilesToPreview }) =>
    areThereFilesToPreview &&
    `display: block;
  margin-left: 0;
  height: 100%;`}
`;

export const StyledUploadPreviewContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
`;

export const StyledUploadPreviewImage = styled.img`
  width: 6.25rem;
  height: 4.4rem;
  margin-right: 0.3rem;
`;

export const StyledUploadPreviewFile = styled.p`
  font-size: 90%;
  display: inline;
  margin-right: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledUploadPreviewButton = styled.button<{
  areThereFilesToPreview?: boolean;
}>`
  border: none;
  position: absolute;
  top: 0.3rem;
  right: 0.8em;
  width: 0.625rem;
  height: 0.625rem;
  padding: 0.063rem;
  cursor: pointer;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  background: ${colors.white} url(${Close}) no-repeat center center;
  background-size: 0.7rem 0.7rem;

  :hover {
    opacity: 0.75;
  }

  ${({ areThereFilesToPreview }) =>
    areThereFilesToPreview &&
    `dposition: relative;
top: 0;
right: 0;
`}
`;

export const StyledUploadWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  overflow: hidden;
  height: 5.6rem;
  width: 100%;
  max-width: 30rem;
`;
