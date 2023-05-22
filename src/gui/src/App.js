import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Cart from './Cart';
import Buy from './Buy';
import LoginRoute from './LoginRoute';
import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Search from './pages/Search';
import TripDetails from './pages/TripDetails';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/search" element={<Search />} />

        <Route exact path="/login" element={<LoginRoute />}>
          <Route path="/login" element={<LoginForm />} />
        </Route>

        <Route path="/search/trip/:id" element={<TripDetails />} />
        <Route path="/register" element={<RegisterForm />} />

        <Route exact path="/cart" element={<PrivateRoute />}>
          <Route exact path="/cart" element={<Cart />} />
        </Route>

        <Route exact path="/:id/buy" element={<PrivateRoute />}>
          <Route exact path="/:id/buy" element={<Buy />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
