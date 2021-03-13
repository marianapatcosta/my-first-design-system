import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ShowMore, ShowMoreProps } from './ShowMore';

export default {
  title: 'ShowMore',
  component: ShowMore,
  args: {},
} as Meta;

const Template: Story<ShowMoreProps> = (args) => <ShowMore {...args} />;

export const WithString = Template.bind({});
WithString.args = {
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae mollis velit. Vestibulum lacinia nisi vitae lorem sollicitudin, vel ultricies enim suscipit. Etiam vel sodales dolor. Nunc iaculis quis arcu faucibus tincidunt. Maecenas blandit dapibus porttitor. Quisque sed mauris elit. Ut placerat, augue ut blandit ultricies, nunc nulla vehicula mi, in vehicula urna lectus nec nibh. Aenean quis risus imperdiet, bibendum mauris vitae, consequat tortor. Donec aliquam ante vel turpis fringilla facilisis. Integer varius non lacus id ultrices. In eleifend dolor ante, congue placerat elit maximus eget. Duis varius ligula erat, et varius neque euismod ac. In vitae posuere nisl. Sed non justo tortor.
  Integer risus est, feugiat at ultrices vitae, pretium in est. In vel tristique augue. Nam tempor neque erat, vitae cursus diam eleifend non. Aliquam libero odio, vestibulum at nunc sit amet, suscipit suscipit libero. Nam ac pretium felis, eu convallis libero. Phasellus quis odio sit amet nibh tempor placerat non sed nunc. Aliquam pellentesque efficitur iaculis. Cras eget gravida leo.
  Ut sed mattis erat. In in nunc eu ligula egestas viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fermentum sem mauris, semper consequat urna sagittis sed. Maecenas lacinia nulla lorem, quis condimentum orci ultricies quis. Aliquam erat volutpat. Vestibulum volutpat, metus quis malesuada lobortis, quam erat accumsan lectus, nec bibendum leo libero facilisis risus. Nulla sed viverra orci.`,
};

export const WithList = Template.bind({});
WithList.args = {
  content: (
    <ul>
      {['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'].map(
        (item, index) => (
          <li key={`example-list-${index}`}>{item}</li>
        )
      )}
    </ul>
  ),
};
