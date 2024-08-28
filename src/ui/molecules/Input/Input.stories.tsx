import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

export const Primary: StoryObj<typeof Input> = {
  args: {
    children: "Hello from Storybook",
  },
};

export default {
  title: "UI/Input",
  component: Input,
} as Meta<typeof Input>;
