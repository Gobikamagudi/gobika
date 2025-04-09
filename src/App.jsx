import {useState, usestate} from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GridView from './GridView'
 import Sample from './Sample'
import Profilecard from './Profilecard'
import Home from "./Home";
import NavBar from './NavBar'
import Todo from './Todo'
import storeredux from './storeredux'
import { Provider } from 'react-redux';
const profileList = {
  name: "Gobika",
  Department: "AIDS",
  year: 2,
  mobile: 9834562748,
  address: "D.No: 23/234,Saraswathi Nagar,Coimbatore",
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/Todo" element={<Todo />} /> */}
        <Route path="/Profilecard" element={<Profilecard profile={profileList} />} />
        <Route path="/GridView" element={<GridView />} />
        <Route path="/reduxcounter" element={<Provider store={storeredux}>
      <Todo/>
    </Provider>}/>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App; 