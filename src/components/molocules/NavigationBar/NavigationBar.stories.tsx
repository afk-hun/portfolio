import type { Meta, StoryObj } from "@storybook/react";
//import { fn } from "@storybook/test";

import { NavigationBar } from "./NavigationBar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Project/Molecules/NavigationBar",
  component: NavigationBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    projects: [
      {
        name: "Project 1",
        url: "project-1",
      },
      {
        name: "Project 2",
        url: "project-2",
      },
      {
        name: "Project 3",
        url: "project-3",
      },
    ],
    socialMedia: [
      {
        icon: "linkedin",
        url: "https://linkedin.com",
      },
      {
        icon: "instagram",
        url: "https://instagram.com",
      },
      {
        icon: "youtube",
        url: "https://youtube.com",
      },
      {
        icon: "github",
        url: "https://github.com",
      },
    ],
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {};
