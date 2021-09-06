import Navbar from "./components/Navbar";
import './assets/css/normalize.css'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from "./components/Sidebar";
import PageContent from "./components/PageContent";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <PageContent />
      </div>
    </Router>
  );
}

export default App;
