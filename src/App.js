import React from 'react';
import './App.css';
import Header from './component/Header/Header'
import Shop from './component/shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
   Link,
} from "react-router-dom";
import Order from './component/order/Order';
import Manage from './component/manage/Manage';
import NotFound from './component/notfound/NotFound';
import ProductDetails from './component/productDetails/ProductDetails';
import Shipment from './component/Shipment/Shipment';
import LogIn from './component/LogIn/LogIn';
import { createContext } from 'react';
import { useState } from 'react';
export const userContext = createContext();

function App() {
  const [logInUser, setLogInUser] = useState({});
  return (
    <userContext.provider value ={[logInUser, setLogInUser]} >
      {/* <h3> email: {logInUser.email} </h3> */}
   <Header></Header>
   <Router>
   
     <Switch>
       <Route path="/shop">
         <Shop></Shop>
 </Route>
 <Route path="/order">
 <Order></Order>
 </Route>
 <Route path="/manage">
<Manage></Manage>
 </Route>
 <Route path="/shipment">
<Shipment></Shipment>
 </Route>
 <Route path="/login">
<LogIn></LogIn>
 </Route>
 <Route exact path="/">
<Shop></Shop>
 </Route>
<Route path="/product/:productKey">
<ProductDetails></ProductDetails>
</Route>
<Route path="*">
<NotFound></NotFound>
</Route>

     </Switch>
   </Router>
   </userContext.provider>
  );
}

export default App;
