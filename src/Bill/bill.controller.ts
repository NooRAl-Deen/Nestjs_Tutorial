import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BillEntity } from "./bill.entity";
import { BillService } from "./bill.service";

@Controller('api/bills')
export class BillController {
    constructor(private billService: BillService) {}

    @Post()
    addBill(@Body() bill: BillEntity) {
        return this.billService.addBill(bill);
    }

    @Get()
    getAllBills() {
        return this.billService.getAllBills();
    }

    @Get(':id')
    getBill(@Param('id') id : number) {
        return this.billService.getBill(id);
    }

    @Put(':id')
    updateBill(@Param('id') id: number, @Body() bill: BillEntity) {
        return this.billService.updateBill(id, bill);
    }

    @Delete(':id')
    deleteBill(@Param('id') id: number) {
        return this.billService.deleteBill(id);
    }
}