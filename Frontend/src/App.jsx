// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
// import Login from './Components/Login';
import Home from './pages/home';
// import Dashboard from './Components/Dashboard';
// import Profile from './Components/Profile';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes without Navbar */}
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/login" element={<Login />} /> */}

        {/* All other routes use Layout with Navbar */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} /> */}
          {/* Add more protected or general routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
