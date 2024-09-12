import { useExpoRouterActions } from "@rise-tools/kit-expo-router";
import {
  useToastActions,
  useHapticsActions,
  useLinkingActions,
} from "@rise-tools/kitchen-sink";

export function useRiseActions() {
  return {
    ...useHapticsActions(),
    ...useLinkingActions(),
    ...useToastActions(),
    ...useExpoRouterActions(),
  };
}
