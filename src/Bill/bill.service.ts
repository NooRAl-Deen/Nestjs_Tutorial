import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BillEntity } from "./bill.entity";

@Injectable()
export class BillService {
    constructor(@InjectRepository(BillEntity) private _billRepo: Repository<BillEntity>) {}

    async addBill(bill: BillEntity) {
        let createdBill = await this._billRepo.create(bill);
        await this._billRepo.save(createdBill);
        return createdBill;
    }

    async getAllBills() {
        return await this._billRepo.find({ loadRelationIds: true });
    }

    async getBill(id: number) {
        return await this._billRepo.findOne({where: {id: id}, loadRelationIds: true});
    }

    async updateBill(id: number, bill: BillEntity ) {
        return await this._billRepo.update(id, bill);
    }

    async deleteBill(id: number) {
        return await this._billRepo.delete(id);
    }
}