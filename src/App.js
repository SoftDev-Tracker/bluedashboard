import { useState } from 'react';
import './assets/css/normalize.css'
import './App.css';
import { GlobalProvider, UserContext } from './context/UserContext';
import { BrowserRouter as Router, 
        Switch, 
        Route } from 'react-router-dom'
import FirstPage from "./pages/Template/FirstPage";
import AdminPanel from './pages/Template/AdminPanel';
import { ModalContext } from './context/ModalContext';


function App() {
  /*
  const user = {
    username:'Carlos',
    token:123456
  } 

  const tasks = [
    {id:1, title:'New project 1', description:'This is a general description on the project. Here you can add whatever you want.'},
    {id:2, title:'Dashboard element', description:'This is a description on the project.'},
    {id:3, title:'Title 1 project', description:'This is a general description on the project. Here you can loot all.'},
    {id:4, title:'Side project LUL', description:'This is a general description on the project. Here you can add whatever you want.'},
    {id:5, title:'Title 5', description:'General description on the project. Here you can add whatever you want.'},
  ]; 
*/
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
