import React from "react";
import {  Route, Routes, BrowserRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ResponsiveAppBar from "./component/NavigationBar1";
import Home1 from './Home1'
import Categories1 from './Categories1'
import About1 from './About1'
import Contact1 from './Contact1'
import ShowItem1 from './ShowItem1'
import Wishlist1 from './Wishlist1'
import ShowOrders1 from './ShowOrders1'
import PreviousOrders1 from './PreviousOrders1'
import ProtectedRoute from "./routes/ProtectedRoute";
import Payment1 from "./Payment1";

const ADMIN_EMAIL = "19ituos082@ddu.ac.in"
const AdminUrls = [{url:'/Home', title:"Home"}, {url:'/admin/updateCycle', title: "UpdateCycle"}, {url:'/admin/feedbacks', title:"Feedbacks"}, {url:'/admin/removeitem', title: "RemoveItem"}, {url:'/admin/liveOrders',title:"LiveOrders"}, {url:'/admin/deliveredOrders', title:"DeliveredOrders"}]
const UserUrls = [{url: '/categories', title: 'Categories'}, {url: '/showItem', title: 'ShowItem'}, {url: '/wishlist', title: 'WishList'}, {url: '/showOrders', title: 'ShowOrders'}, {url: '/previousOrders', title: 'PreviousOrders'},{url: '/about', title: 'About'},{url: '/contact', title : 'Contact'}, {url: '/payment', title: 'Payment'}]

function App() {

  const {user, isAuthenticated, loginWithPopup} = useAuth0();

  return (
    <BrowserRouter>
      <ResponsiveAppBar pages={UserUrls}/>
      <Routes>
        <Route path="/" exact element={<Home1/>}/>
        <Route path="/categories" exact element={<ProtectedRoute Component={<Categories1/>} isAuthenticated={isAuthenticated}/>}/>
        <Route path="/about" exact element={<ProtectedRoute Component={<About1/>} isAuthenticated={isAuthenticated}/>}/>
        <Route path="/contact" exact element={<ProtectedRoute Component={<Contact1/>} isAuthenticated={isAuthenticated}/>}/>
        <Route path="/showItem" exact element={<ProtectedRoute Component={<ShowItem1/>} isAuthenticated={isAuthenticated}/>}/>
        <Route path="/wishlist" exact element={<ProtectedRoute Component={<Wishlist1/>} isAuthenticated={isAuthenticated}/>}/>
        <Route path="/showOrders" exact element={<ProtectedRoute Component={<ShowOrders1/>} isAuthenticated={isAuthenticated}/>}/>
        <Route path="/previousOrders" exact element={<ProtectedRoute Component={<PreviousOrders1/>} isAuthenticated={isAuthenticated}/>}/>
        <Route path="/payment" exact element={<ProtectedRoute Component={<Payment1/>} isAuthenticated={isAuthenticated}/>}/>
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