import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Image, ImageProps } from './Image';
import Test from '../../assets/images/test.jpg';

export default {
  title: 'Image',
  component: Image,
  args: { src: Test, style: { width: '300px' } },
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;
const TemplateWrapped: Story<ImageProps> = (args) => (
  <div style={{ width: '300px', height: '200px' }}>
    <Image {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Clickable = Template.bind({});
Clickable.args = { isClickable: true, onClick: () => console.log('clicked!') };

export const Zoomable = TemplateWrapped.bind({});
Zoomable.args = { isZoomable: true };
