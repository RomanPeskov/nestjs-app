import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Manufacturer } from '../manufacturer/manufacturer.entity';
import { Owner } from '../owner/owner.entity';

@Table
export class Car extends Model<Car> {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @BelongsTo(() => Manufacturer, {
    onDelete: 'CASCADE',
  })
  manufacturer: Manufacturer;

  @ForeignKey(() => Manufacturer)
  @Column({
    allowNull: false,
  })
  manufacturerId: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0,
  })
  discount: number;

  @Column({ type: DataType.DATE, allowNull: false })
  firstRegistrationDate: Date;

  @HasMany(() => Owner, {
    onDelete: 'CASCADE',
  })
  owners: Owner[];
}
