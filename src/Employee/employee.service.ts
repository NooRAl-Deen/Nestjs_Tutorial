import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EmployeeEntity } from "./employee.entity";

@Injectable()
export class EmployeeService {
    constructor(@InjectRepository(EmployeeEntity) private _employeeRepo: Repository<EmployeeEntity>) {}

    async addEmployee(employee: EmployeeEntity) {
        let createdEmployee = await this._employeeRepo.create(employee);
        this._employeeRepo.save(createdEmployee);
        return createdEmployee;
    }

    async getAllEmployees() {
        return await this._employeeRepo.find();
    }

    async getEmployee(id: number) {
        return await this._employeeRepo.findOneBy({employeeId: id});
    }

    async updateEmployeeInfo(id: number, employee: EmployeeEntity) {
        let emp = await this._employeeRepo.findOneBy({employeeId: id});
        if(emp) {
            return await this._employeeRepo.update({employeeId: id}, employee);
        }
        return 'Employee Not Found.';
    }

    async deleteEmployee(id: number) {
        return await this._employeeRepo.delete({employeeId: id});
    }
}