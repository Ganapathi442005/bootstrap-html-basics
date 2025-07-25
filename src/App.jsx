
import { Routes, Route, Link } from 'react-router-dom';
import DarkElegantNavbar from './navbar'; 
import Voting from './voter';
import Expense from './expense';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ textAlign: "center" }}>
            <h1>Welcome to the page</h1>
          </div>
        }
        />

      <Route
        path="/nav"
        element={
          <div style={{ textAlign: "center" }}>
            <h2>This is the /nav route</h2>
          </div>
        }
        />
       <Route path="/nav" element={<h1>Nav bat</h1>} />
      <Route path="/portfolio" element={<h1>This is the Port Folio</h1>} />
      <Route path="/vote" element={<Voting/>}/>
      <Route path="/expense" element={<Expense/>}/>
    </Routes>
  );
}

export default App;
