import './assets/css/normalize.css'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import FirstPage from "./pages/Template/FirstPage";

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
