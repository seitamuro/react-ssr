import { hydrateRoot } from "react-dom/client";

import { App } from "./app";

const container = document.getElementById("root");
hydrateRoot(container, <App />);
