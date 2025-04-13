import type { Meta, StoryObj } from '@storybook/react';

import { ProfileImage } from './ProfileImage';
import { Media } from '@/payload-types';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Project/Molecules/ProfileImage',
  component: ProfileImage,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  args: {
    images: [
      {
        id: '1',
        url: 'https://picsum.photos/id/237/1920/1080',
        alt: 'Placeholder Image 1',
        width: 150,
        height: 150,
      } as Media,
      {
        id: '2',
        url: 'https://picsum.photos/id/235/1920/1080',
        alt: 'Placeholder Image 2',
        width: 200,
        height: 200,
      } as Media,
      {
        id: '3',
        url: 'https://picsum.photos/id/199/1920/1080',
        alt: 'Placeholder Image 3',
        width: 200,
        height: 200,
      } as Media,
    ],
  },
  argTypes: {},
} satisfies Meta<typeof ProfileImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {};
