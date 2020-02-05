import { Sequelize } from 'sequelize-typescript';

import { Manufacturer } from '../modules/manufacturer/manufacturer.entity';
import { Car } from '../modules/car/car.entity';
import { Owner } from '../modules/owner/owner.entity';
import constants from '../constants';

export const databaseProviders = [
  {
    provide: constants.SEQUELIZE,
    useFactory: async (): Promise<Sequelize> => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'db',
        port: 5432,
        username: 'admin',
        password: 'admin',
        database: 'ultra',
      });
      sequelize.addModels([Manufacturer, Car, Owner]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
