import { pnpmWorkspaceRoot } from "@node-kit/pnpm-workspace-root";
import path from "path";

const PACKAGE_DIR = await pnpmWorkspaceRoot();
const WORKSPACES = path.resolve(PACKAGE_DIR, "workspaces");

export const CLIENT_DIST_DIR = path.resolve(WORKSPACES, "client/dist");
