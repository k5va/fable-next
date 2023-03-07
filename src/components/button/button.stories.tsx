import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Fable/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    intent: "primary",
    children: "Hola!",
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
    children: "Hola!",
  },
};
