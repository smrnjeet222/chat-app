import "./styles.css";

import { BrowserRouter, Route } from "react-router-dom";
import Join from "./pages/Join";
import Chat from "./pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Join} />
      <Route path="/chat" exact component={Chat} />
    </BrowserRouter>
  );
}

export default App;
