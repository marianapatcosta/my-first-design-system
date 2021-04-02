import React, {
  ChangeEvent,
  CSSProperties,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Chevron } from '../../assets/icons';
import { ORIENTATION, PREVIEWS_POSITION } from '../../constants';
import { isEventValid } from '../../utils/utils';
import {
  StyledCarousel,
  StyledCarouselContent,
  StyledCarouselSelected,
  StyledCarouselHeader,
  StyledCarouselTitle,
  StyledCarouselToggle,
  StyledChevron,
  StyledIndicatorBar,
  StyledIndicatorBarItem,
  StyledImage,
  StyledImageWrapper,
  StyledPreviews,
  StyledImagePreview,
} from './Carousel.style';

type orientationTypes = ORIENTATION;

export interface CarouselProps {
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
   * Carousel's title
   */
  title?: string;
  /**
   * array of images to display
   */
  items: Array<{ src: string; name: string }>;
  /**
   * Carousel's orientation
   */
  orientation?: orientationTypes;
  /**
   * is it supposed to change the main image automatically after a certain time interval, i.e without user request?
   */
  allowAutomaticView?: boolean;
  /**
   * is it supposed to show a toggle to alternate between automatic and manual mode?
   */
  canControlAutomaticView?: boolean;
  /**
   * is it supposed to show image previwes beside the main image?
   */
  hasPreviews?: boolean;
  /**
   * time interval to automatically change the main image, in milliseconds, if automatic view is enable
   */
  imageChangeInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  title,
  items,
  hasPreviews,
  orientation,
  imageChangeInterval,
  allowAutomaticView,
  canControlAutomaticView,
  ...props
}) => {
  const [presentingItemIndex, setPresentingItemIndex] = useState<number>(0);
  const [isAutomaticView, setAutomaticView] = useState<boolean>(
    allowAutomaticView || false
  );
  const chevronRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let interval: number;
    if (isAutomaticView) {
      interval = window.setInterval(
        () => !!chevronRef && chevronRef.current?.click(),
        imageChangeInterval
      );
    }
    return () => clearInterval(interval);
  }, [isAutomaticView, imageChangeInterval]);

  const toggleAutomaticView = (event?: ChangeEvent<HTMLInputElement>) =>
    !!event &&
    allowAutomaticView &&
    canControlAutomaticView &&
    setAutomaticView(event.target.checked);

  const handleNextItemClick = () => {
    const newIndex =
      presentingItemIndex < items.length - 1 ? presentingItemIndex + 1 : 0;
    setPresentingItemIndex(newIndex);
  };

  const handlePreviousItemClick = () => {
    const newIndex =
      presentingItemIndex > 0 ? presentingItemIndex - 1 : items.length - 1;
    setPresentingItemIndex(newIndex);
  };

  const handleItemClick = (index: number) => setPresentingItemIndex(index);

  const renderPreviews = (previewPosition: PREVIEWS_POSITION) => {
    const nextIndex: number =
      presentingItemIndex < items.length - 1 ? presentingItemIndex + 1 : 0;
    const afterNextIndex: number =
      nextIndex < items.length - 1 ? nextIndex + 1 : 0;
    const previousIndex: number =
      presentingItemIndex > 0 ? presentingItemIndex - 1 : items.length - 1;
    const beforePreviousIndex: number =
      previousIndex > 0 ? previousIndex - 1 : items.length - 1;
    const isBefore: boolean = previewPosition === PREVIEWS_POSITION.BEFORE;

    return (
      <StyledPreviews>
        <StyledImagePreview
          role='button'
          tabIndex={0}
          isVertical={orientation === ORIENTATION.VERTICAL}
          isClickable
          src={isBefore ? items[beforePreviousIndex].src : items[nextIndex].src}
          alt={`preview-${
            isBefore ? items[beforePreviousIndex].name : items[nextIndex].name
          }`}
          onClick={() =>
            handleItemClick(isBefore ? beforePreviousIndex : nextIndex)
          }
        />
        <StyledImagePreview
          role='button'
          tabIndex={0}
          isClickable
          isVertical={orientation === ORIENTATION.VERTICAL}
          src={isBefore ? items[previousIndex].src : items[afterNextIndex].src}
          alt={`preview-${
            isBefore ? items[previousIndex].name : items[afterNextIndex].name
          }`}
          onClick={() =>
            handleItemClick(isBefore ? previousIndex : afterNextIndex)
          }
        />
      </StyledPreviews>
    );
  };

  return (
    <StyledCarousel {...props} role='listbox' aria-label='images slider'>
      <StyledCarouselContent>
        <StyledCarouselHeader>
          <StyledCarouselTitle>{title}</StyledCarouselTitle>
          {allowAutomaticView && canControlAutomaticView && (
            <StyledCarouselToggle
              data-testid='carousel-toggle'
              leftLabel='off'
              rightLabel='on'
              checked={isAutomaticView}
              onChange={toggleAutomaticView}
            />
          )}
        </StyledCarouselHeader>
        <StyledCarouselSelected>
          {hasPreviews && renderPreviews(PREVIEWS_POSITION.BEFORE)}
          <StyledImageWrapper isVertical={orientation === ORIENTATION.VERTICAL}>
            {items.map((item, index) => (
              <StyledImage
                role='option'
                key={`slide-image-${item.name}`}
                src={item.src}
                alt={`image-${item.name}`}
                isSelected={presentingItemIndex === index}
              />
            ))}
            <StyledChevron
              aria-label='click to select previous item'
              isLeftChevron
              onClick={handlePreviousItemClick}
              onKeyDown={(event) =>
                isEventValid(event) && handlePreviousItemClick()
              }
            >
              <img src={Chevron} alt='left-chevron' />
            </StyledChevron>

            <StyledChevron
              aria-label='click to select next item'
              ref={chevronRef}
              onClick={handleNextItemClick}
              onKeyDown={(event) =>
                isEventValid(event) && handleNextItemClick()
              }
            >
              <img src={Chevron} alt='right-chevron' />
            </StyledChevron>

            <StyledIndicatorBar>
              {items.map((item, index) => (
                <StyledIndicatorBarItem
                  data-testid={`bar-item-${index}`}
                  aria-label={`click to select item ${index}`}
                  key={`carousel-item-${index * Math.random()}`}
                  isFilled={index <= presentingItemIndex}
                  onClick={() => handleItemClick(index)}
                  onKeyDown={(event) =>
                    isEventValid(event) && handleItemClick(index)
                  }
                />
              ))}
            </StyledIndicatorBar>
          </StyledImageWrapper>
          {hasPreviews && renderPreviews(PREVIEWS_POSITION.AFTER)}
        </StyledCarouselSelected>
      </StyledCarouselContent>
    </StyledCarousel>
  );
};

Carousel.defaultProps = {
  id: '',
  className: '',
  style: {},
  title: '',
  items: [],
  hasPreviews: false,
  imageChangeInterval: 1500,
  allowAutomaticView: false,
  canControlAutomaticView: false,
  orientation: ORIENTATION.LANDSCAPE,
};
