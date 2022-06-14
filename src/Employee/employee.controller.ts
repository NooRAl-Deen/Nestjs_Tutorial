import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { EmployeeEntity } from "./employee.entity";
import { EmployeeService } from "./employee.service";

@Controller('api/employees')
export class EmployeeController {
    constructor(private _employeeService: EmployeeService) {}

    // Add Employee
    @Post()
    addEmployee(@Body() employee : EmployeeEntity) {
        return this._employeeService.addEmployee(employee);
    }

    // Get All Employees
    @Get()
    getAllEmployees() {
        return this._employeeService.getAllEmployees();
    }

    // Get Specific Employee 
    @Get(':id')
    getEmployee(@Param('id') id: number) {
        return this._employeeService.getEmployee(id);
    }

    // Update Employee Information
    @Put(':id')
    updateEmployeeInfo(@Param('id') id: number, @Body() employee: EmployeeEntity) {
        return this._employeeService.updateEmployeeInfo(id, employee);
    }

    // Delete Employee
    @Delete(':id')
    deleteEmployee(@Param('id') id: number) {
        return this._employeeService.deleteEmployee(id);
    }
}