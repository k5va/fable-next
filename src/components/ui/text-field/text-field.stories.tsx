import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./text-field";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof TextField> = {
  title: "Fable/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TextField>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    intent: "primary",
    label: "Nombre",
  },
};

export const Error: Story = {
  args: {
    intent: "error",
    label: "Nombre",
    error: "No pasa nada!",
  },
};
