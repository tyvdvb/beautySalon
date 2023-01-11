import './App.css';

import Header from "./components/header/Header";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <div>
          <BrowserRouter >
        <Header />
          </BrowserRouter>
      </div>
 );
}

export default App;
