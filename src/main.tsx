import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {GlobalStyle }from "./global";
import { Routes } from "./routes/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <Routes/>
  </StrictMode>
);
