import { Plugin } from "@yarnpkg/core";
import * as dotenv from "dotenv";
import ciDetect from "@npmcli/ci-detect";

const isCI = !!ciDetect();

if (!isCI || (isCI && process.env.YARNPLUGIN_DOTENV_CI)) {
  dotenv.config();
}

const plugin: Plugin = {};

export default plugin;
