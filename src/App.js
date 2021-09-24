import { useState } from 'react';

import { GlobalProvider} from './context/UserContext';
import { BrowserRouter as Router, 
        Switch, 
        Route } from 'react-router-dom'

import FirstPage from "./pages/Template/FirstPage";
import AdminPanel from './pages/Template/AdminPanel';
import { ModalContext } from './context/ModalContext';

import './assets/css/normalize.css'
import './App.css';


function App() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <GlobalProvider >
      <ModalContext.Provider value={ {handleClose, handleShow, show} } >
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
      </ModalContext.Provider>
    </GlobalProvider>
  );
}

export default App;
