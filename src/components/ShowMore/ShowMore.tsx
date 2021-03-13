import React, {
  CSSProperties,
  MouseEvent,
  ReactNode,
  useState,
} from 'react';
import { DoubleChevron } from '../../assets/icons';
import {
  StyledShowMore,
  ShowMoreContent,
  StyledShowMoreLink,
  StyledShowMoreIcon,
} from './ShowMore.style';

export interface ShowMoreProps {
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
   * show more content
   */
  content: string | ReactNode;
  /**
   * number of content lines that are visible when show more is collapsed
   */
  numberOfPreviewLines?: number;
}

export const ShowMore: React.FC<ShowMoreProps> = ({
  content,
  numberOfPreviewLines,
  ...props
}) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const toggleShowMore = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const label: string = showMore ? 'show less' : 'show more';
  const lineHeight = 1.2; // in rem

  return (
    <StyledShowMore {...props}>
      <ShowMoreContent
        showMore={showMore}
        style={{
          maxHeight: `${
            !showMore
              ? `${
                  numberOfPreviewLines &&
                  numberOfPreviewLines * lineHeight - 0.4
                }rem`
              : 'inherit'
          }`,
        }}
      >
        {content}
      </ShowMoreContent>
      <StyledShowMoreLink
        data-testid='show-more-link'
        onClick={toggleShowMore}
        href=''
      >
        {label}{' '}
        <StyledShowMoreIcon
          showMore={showMore}
          src={DoubleChevron}
          alt={`${label} icon`}
        />
      </StyledShowMoreLink>
    </StyledShowMore>
  );
};

ShowMore.defaultProps = {
  id: '',
  className: '',
  style: {},
  content: '',
  numberOfPreviewLines: 5,
};
