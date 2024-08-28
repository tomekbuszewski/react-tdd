import type { Meta, StoryObj } from "@storybook/react";

import SignIn from "./SignIn";

export const Primary: StoryObj<typeof SignIn> = {
  args: {
    children: "Hello from Storybook",
  },
};

export default {
  title: "UI/SignIn",
  component: SignIn,
} as Meta<typeof SignIn>;
