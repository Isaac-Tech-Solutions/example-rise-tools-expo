import { Rise } from "@rise-tools/react";

import { modelSource } from "@/src/modelSource";
import { components } from "@/src/riseComponents";
import { useRiseActions } from "@/src/riseActions";

export default function MainScreen() {
  return (
    <Rise
      path="button"
      components={components}
      modelSource={modelSource}
      actions={{
        ...useRiseActions(),
        ...action,
      }}

      // Example static props
      
      title="Hello World"

      // End example static props
    />
  );
}
