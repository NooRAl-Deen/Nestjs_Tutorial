import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StockEntity } from './stock.entity';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(StockEntity) private _stockRepo: Repository<StockEntity>,
  ) {}

  // Add new stock
  async addStock(stock: StockEntity) {
    let createdEntity = this._stockRepo.create(stock);
    await this._stockRepo.save(createdEntity);
    return createdEntity;
  }

  // Delete stock
  async deleteStock(id: number) {
    return await this._stockRepo.delete(id);
  }

  // Get All Stocks
  async getAllStocks() {
    return await this._stockRepo.find();
  }

  // Get Specific Stock
  async getStock(id: number) {
    return await this._stockRepo.findOneBy({ SN: id });
  }

  // Update Stock
  async updateStock(id: number, stock: StockEntity) {
    let stk = await this._stockRepo.findOneBy({ SN: id });
    if (stk) {
      return await this._stockRepo.update({ SN: id }, stock);
    }
    return 'Stock Not Found';
  }
}
