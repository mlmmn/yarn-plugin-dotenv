import { Plugin } from "@yarnpkg/core";
import * as dotenv from "dotenv";
import ciDetect from "@npmcli/ci-detect";
import findConfig from "find-config";

const isCI = !!ciDetect();

if (!isCI || (isCI && process.env.YARNPLUGIN_DOTENV_CI)) {
  dotenv.config({ path: findConfig(".env") });
}

const plugin: Plugin = {};

export default plugin;
