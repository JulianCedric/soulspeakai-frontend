import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Dashboard />
      <Signup />
      <Login />
    </div>
  );
}

export default App;