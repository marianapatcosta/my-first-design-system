import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Card, CardProps } from './Card';

export default {
  title: 'Card',
  component: Card
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  children: <div>This is Card component</div>
};