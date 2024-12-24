import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TriaProvider } from "@tria-sdk/authenticate-react";
import "@tria-sdk/authenticate-react/dist/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TriaProvider
      initialConfig={{
        analyticsKeys: {
          clientId: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
          projectId: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
        },
        chain: "FUSE",
      }}
      initialUIConfig={{
        modalMode: true,
        darkMode: true,
        dappName: "Tria Demo",
      }}
      initialWalletUIConfig={{
        darkMode: true,
      }}
    >
      <App />
    </TriaProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
