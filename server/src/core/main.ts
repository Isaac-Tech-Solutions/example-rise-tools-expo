import { rise } from "./rise";

rise.run({
  tunnel: Boolean(process.env.TUNNEL ?? false),
  projectKey: String(process.env.PROJECT_KEY) ?? null,
});
