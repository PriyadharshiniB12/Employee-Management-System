import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


const ListEmployeeComponent = () => {

    const [employees, setEmployees]= useState([]);

    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState('');

    const navigator = useNavigate();

    useEffect(()=>{
        getAllEmployees();
    },
    []
)

function getAllEmployees(){
    setLoading(true);
    listEmployees().then((response)=> {
        setEmployees(response.data);
    }).catch(error => {
        console.error(error);
    }).finally(() => {
        setLoading(false);
    });
}

function addNewEmployee(){
    navigator('/add-employee')
}

function updateEmployee(id){
    navigator(`/update-employee/${id}`)
}

function removeEmployee(id){
    console.log(id);
    deleteEmployee(id).then((response) => {
        getAllEmployees();
    }).catch(error =>{
        console.error(error);
    })
}

function exportToExcel() {
    const worksheet = XLSX.utils.json_to_sheet(employees);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");

    const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array"
    });

    const now = new Date();
    const dateTimeString = now.toISOString().replace(/T/, '_').replace(/:/g, '-').split('.')[0];

    const fileName = `employees_${dateTimeString}.xlsx`;
    const data = new Blob([excelBuffer], { type: "application/octet-stream" });

    saveAs(data, fileName);
}




const filteredEmployees = employees.filter((employee) =>
    employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className='container mt-4'>
    <div className='row justify-content-center'>  
    <div className='col-md-10'>
    <h2 className='text-center mb-4'>List of Employees</h2>
    {/* <button className='btn btn-primary mb-3' onClick={addNewEmployee}>Add Employee</button> */}

    <div className='d-flex justify-content-between mb-3'>
  <button className='btn btn-primary' onClick={addNewEmployee}>Add Employee</button>
  <button className='btn btn-success' onClick={exportToExcel}>Export to Excel</button>
</div>

    {loading ? (
          <div className="text-center mt-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
    <div className="table-responsive">

<input
  type="text"
  placeholder="Search by First Name or Email"
  className="form-control mb-3"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

    <table className='table table-striped table-bordered table-hover'>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Action</th>

            </tr>
        </thead>

        <tbody>
            {
                filteredEmployees.map(employee =>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>

                            <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                
                                style={{ marginLeft: '10px'}}
                                >Delete</button>
                        </td>
                    </tr>
                )
            }
        </tbody>
    </table>
    </div>
        )}
    </div>
    </div>
    </div>

  );
}

export default ListEmployeeComponent;