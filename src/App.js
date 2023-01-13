import './App.css';

import Header from "./components/header/Header";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <div>
          <BrowserRouter >
            <Header />
              {/*<RouterProvider router={} />*/}
          </BrowserRouter>
      </div>
 );
}

export default App;
