import { createWSModelSource } from "@rise-tools/ws-client";
import { WS_URL } from "./config/constants";

export const modelSource = createWSModelSource(WS_URL);
