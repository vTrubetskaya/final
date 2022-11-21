import { Routes, Route } from "react-router-dom";
import {HomePage} from './modules/HomePage/HomePage'
import {Blog} from './modules/Blog/Blog'
import {Layout} from './modules/Layout/Layout'
import { Post } from "./modules/Post";        
import { Cart } from "./modules/Cart/Cart";
import { CatalogApp} from "./modules/Catalog/CatalogApp"
import { Footer } from "./components/Footer";
import { AboutUs } from "./modules/AboutUs/AboutUs";
import { ContactUs } from "./modules/ContactUs/ContactUs";

function App() {
  
  return (
    <div className="App">
      <div className="App__container__outer">
        <div className="App__container__inner">        
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />}></Route>
              <Route path="blog" element={<Blog />}></Route>
              <Route path="blog/:id" element={<Post />}></Route>    
              <Route path="cart" element={<Cart />}></Route>  
              <Route path="catalog/*" element={<CatalogApp />}></Route> 
              <Route path="about_us" element={<AboutUs />}></Route>     
              <Route path="contact_us" element={<ContactUs />}></Route> 
            </Route>
          </Routes>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
