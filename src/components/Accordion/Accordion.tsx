import React, { CSSProperties, useState, ReactNode } from 'react';
import { Chevron } from '../../assets/icons';
import { isEventValid } from '../../utils/utils';
import {
  StyledAccordion,
  StyledAccordionTitle,
  StyledAccordionArrow,
  StyledAccordionContent,
} from './Accordion.style';

export interface AccordionProps {
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
   * Accordion's title
   */
  title: string | ReactNode;
  /**
   * Accordion's content; is only visible when the component is expanded
   */
  content?: string | ReactNode;
  /**
   * Is Accordion disabled?
   */
  disabled?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  disabled,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleIsExpanded = (event: any) =>
    isEventValid(event) && !disabled && setIsExpanded((prevIsExpanded) => !prevIsExpanded);

  return (
    <StyledAccordion {...props} onBlur={() => setIsExpanded(false)}>
      <StyledAccordionTitle
        role='button'
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        aria-expanded={isExpanded}
        onClick={toggleIsExpanded}
        onKeyDown={toggleIsExpanded}
        disabled={disabled}
        isExpanded={isExpanded}
      >
        {title}
        <StyledAccordionArrow
          src={Chevron}
          alt='chevron icon'
          isExpanded={isExpanded}
        />
      </StyledAccordionTitle>

      <StyledAccordionContent isExpanded={isExpanded}>
        {content}
      </StyledAccordionContent>
    </StyledAccordion>
  );
};

Accordion.defaultProps = {
  id: '',
  className: '',
  style: {},
  disabled: false,
  title: '',
  content: ''
};
