import './assets/css/normalize.css'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import FirstPage from "./pages/Template/FirstPage";
import AdminPanel from './pages/Template/AdminPanel';

function App() {
  return (
    <Router>
      <div className="App">
        <FirstPage></FirstPage>
      </div>
    </Router>
  );
}

export default App;
