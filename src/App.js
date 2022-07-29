import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import SignIn from './pages/signinpage/signIn';
import SignUp from './pages/signinpage/SignUp';
import ViewRooms from './pages/viewRooms/viewRooms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ViewRooms" element={<ViewRooms />} />
        {/* <Route path="/room" element={<Apartment />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
