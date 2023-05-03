import type { Meta, StoryObj } from '@storybook/react';

import Navigation from './Navigation';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Navigation> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Navigation',
  component: Navigation,
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
