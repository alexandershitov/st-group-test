import path from "path";

const serverRoot = () => path.join(__dirname, "../../../");

const viewsPath = () => path.join(serverRoot(), "views");

const layoutsPath = () => path.join(viewsPath(), "layouts");

export const Paths = { viewsPath, layoutsPath };
