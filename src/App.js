import './App.css';
import {Header} from "./components/header/Header";
import {Outlet} from  "react-router-dom";
import {Footer} from "./components/Footer/Footer";



function App() {
  return (
      <div>
          <Header />
          <Outlet />
          <Footer/>
      </div>
 );
}

export default App;
