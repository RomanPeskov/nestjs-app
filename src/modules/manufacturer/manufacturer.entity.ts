import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Manufacturer extends Model<Manufacturer> {
  @Column({
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @Column
  phone: string;

  @Column
  siret: number;
}
