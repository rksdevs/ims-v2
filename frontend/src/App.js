import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Brands from "./pages/brands/Brands";
import AddBrands from "./pages/addBrands/AddBrands";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
        {/* <Topbar />
          <div className="container">
            <Sidebar />
            <Home />
          </div> */}
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path="brands">
              <Route index element={<Brands />}/>
              <Route path="addBrands" element={<AddBrands />}/>
            </Route> 
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
