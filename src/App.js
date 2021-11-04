import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddNew from './components/AddNew/AddNew';
import AuthProvider from './components/context/Authprovider';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageOrders from './components/ManageOrders/ManageOrders';
import MealDetail from './components/MealDetail/MealDetail';
import MyOrders from './components/MyOrders/MyOrders';
import Notfound from './components/Notfound/Notfound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
     <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login> </Login>
            </Route>
            <PrivateRoute path="/orders">
              <MyOrders></MyOrders>
              </PrivateRoute>
            <PrivateRoute path="/m-orders">
              <ManageOrders></ManageOrders>
              </PrivateRoute>
            <PrivateRoute path="/add-food">
              <AddNew></AddNew>
              </PrivateRoute>
              <PrivateRoute exact path="/service/:mealId">
            <MealDetail></MealDetail>
          </PrivateRoute>
             <Route path="*">
              <Notfound></Notfound>
            </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
