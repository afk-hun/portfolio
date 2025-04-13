import type { Meta, StoryObj } from "@storybook/react";
//import { fn } from "@storybook/test";

import { ImageModal } from "./ImageModal";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Project/Molecules/ImageModal",
  component: ImageModal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
    locale: "en",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    src: "https://picsum.photos/id/237/1920/1080",
    // src: "https://picsum.photos/id/237/1080/1920",
    alt: "Image",
    hasMany: true,
    onLeftClick: () => console.log("Left"),
    onRightClick: () => console.log("Right"),
    onClose: () => console.log("Close"),
  },
} satisfies Meta<typeof ImageModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {};
