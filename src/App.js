import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Menu from "./components/Menu";
import Offer from "./components/Offers";
import Why from "./components/WhyChoosenUs";
import Api from "./components/Api";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
            <Route path="/" Component={Api}/>
            <Route  path="/menu" Component={Menu} />
            <Route   path="/offers" Component={Offer} />
            <Route  path="/chooseus" Component={Why}/>
          </Routes>
    </BrowserRouter>
  );       
}

export default App;