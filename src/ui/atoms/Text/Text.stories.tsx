import type { Meta, StoryObj } from "@storybook/react";

import Text from "./Text";

export const Primary: StoryObj<typeof Text> = {
  args: {
    children: "Hello from Storybook",
  },
};

export default {
  title: "UI/Text",
  component: Text,
} as Meta<typeof Text>;
