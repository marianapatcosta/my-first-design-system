import React, {
  ChangeEvent,
  CSSProperties,
  MouseEventHandler,
  useRef,
} from 'react';
import {
  StyledUpload,
  StyledUploadWrapper,
  StyledUploadInput,
  StyledUploadPreview,
  StyledUploadPreviewContainer,
  StyledUploadPreviewFile,
  StyledUploadPreviewImage,
  StyledUploadPreviewButton,
} from './Upload.style';

export interface UploadProps {
  /**
   * element id
   */
  id?: string;
  /**
   * additional css class
   */
  className?: string;
  /**
   * additional style
   */
  style?: CSSProperties;
  /**
   * Upload's label
   */
  label?: string;
  /**
   * Is Upload disabled?
   */
  disabled?: boolean;
  /**
   * the fileTypes than are allowed to upload
   */
  fileTypes?: string;
  /**
   * is possible to upload more than one file?
   */
  areMultipleFilesAllowed?: boolean;
  /**
   * does upload have preview functionality?
   */
  hasPreview?: boolean;
  /**
   * are there images to preview?
   */
  imagesToPreview?: Array<any>;
  /**
   * are there files to preview?
   */
  filesToPreview?: Array<any>;
  /**
   * Change handler
   */
  onUpload: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Delete preview handler
   */
  onDeletePreview?: MouseEventHandler<HTMLButtonElement>;
}

export const Upload: React.FC<UploadProps> = ({
  label,
  disabled,
  fileTypes,
  areMultipleFilesAllowed,
  onUpload,
  className,
  hasPreview,
  imagesToPreview,
  filesToPreview,
  onDeletePreview,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledUploadWrapper>
      <StyledUpload
        {...props}
        label={label}
        className={className}
        disabled={disabled}
        onClick={() => inputRef.current && inputRef.current.click()}
      />
      <StyledUploadInput
        aria-label='File upload'
        ref={inputRef}
        type='file'
        multiple={areMultipleFilesAllowed}
        accept={fileTypes}
        onChange={onUpload}
      />
      {hasPreview && (!!imagesToPreview || !!filesToPreview) && (
        <StyledUploadPreview
          areThereFilesToPreview={!!filesToPreview && !!filesToPreview.length}
        >
          {!!imagesToPreview &&
            !!imagesToPreview.length &&
            imagesToPreview.map((image: any, index: any) => (
              <StyledUploadPreviewContainer key={`image-preview-${index}`}>
                <StyledUploadPreviewImage
                  src={image}
                  alt={`uploaded-preview-${index}`}
                />
                <StyledUploadPreviewButton
                  aria-label={`remove uploaded image ${index}`}
                  onClick={() => !!onDeletePreview && onDeletePreview(index)}
                />
              </StyledUploadPreviewContainer>
            ))}
          {!!filesToPreview &&
            !!filesToPreview.length &&
            filesToPreview.map((file: any, index: any) => (
              <StyledUploadPreviewContainer key={`file-preview-${index}`}>
                <StyledUploadPreviewFile>{file.name}</StyledUploadPreviewFile>
                <StyledUploadPreviewButton
                  areThereFilesToPreview={
                    !!filesToPreview && !!filesToPreview.length
                  }
                  aria-label={`remove uploaded file ${index}`}
                  onClick={() => !!onDeletePreview && onDeletePreview(index)}
                />
              </StyledUploadPreviewContainer>
            ))}
        </StyledUploadPreview>
      )}
    </StyledUploadWrapper>
  );
};

Upload.defaultProps = {
  id: '',
  className: '',
  style: {},
  label: '',
  disabled: false,
  areMultipleFilesAllowed: false,
  fileTypes: '',
  hasPreview: false,
  imagesToPreview: [],
  filesToPreview: [],
  onUpload: () => null,
  onDeletePreview: () => null,
};
