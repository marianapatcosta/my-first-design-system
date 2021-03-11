import React, { CSSProperties, useState } from 'react';
import { Tab } from '../Tab/Tab';
import {
  StyledTabs,
  StyledTabsListWrapper,
  StyledTabsList,
  StyledTabsContent,
  StyledTabsSpacer,
} from './Tabs.style';

export interface TabsProps {
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
  /**
   * for accessibility purposes indicates for which purpose will Tabs be used?
   */
  tabsPurpose?: string;
  /**
   * content for Tabs
   */
  tabsMetadata: Array<{ label: string; content: JSX.Element }>;
  /**
   * Are Tabs disabled?
   */
  disabled?: boolean;
}

export const Tabs: React.FC<TabsProps> = ({
  disabled,
  tabsPurpose,
  tabsMetadata,
  className,
  ...props
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(
    +localStorage.getItem('activeTab')! || 0
  );

  const onClickTab = (tabIndex: number): void => {
    setActiveTabIndex(tabIndex);
    localStorage.setItem('activeTab', '' + tabIndex);
  };

  return (
    <StyledTabs className={className} {...props}>
      <StyledTabsListWrapper>
        <StyledTabsList role='tablist' aria-label={`Select ${tabsPurpose}`}>
          {tabsMetadata.map(({ label }, index: number) => (
            <Tab
              key={`tab-${index + Math.random()}`}
              label={label}
              disabled={disabled}
              isActive={index === activeTabIndex}
              onClick={() => onClickTab(index)}
            />
          ))}
        </StyledTabsList>
      </StyledTabsListWrapper>
      <StyledTabsContent
        role='tabpanel'
        aria-labelledby={tabsMetadata[activeTabIndex].label}
      >
        <StyledTabsSpacer />
        {tabsMetadata[activeTabIndex].content}
      </StyledTabsContent>
    </StyledTabs>
  );
};

Tabs.defaultProps = {
  id: '',
  className: '',
  style: {},
  tabsPurpose: '',
  tabsMetadata: [],
  disabled: false,
};
