import React from "react";
import { Switch, Route, Router, Routes, BrowserRouter } from "react-router-dom";
import NavigationBar from './component/NavigationBar';
import AdminNavigationBar from './component/AdminNavigationBar';
import Home from "./Home"
import Categories from "./Categories"
import About from "./About"
import Contact from "./Contact"
import Logout from "./Logout"
import Login from "./Login"
import Register from "./Register"
import AddCycle from "./admin/AddCycle"
import ErrorPage from "./ErrorPage"
import Footer from "./Footer";
import ShowItem from "./component/ShowItem";
import Wishlist from "./Wishlist";
import UpdateCycle from "./admin/UpdateCycle";
import ShowFeedback from "./admin/ShowFeedback";
import ForgotPassword from "./ForgotPassword";
import RemoveItem from "./admin/RemoveItem";
import ShowOrders from "./component/ShowOrders";
import PreviousOrders from "./component/PreviousOrders";
import LiveOrders from "./admin/LiveOrders";
import DeliveredOrder from "./admin/DeliveredOrder";
import { useAuth0 } from "@auth0/auth0-react";
import { createBrowserHistory } from "history";
import ResponsiveAppBar from "./component/NavigationBar1";

const history = createBrowserHistory();

const LogOutAdmin=()=>{
  sessionStorage.removeItem("type")
  window.location.href="/login";
  return ;
}

const ADMIN_EMAIL = "19ituos082@ddu.ac.in"
const AdminUrls = [{url:'/Home', title:"Home"}, {url:'/admin/updateCycle', title: "UpdateCycle"}, {url:'/admin/feedbacks', title:"Feedbacks"}, {url:'/admin/removeitem', title: "RemoveItem"}, {url:'/admin/liveOrders',title:"LiveOrders"}, {url:'/admin/deliveredOrders', title:"DeliveredOrders"}]
const UserUrls = [{url: '/categories', title: 'Categories'},{url: '/about', title: 'About'}, {url: '/contact', title : 'Contact'}, {url: '/showItem', title: 'ShowItem'}, {url: '/wishlist', title: 'WishList'}, {url: '/showOrders', title: 'ShowOrders'}, {url: '/previousOrders', title: 'PreviousOrders'}, {url: '/payment', title: 'Payment'}]

function Profile()
{
  return <>Profile</>
}

function Profile1()
{
  return <>Profile....</>
}

function UserRoutes()
{
  return (
    <>
      <Route path="/profile" element={Profile}></Route>
    </>
  )
}

function App() {

  const {user, isAuthenticated, loginWithPopup, isLoading} = useAuth0();


  return (
    <BrowserRouter>
      <ResponsiveAppBar pages={UserUrls}/>
      <Routes>
        <Route path="/" element={Profile}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;

// if (sessionStorage.getItem("type") === "Admin") {
//   return (
//     <>
//       <AdminNavigationBar />
//       <Routes>
//         <Route exact path='/admin/Home' element={<AddCycle />} />
//         <Route exact path='/admin/updateCycle' element={<UpdateCycle />} />
//         <Route exact path='/admin/feedbacks' element={<ShowFeedback />} />
//         <Route exact path="/admin/removeitem" element={<RemoveItem />} />
//         <Route exact path="/admin/liveOrders" element={<LiveOrders />} />
//         <Route exact path="/admin/deliveredOrders" element={<DeliveredOrder />} />
//         <Route exact path="/login" element={<Login />} />
//         <Route exact path="/logoutAdmin" element={<LogOutAdmin/>} />
//         <Route exact path="/" element={<LogOutAdmin/>} />
        
//       </Routes>
//     </>
//   )
// }
// else{
//   return (
//     <>
//       <NavigationBar />
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/register" element={<Register />} />
//         <Route exact path="/login" element={<Login />} />
//         <Route excat path="/categories" element={<Categories />} />
//         <Route excat path="/about" element={<About />} />
//         <Route exact path="/contact" element={<Contact />} />
//         <Route exact path="/logout" element={<Logout />} />
//         <Route exact path="/showItem" element={<ShowItem />} />
//         <Route exact path="/wishlist" element={<Wishlist />} />
//         <Route exact path="/showOrders" element={<ShowOrders />} />
//         <Route exact path="/previousOrders" element={<PreviousOrders />} />
//         <Route exact path="/forgotPassword" element={<ForgotPassword />} />
//         <Route exact path="/payment" render={()=>{window.location.href="payment.html"}} />          
//         <Route path='*' element={<ErrorPage />} />
//       </Routes>
//       <Footer />
//     </>);
// }