import React, { useEffect, useState } from 'react';
import EmployeePayroll from './EmployeePayroll';
import { Link } from 'react-router-dom';
import './Table.css'
import img1 from "../Assest/img1.png"
import delete1 from "../Assest/delete1.svg"
import edit from "../Assest/edit.svg"
import axios from 'axios';


/*import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import EmployeePayroll from './EmployeePayroll';
import './Table.css'


class EmployeeContainer extends Component {

   
    
    render() {
        return (
        <div>
            <div className="main-containt">
            <EmployeePayroll/>
            <h2 className="h2">Employee Details</h2>
                <div className="searchbox">
                <input type="text" id="myInput" placeholder="search For Names"></input>
                <Link to="/Registration" className="button">+ Add User</Link>
                </div>
                <div className="table">
                <table className="table1" id="tableid">
                    <thead>
                        <tr>
                            <th className="th1">NAME</th>
                            <th className="th2">GENDER</th>
                            <th className="th3">DEPARTMENT</th>
                            <th className="th4">SALARAY</th>
                            <th className="th5">START DATE</th>
                            <th className="th6">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        <tr>
                            <td className="td1"></td>
                            <td className="td2"></td>
                            <td className="td3"></td>
                            <td className="td4"></td>
                            <td className="td5"></td>
                            <td className="td6"></td>
                        </tr>
    
                    </tbody>
                </table>
                
                </div>
                </div>
                </div>
                
           
        );
    }
}

export default EmployeeContainer;
*/


function Table() {
    const [emp,setemp]=useState([]);
    useEffect(() => {
        const getemp = async () => {
          const reqData = await fetch("http://localhost:8082/Payroll/fetchEmployee");
          const resData = await reqData.json();
          setemp(resData);
          console.log(resData);
        };
        getemp();
      }, []);

      function deleteEmployees(id) {
        console.log(id);
        axios.delete('http://localhost:8082/Payroll/Delete_Emp_Data?id='+id)
        .then(responce => alert(responce.data.message))
        .catch(error => console.log(error))
        window.location.reload();
    }
    function updateEmployees(id) {
        axios.put(`http://localhost:8082/Payroll/Update_Emp_Data?id=${id}`)
        .then(responce => alert(responce.data.message))
        .catch(error => console.log(error))
    }
    function searchEmployee(){
        var input, filter, found, table, tr, td, i, j;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("tableid");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
                if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                }
            }
            if (found) {
                tr[i].style.display = "";
                found = false;
            } else {
                tr[i].style.display = "none";
            }
        }
    }
    function callBackendApi(value){
        console.log(value);
        axios.get('http://localhost:8082/Payroll/Search_Employee_Data?id=${value}')
    }
    return (
        <div>
            <div className="header-content">
            <EmployeePayroll/></div>
            <div className="main-containt">
             <div className="emp-detail-text">Employee Details</div>
                <div className="searchbox">

                <input type="text" id="myInput" placeholder="search For Names" onKeyUp={searchEmployee}></input>
                <input type="text" onChange={(event)=>callBackendApi(event.target.value)}></input>
                <Link to="/Registration" className="button">+ Add User</Link>
                </div>
                <div className="table-wrapper">
                <table className="table1" id="tableid">
                    <thead>
                        <tr>
                            <th className="th1"> </th>
                            <th className="th2">NAME</th>
                            <th className="th3">GENDER</th>
                            <th className="th4">DEPARTMENT</th>
                            <th className="th5">SALARAY</th>
                            <th className="th6">START DATE</th>
                            <th className="th7">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                    {emp.map((emp) => (
                  <tr key={emp.id}>
                    <td><img src={img1} alt=""></img></td>
                    <td>{emp.name}</td>
                    <td>{emp.gender}</td>
                    <td>{emp.department}</td>
                    <td>{emp.salary}</td>
                    <td>{emp.startDate}</td>
                    <td>{emp.action}
        
                    <img src={delete1} className= "delete-button" alt="delete" onClick={() => deleteEmployees(emp.id)}/>
                    <Link to="/Registration" >
                    <img src={edit} className= "update-button" alt="update" onClick={() => updateEmployees(emp.id)}/>
                    </Link>
                    </td>
                  </tr>
                    ))
}
    
                    </tbody>
                </table>
                
                </div>
             </div>
             </div>
          
  
    );
}

export default Table;