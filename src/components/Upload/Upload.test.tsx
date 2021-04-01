import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Upload } from './Upload';

describe('Upload', () => {
  const defaultProps = { onUpload: () => null, label: 'Upload' };
  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Upload {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should display label', () => {
    const { getByText } = render(<Upload {...defaultProps} />);
    getByText('Upload');
  });

  test('should handle change events', () => {
    const onUploadMock = jest.fn();
    const { getByLabelText } = render(
      <Upload {...defaultProps} onUpload={onUploadMock} />
    );

    const input = getByLabelText('File upload');

    fireEvent.change(input);

    expect(onUploadMock).toBeCalled();
  });

  test('should return null on click if onUpload prop is not passed', () => {
    const result =
      Upload.defaultProps?.onUpload && Upload.defaultProps.onUpload();
    expect(result).toBeNull();
  });

  test('should display images to preview if `hasPreview`prop is passed', () => {
    const { getByAltText } = render(
      <Upload
        {...defaultProps}
        hasPreview
        imagesToPreview={[{ name: 'image 1', src: '' }]}
      />
    );

    const imageToPreview = getByAltText('uploaded-preview-0');
    expect(imageToPreview).toBeInTheDocument();
  });

  test('should call onDeletePreviews if delete button of images is clicked', () => {
    const onDeleteMock = jest.fn();
    const { getByLabelText } = render(
      <Upload
        {...defaultProps}
        hasPreview
        imagesToPreview={[{ name: 'image 1', file: '' }]}
        onDeletePreview={onDeleteMock}
      />
    );

    const imageToPreviewButton = getByLabelText('remove uploaded image 0');
    fireEvent.click(imageToPreviewButton);
    expect(onDeleteMock).toBeCalled();
  });

  test('should display files to preview if `hasPreview`prop is passed', () => {
    const { getByLabelText } = render(
      <Upload
        {...defaultProps}
        hasPreview
        filesToPreview={[{ name: 'file 1', file: '' }]}
      />
    );

    const fileToPreviewButton = getByLabelText('remove uploaded file 0');
    expect(fileToPreviewButton).toBeInTheDocument();
  });

  test('should call onDeletePreviews if delete button of files is clicked', () => {
    const onDeleteMock = jest.fn();
    const { getByLabelText } = render(
      <Upload
        {...defaultProps}
        hasPreview
        filesToPreview={[{ name: 'file 1', file: '' }]}
        onDeletePreview={onDeleteMock}
      />
    );

    const fileToPreviewButton = getByLabelText('remove uploaded file 0');
    fireEvent.click(fileToPreviewButton);
    expect(onDeleteMock).toBeCalled();
  });

  test('should return null on delete button click if `onDeletePreview` prop is not passed', () => {
    const result =
      Upload.defaultProps?.onDeletePreview &&
      Upload.defaultProps.onDeletePreview();
    expect(result).toBeNull();
  });
});
