import axios from "axios";


class EmployeePayrollService{
    baseURL=`http://localhost:8080/employeedetails`;

    addEmployee = (data) => {
        return axios.post(this.baseURL + '/create',data);
    }

    delete = (data) => {
        //return axios.delete(this.baseURL + 'delete/',data)
        axios.delete(`${this.baseURL}/delete/${data}`);
    }

    getAllEmployee = () => {
        return axios.get(this.baseURL + "/get/");
    }
}

export default new EmployeePayrollService();