import logo from "./logo.svg";
import "./App.css";
import { TriaAuthModal } from "@tria-sdk/authenticate-react";
import { useTriaAuth } from "@tria-sdk/authenticate-react";
function App() {
  const {
    showAuthModal,

    isReady,
  } = useTriaAuth();

  if (!isReady) return <div>Loading...</div>;

  return (
    <div className="App">
      <TriaAuthModal />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={showAuthModal}>Login</button>
      </header>
    </div>
  );
}

export default App;
