import './assets/css/normalize.css'
import './App.css';
import { BrowserRouter as Router, 
        Switch, 
        Route } from 'react-router-dom'
import FirstPage from "./pages/Template/FirstPage";
import AdminPanel from './pages/Template/AdminPanel';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <FirstPage></FirstPage>
          </Route>  
          <Route path="/project">
            <AdminPanel></AdminPanel>
          </Route>
          <Route path="*">
            <FirstPage></FirstPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
