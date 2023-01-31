import './App.css';
import NaviBar from './components/Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Router>
        <NaviBar></NaviBar>
        <div className='Content'>
          <Sidebar></Sidebar>
          <Home></Home>
        </div>
      </Router>
    </div>
  );
}

export default App;
