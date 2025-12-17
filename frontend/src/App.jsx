import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./component/Home";
import About from "./component/About";
import Product from "./component/Product";
import Men from "./component/Men";
import AdminUser from "./component/AdminUser";
import Shop from "./component/Shop";
import CartProduct from "./component/CartProduct";
import Dashboard from "./component/Dashboard";
import AdminDashboard from "./component/AdminDashboard";
import Sliderimage from "./component/Sliderimage";
import FeaturedProductsSlider from "./component/FeaturedProductsSlider";
import BuyNow from "./component/BuyNow";
import Payment from "./component/Payment";
import DeliverTo from "./component/DeliverTo";
import Women from "./component/WomenProduct";
import Contact from "./component/ContactUs";
import Login from "./component/Login";
import Register from "./component/Register";
import Treeanimation from "./component/Treeanimation";
import PurchaseOrderDetail from "./component/PurchaseOrderDetail";

const App=()=>{
  return(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="product" element={<Product/>}/>
                <Route path="men" element={<Men/>}/>
                <Route path="women" element={<Women/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="adminuser" element={<AdminUser/>}/>
                <Route path="cartproduct" element={<CartProduct/>}/>
                <Route path="featuredproductsslider" element={<FeaturedProductsSlider/>}/>
                <Route path="buynow" element={<BuyNow/>}/>
                <Route path="payment" element={<Payment/>}/>                
                <Route path="deliverto" element={<DeliverTo/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="shop" element={<Shop/>}/>
                <Route path="login/registernow" element={<Register/>}/>
                <Route path="registernow" element={<Register/>}/>
                <Route path="treeanimation" element={<Treeanimation/>}/>
                <Route path="/home/contact" element={<Contact/>}/>
                <Route path="/product/contact" element={<Contact/>}/>
                <Route path="/home/about" element={<About/>}/>

                <Route path="dashboard" element={<Dashboard/>}>
                    <Route index element={<AdminDashboard/>}/>
                    <Route path="uploadproduct" element={<AdminDashboard/>}/>
                    <Route path="uploadimageslider" element={<Sliderimage/>}/>
                    <Route path="productorderdetail" element={<PurchaseOrderDetail/>}/>
                </Route>

                 
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;