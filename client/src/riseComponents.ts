import {
  SVGComponents,
  FormComponents,
  RiseComponents,
  QRCodeComponents,
  TamaguiComponents,
  LucideIconsComponents,
} from "@rise-tools/kitchen-sink";

export const components = {
  ...FormComponents,
  ...LucideIconsComponents,
  ...QRCodeComponents,
  ...RiseComponents,
  ...SVGComponents,
  ...TamaguiComponents,
} as never;
