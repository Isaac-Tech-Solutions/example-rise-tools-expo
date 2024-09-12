import type { React } from "react";
import { Text, Button as TButton } from "@rise-tools/kitchen-sink/server";

import { theme } from "../theme";

export interface IButton {
  title: string;
}

export const Button: React.FC<IButton> = ({ title }) => (
  <TButton
    width={200}
    minHeight={48}
    borderRadius={8}
    paddingHorizontal={24}
    onPress={{ $: "action", name: "onPress" }}
    backgroundColor={theme.colors.primary.MAIN}
  >
    <Text
      fontSize={16}
      fontWeight="bold"
      textAlign="center"
      color={theme.colors.secondary.MAIN}
    >
      {title}
    </Text>
  </TButton>
);
