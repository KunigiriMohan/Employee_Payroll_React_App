import React, { useState } from "react";
import './Dashboard.css';
import mainImage from '../dashboard/assets/images/logo.png'
import {Link} from 'react-router-dom';
import profile1 from '../dashboard/assets/profile-images/Ellipse -1.png'
import delete1 from './assets/icons/delete-black-18dp.svg';
import edit from './assets/icons/create-black-18dp.svg'
import axios from "axios";
import Payrollform from "../payroll-form/Payroll-form";
//import {EmployeePayrollService} from 'E:/React/Employee_Payroll_React_App/src/service/employees';
import EmployeePayrollService from '../../service/employees';

class Dashboard extends React.Component{
    
    constructor(){
        super()
        this.state = {
            employees:[]
        }
    }

    stringifyDate = (date) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const newDate = !date ? "undefined" : new Date(Date.parse(date)).toLocaleDateString('en-GB', options);
        return newDate;
      }

    componentDidMount=()=>{
        //const employeeService = new EmployeePayrollService();
        EmployeePayrollService.getAllEmployee().then(response =>{
            const employee = response.data;
            this.setState({employees :employee });
            console.log(this.state.employees);
        })
    }

    deleteEmployee=(id)=> {
        const value = parseInt(id);
        console.log(value);
        //const employeeService = new EmployeePayrollService();
        EmployeePayrollService.delete(value);
    }

    render(){
        return(
            <>
                <header className="header-content-header">
                <div className="logo-content">
                <Link  to='/form'><img  className='image' src={mainImage}/></Link>
                <div>
                    <span className="emp-text">EMPLOYEE</span><br></br>
                    <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
                </header>
                <div className='main-content'>
                    <div className="header-content">
                        <div className="emp-detail-text">Employee Details <div className="emp-count">{this.state.employees.length}</div>
                    </div>
                    <Link  to='/form'><button className="add-button"><img src="../assets/icons/add-24px.svg"alt=""/>Add User</button></Link>
                </div>
                    <div className="table-main">
                        <table id="table-display" className="table">
                            <thead>
                            <tr>
                                <th>Profile image</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Department</th>
                                <th>Salary</th>
                                <th>Start Date</th>
                                <th>Actions</th>
                            </tr>
                                {
                                    this.state.employees.map(
                                        employee =>
                                        <tr key={employee.empId}>
                                            <td><img className="profile" src={employee.profile}/></td>
                                            <td>{employee.username}</td>
                                            <td>{employee.gender}</td>
                                            <td><div className="dept-label">{employee.department}</div></td>
                                            <td>{employee.salary}LPA</td>
                                            <td>{this.stringifyDate(employee.day-employee.month-employee.year)}</td>
                                            <td>
                                                <img name={employee.emp_id} src={delete1} alt="delete" onClick={this.deleteEmployee(employee.empId)}/>
                                                <img name={employee.emp_id} src={edit} alt="edit"/>
                                            </td>
                                        </tr>
                                    )
                                }
                            </thead>
                        </table>
                    </div>
                </div>
            </>
    );
    }
        
}
export default Dashboard
