import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Select> = {
  title: "Fable/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    value: "asc",
    children: (
      <Select.Menu>
        <Select.MenuItem value="desc">Descending</Select.MenuItem>
        <Select.MenuItem value="asc">Ascending</Select.MenuItem>
      </Select.Menu>
    ),
  },
};
