import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';

import { Car } from '../car/car.entity';

@Table
export class Owner extends Model<Owner> {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Car)
  carId: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  purchaseDate: Date;
}
