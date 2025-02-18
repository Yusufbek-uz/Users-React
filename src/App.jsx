
import './App.css'
import {UserList} from "./assets/components/userComponent/UserList";
import users from "../public/data.js";

function App() {


  return (
    <div className='container'>
      <UserList odamlar={users}/>
    </div>
  )
}

export default App
