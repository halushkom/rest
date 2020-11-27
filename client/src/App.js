import useRoutes  from './routes'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const routes = useRoutes()
  return (
      <BrowserRouter>
        <div>
          {routes}
        </div>
      </BrowserRouter>

  );
}

export default App;
