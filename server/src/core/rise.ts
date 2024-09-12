import { setupRiseTools } from "@rise-tools/cli";
import { type Server, createWSServer } from "@rise-tools/server";

import { models } from "../app";

export interface RunProps {
  tunnel?: boolean;
  projectKey?: string;
}

class RiseServer {
  private server: Server;

  constructor() {
    const port = Number(process.env.APP_PORT || "3005");
    this.server = createWSServer(models as never, port);
  }

  public run(props: RunProps) {
    setupRiseTools({
      ...props,
      server: this.server,
    });
  }
}

export const rise = new RiseServer();
