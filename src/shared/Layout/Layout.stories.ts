import type { Meta, StoryObj } from '@storybook/react';

import Layout from './Layout';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Layout> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Layout',
  component: Layout,
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
