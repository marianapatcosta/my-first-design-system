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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, } from 'react';
import { StyledUpload, StyledUploadWrapper, StyledUploadInput, StyledUploadPreview, StyledUploadPreviewContainer, StyledUploadPreviewFile, StyledUploadPreviewImage, StyledUploadPreviewButton, } from './Upload.style';
export var Upload = function (_a) {
    var label = _a.label, disabled = _a.disabled, fileTypes = _a.fileTypes, areMultipleFilesAllowed = _a.areMultipleFilesAllowed, className = _a.className, hasPreview = _a.hasPreview, imagesToPreview = _a.imagesToPreview, filesToPreview = _a.filesToPreview, onUpload = _a.onUpload, onDeletePreview = _a.onDeletePreview, props = __rest(_a, ["label", "disabled", "fileTypes", "areMultipleFilesAllowed", "className", "hasPreview", "imagesToPreview", "filesToPreview", "onUpload", "onDeletePreview"]);
    var inputRef = useRef(null);
    return (_jsxs(StyledUploadWrapper, { children: [_jsx(StyledUpload, __assign({}, props, { label: label, className: className, disabled: disabled, onClick: function () { return inputRef.current && inputRef.current.click(); } }), void 0),
            _jsx(StyledUploadInput, { "aria-label": 'File upload', ref: inputRef, type: 'file', multiple: areMultipleFilesAllowed, accept: fileTypes, onChange: onUpload }, void 0),
            hasPreview && (!!imagesToPreview || !!filesToPreview) && (_jsxs(StyledUploadPreview, __assign({ areThereFilesToPreview: !!filesToPreview && !!filesToPreview.length }, { children: [!!imagesToPreview &&
                        !!imagesToPreview.length &&
                        imagesToPreview.map(function (image, index) { return (_jsxs(StyledUploadPreviewContainer, { children: [_jsx(StyledUploadPreviewImage, { src: image, alt: "uploaded-preview-" + index }, void 0),
                                _jsx(StyledUploadPreviewButton, { "aria-label": "remove uploaded image " + index, onClick: function () { return !!onDeletePreview && onDeletePreview(index); } }, void 0)] }, "image-preview-" + index)); }),
                    !!filesToPreview &&
                        !!filesToPreview.length &&
                        filesToPreview.map(function (file, index) { return (_jsxs(StyledUploadPreviewContainer, { children: [_jsx(StyledUploadPreviewFile, { children: file.name }, void 0),
                                _jsx(StyledUploadPreviewButton, { areThereFilesToPreview: !!filesToPreview && !!filesToPreview.length, "aria-label": "remove uploaded file " + index, onClick: function () { return !!onDeletePreview && onDeletePreview(index); } }, void 0)] }, "file-preview-" + index)); })] }), void 0))] }, void 0));
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
    onUpload: function () { return null; },
    onDeletePreview: function () { return null; },
};
