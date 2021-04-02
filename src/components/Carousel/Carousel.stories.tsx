import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Carousel, CarouselProps } from './Carousel';
import Test from '../../assets/images/test.jpg';
import Test1 from '../../assets/images/test1.jpg';
import Test2 from '../../assets/images/test2.jpg';
import Test3 from '../../assets/images/test3.jpg';
import Test4 from '../../assets/images/test4.jpg';
import Test5 from '../../assets/images/test5.jpg';
import Test6 from '../../assets/images/test6.jpg';
import Test7 from '../../assets/images/test7.jpg';
import { ORIENTATION } from '../../constants';

export default {
  title: 'Carousel',
  component: Carousel,
  args: {
    title: 'Image slider',
    items: [
      { src: Test, name: 'test' },
      { src: Test1, name: 'test1' },
      { src: Test2, name: 'test2' },
      { src: Test3, name: 'test3' },
      { src: Test4, name: 'test4' },
    ],
  },
} as Meta;

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: ORIENTATION.VERTICAL,
  items: [
    { src: Test5, name: 'test5' },
    { src: Test6, name: 'test6' },
    { src: Test7, name: 'test7' },
  ],
};

export const WithPreviews = Template.bind({});
WithPreviews.args = { hasPreviews: true };

export const AutomaticView = Template.bind({});
AutomaticView.args = { allowAutomaticView: true };

export const ControlledAutomaticView = Template.bind({});
ControlledAutomaticView.args = {
  allowAutomaticView: true,
  canControlAutomaticView: true,
};
