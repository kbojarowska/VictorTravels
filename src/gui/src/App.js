import { Routes, Route } from 'react-router-dom';
import SearchComp from './SearchComp';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import TripList from './TripList';
import TripDetail from './TripDetail';
import PrivateRoute from './PrivateRoute';
import Cart from './Cart';
import Buy from './Buy';
import LoginRoute from './LoginRoute';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' />
        <Route path="/search" element={<SearchComp />} />
        <Route path="/trips" element={<TripList />} />

        <Route exact path='/login' element={<LoginRoute />}>
          <Route path="/login" element={<LoginForm />} />
        </Route>

        <Route path="/search/trip/:id" element={<TripDetail />} />
        <Route path="/register" element={<RegisterForm />} />

        <Route exact path='/cart' element={<PrivateRoute />}>
          <Route exact path='/cart' element={<Cart />} />
        </Route>

        <Route exact path='/:id/buy' element={<PrivateRoute />}>
          <Route exact path='/:id/buy' element={<Buy />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
