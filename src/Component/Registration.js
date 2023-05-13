import axios from 'axios';
import React, { Component } from 'react';
import EmployeePayroll from './EmployeePayroll';
import './Register.css'
import img1 from "../Assest/img1.png"
import img2 from "../Assest/img2.png"
import img3 from "../Assest/img3.png"
import img4 from "../Assest/img4.png"


class Registration extends Component {
    constructor(){
        super()
        this.state={
       
        name:" ",
        gender:" ",
        salary:"" ,
        department:" ",
        action:" ",
        notes:" ",
        image:" ",
        day:"",
        month:" ",
        year:" "
       }

    }
     
    handlefirstName=(event)=>{
        this.setState({name:event.target.value})
        console.log(event.target.value)
        console.log(this.state.name)
    }
    handleGender=(event)=>{
        this.setState({gender:event.target.value})
        console.log(event.target.value)
        console.log(this.state.gender)
    }
    handlesalary=(event)=>{
        this.setState({salary:event.target.value})
        console.log(event.target.value)
        console.log(this.state.salary)
    }
    handledepartment=(event)=>{
        this.setState({department:event.target.value})
        console.log(event.target.value)
        console.log(this.state.department)
    }
    
    handleimage=(event)=>{
        this.setState({image:event.target.value})
        console.log(event.target.value)
        console.log(this.state.image)
    }
    handlestartday=(event)=>{
        this.setState({startday:event.target.value})
        console.log(event.target.value)
        console.log(this.state.startday)

    }
    handlestartdate=(event)=>{
        this.setState({startdate:event.target.value})
        console.log(event.target.value)
        console.log(this.state.startdate)
    }
    handlestartyear=(event)=>{
        this.setState({startyear:event.target.value})
        console.log(event.target.value)
        console.log(this.state.startyear)
    }
    handlesubmit=(event)=>{
        event.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:8082/Payroll/Register_employee",this.state)
        .then(Response=>console.log(Response))
        .catch(Error=>console.log(Error))
    }
    
    handleReset=(event)=>{
       event.preventDefault()
    }
    
    render() {
        return(
            
        <div>

        <div className="header">
        <EmployeePayroll/></div>
        <div className="Registerstyle">
        <form className="form" >
        <div id="mainContainer"></div>
        <div id="employeeContainer"></div>
         <h2>Employee Payroll Form </h2><br></br>
         Name
        <input className="row-content" type="text" id="fname" name="fname" pattern='^[A-Z]{1}[a-zA-Z]{1,}$' required="true"  onChange={this.handlefirstName}></input>
        <br></br>
        
        profile image
        <input className="profile-image" type="radio" id="" name="profile"  onChange={this.handleimage} ></input>
        <img src={img1} className="img1" alt=""></img>
        <input className="profile-image" type="radio" id=" " name=" profile" onChange={this.handleimage}></input>
        <img src={img3} className="img3" alt=""></img>
        <input className="profile-image" type="radio" id="" name="profile "  onChange={this.handleimage}></input>
        <img src={img2} className="img2" alt=""></img>
        <input  className="profile-image" type="radio" id="" name=" profile" onChange={this.handleimage}></input>
        <img src={img4} className="img4" alt=""></img>
        <br></br><br></br>
        
        Gender                        
        <input className="radiobutton" type="radio" name="gender" id=" male" value="male"   onChange={this.handleGender}></input>Male &nbsp;
        <input  className="radiobutton.f" type="radio" name="gender" id="Female" value="female"  onChange={this.handleGender}></input>Female
        <br></br><br></br>

        <div className="department">
        Department &nbsp;
      <input  type="checkbox" name="dept" value="HR" onChange={this.handledepartment}></input>HR &nbsp;
      <input  type="checkbox" name="dept" value="Sales" onChange={this.handledepartment}></input>Sales &nbsp;
      <input  type="checkbox" name="dept" value="Finance" onChange={this.handledepartment}></input>Finance &nbsp;
      <input  type="checkbox" name="dept" value="Engineer" onChange={this.handledepartment}></input>Engineer
      <input  type="checkbox" name="dept" value="others" onChange={this.handledepartment}></input>Others 
      <br></br><br></br>
      </div>
                   
      Salary
        <select className="salary" onChange={this.handlesalary}>
            <option >Select Salary</option>
            <option >50000</option>
            <option >75000</option>
            </select>
            <br></br>
                            
             Start Date &nbsp; &nbsp;
                <select className="start-date" type="day" id="day" name="day" onChange={this.handlestartday}>
                                <option >Day</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                                
                            <select className="start-date" id="month" name="month" onChange={this.handlestartdate}>
                                        <option>Month</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                </select>
                                    <select className="start-date" id="year" name="year" onChange={this.handlestartyear}>
                                        <option>Year</option>
                                        <option value="2022">2023</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                    </select>
                                    <br></br>
                                    Note &nbsp;&nbsp; &nbsp;&nbsp;
                                  <input className="note" type="note" ></input> <br></br> 
                                <input className="Cancel" type="Cancel" name="Cancel" value=" Cancel"></input>
                                <input className="submit" type="Submit" name="Submit" value="Submit" onClick={this.handlesubmit}></input>
                                <input className="Reset" type="Reset" name="Reset"></input>
                               </form>
                               </div>
                           </div>
                           
                           
                            )
                        }
    }                     
                     


export default Registration;



