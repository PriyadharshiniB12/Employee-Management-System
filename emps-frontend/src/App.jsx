import './App.css'
import HeaderComponent from './Component/HeaderComponent';
import ListEmployeeComponent from './Component/ListEmployeeComponent';
import FooterComponent from './Component/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeComponent from './Component/EmployeeComponent';



function App() {

  return (
    <div className="app-container">

    <BrowserRouter>
    
    <HeaderComponent/>

    <div className="content" style={{ flex: 1 }}>
    <Routes>
      {/* //http://localhost:300 */}
      <Route path='/' element={<ListEmployeeComponent />}/>

      {/* //http://localhost:3000/employees */}
      <Route path='/employees' element= {<ListEmployeeComponent />}/>

      {/* //http://localhost:3000/add-employee */}
      <Route path='/add-employee' element={<EmployeeComponent />}/>

       {/* //http://localhost:3000/update-employee/2 */}
      <Route path='/update-employee/:id' element={<EmployeeComponent />}/>


      </Routes>
      </div>

    <FooterComponent />
    </BrowserRouter>
    </div>
  );
}

export default App;
