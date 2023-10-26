import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Koszyk from './Components/Koszyk';

function App() {
  return (
    <div className="App">
   <Router>

      <Routes>
        
        <Route exact path="/" element={<Homepage />} />

        <Route path="/koszyk" element={<Koszyk />} />



      </Routes>
    </Router>
    </div>
  );
}

export default App;
