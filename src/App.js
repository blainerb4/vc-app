//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import SideBar from './components/Sidebar';

function App() {
  return (
    <Router>
      <SideBar />
      <Navbar />
    </Router>
  );
}

export default App;
