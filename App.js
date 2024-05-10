import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Home } from "./pages/Home";
import {Navbar} from './pages/Navbar'
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import {EmployeeList} from "./pages/EmployeeList";
import  { CreateEmployee } from "./pages/CreateEmployee";
import { EditEmployee } from "./pages/editEmployee";



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>

        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/EmployeeList" element={<EmployeeList />} />
          <Route path="/createEmployee" element={< CreateEmployee/>} />

          <Route path="/EditEmployee" element={< EditEmployee/>} />



        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App;