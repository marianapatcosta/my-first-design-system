import React, {
  CSSProperties,
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import { isEventValid } from '../../utils/utils';
import {
  StyledImageOverlay,
  StyledImage,
  StyledImagePlaceholder,
} from './Image.style';

export interface ImageProps {
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
   * additional css class for image placeholder
   */
  placeholderClass?: string;
  /**
  /**
   * Image src attribute
   */
  src: string;
  /**
   * Image alt attribute
   */
  alt?: string;
  /**
   * is Image increasing size on click?
   */
  isZoomable?: boolean;
  /**
   * an event should be triggered on Image click? (Only available if isZoomable = false)
   */
  isClickable?: boolean;
  /**
   * Click handler (Only available if isZoomable = false)
   */
  onClick?:
    | MouseEventHandler<HTMLImageElement>
    | KeyboardEventHandler<HTMLImageElement>;
}

export const Image: React.FC<ImageProps> = ({
  placeholderClass,
  isClickable,
  isZoomable,
  onClick,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isZoomedIn, setIsZoomedIn] = useState<boolean>(false);
  const [wasImageClicked, setWasImageClicked] = useState<boolean>(false);

  const handleImageClick = (
    event: any /* MouseEvent<HTMLImageElement> | KeyboardEvent<HTMLImageElement> */
  ) => {
    if (!isEventValid(event) || (!isClickable && !isZoomable)) return;
    if (isZoomable) {
      setIsZoomedIn((prevIsZoomedIn) => !prevIsZoomedIn);
      !wasImageClicked && setWasImageClicked(true);
      return;
    }
    onClick && onClick(event);
  };

  useEffect(() => {
    if (isZoomedIn) {
      // document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      return;
    }

    // document.getElementsByTagName('body')[0].style.overflow = 'scroll';
    document.documentElement.style.overflow = 'scroll';
  }, [isZoomedIn]);

  return (
    <StyledImageOverlay isZoomable={isZoomable} isZoomedIn={isZoomedIn} >
      {!isLoaded && <StyledImagePlaceholder data-testid='image-placeholder' className={placeholderClass} />}
      <StyledImage
        data-testid='image'
        role={isClickable ? 'button' : 'img'}
        tabIndex={isClickable ? 0 : -1}
        isClickable={isClickable}
        isLoaded={isLoaded}
        isZoomedIn={isZoomedIn}
        isZoomable={isZoomable}
        wasImageClicked={wasImageClicked}
        loading='lazy'
        onClick={handleImageClick}
        onKeyDown={handleImageClick}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </StyledImageOverlay>
  );
};

Image.defaultProps = {
  id: '',
  className: '',
  style: {},
  placeholderClass: '',
  isClickable: false,
  isZoomable: false,
  src: '',
  alt: '',
  onClick: () => null,
};
