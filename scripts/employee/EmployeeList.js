import { useEmployee } from "./employeeDataProvider.js"
import Employee from "./Employee.js"



const contentTarget = document.querySelector(".employeeList")

const EmployeeList = () => {

    const employeeObjectsArray = useEmployee();

    for (const employeeObject of employeeObjectsArray) {
        contentTarget.innerHTML += Employee(employeeObject)
    }
}

export default EmployeeList