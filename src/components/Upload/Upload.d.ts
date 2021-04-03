import React, { ChangeEvent, CSSProperties, MouseEventHandler } from 'react';
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
export declare const Upload: React.FC<UploadProps>;
