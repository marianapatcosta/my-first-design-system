var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { render, fireEvent } from '@testing-library/react';
import { Upload } from './Upload';
describe('Upload', function () {
    var defaultProps = { onUpload: function () { return null; }, label: 'Upload' };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Upload, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should display label', function () {
        var getByText = render(_jsx(Upload, __assign({}, defaultProps), void 0)).getByText;
        getByText('Upload');
    });
    test('should handle change events', function () {
        var onUploadMock = jest.fn();
        var getByLabelText = render(_jsx(Upload, __assign({}, defaultProps, { onUpload: onUploadMock }), void 0)).getByLabelText;
        var input = getByLabelText('File upload');
        fireEvent.change(input);
        expect(onUploadMock).toBeCalled();
    });
    test('should display images to preview if `hasPreview`prop is passed', function () {
        var getByAltText = render(_jsx(Upload, __assign({}, defaultProps, { hasPreview: true, imagesToPreview: [{ name: 'image 1', src: '' }] }), void 0)).getByAltText;
        var imageToPreview = getByAltText('uploaded-preview-0');
        expect(imageToPreview).toBeInTheDocument();
    });
    test('should call onDeletePreviews if delete button of images is clicked', function () {
        var onDeleteMock = jest.fn();
        var getByLabelText = render(_jsx(Upload, __assign({}, defaultProps, { hasPreview: true, imagesToPreview: [{ name: 'image 1', file: '' }], onDeletePreview: onDeleteMock }), void 0)).getByLabelText;
        var imageToPreviewButton = getByLabelText('remove uploaded image 0');
        fireEvent.click(imageToPreviewButton);
        expect(onDeleteMock).toBeCalled();
    });
    test('should display files to preview if `hasPreview`prop is passed', function () {
        var getByLabelText = render(_jsx(Upload, __assign({}, defaultProps, { hasPreview: true, filesToPreview: [{ name: 'file 1', file: '' }] }), void 0)).getByLabelText;
        var fileToPreviewButton = getByLabelText('remove uploaded file 0');
        expect(fileToPreviewButton).toBeInTheDocument();
    });
    test('should call onDeletePreviews if delete button of files is clicked', function () {
        var onDeleteMock = jest.fn();
        var getByLabelText = render(_jsx(Upload, __assign({}, defaultProps, { hasPreview: true, filesToPreview: [{ name: 'file 1', file: '' }], onDeletePreview: onDeleteMock }), void 0)).getByLabelText;
        var fileToPreviewButton = getByLabelText('remove uploaded file 0');
        fireEvent.click(fileToPreviewButton);
        expect(onDeleteMock).toBeCalled();
    });
});
