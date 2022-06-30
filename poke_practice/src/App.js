import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/layout/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
