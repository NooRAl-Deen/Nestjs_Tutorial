import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StockEntity {

    @PrimaryGeneratedColumn()
    SN: number

    @Column()
    description: String

    @Column()
    price: Number

    @Column({ default: null })
    productionDate: Date

    @Column({ default: null })
    expirationDate: Date
}