import { Injectable, Inject } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Op } from 'sequelize';
import { setMonth } from 'date-fns';

import constants from '../../constants';
import { Car } from './car.entity';
import { Manufacturer } from '../manufacturer/manufacturer.entity';
import { Owner } from '../owner/owner.entity';

@Injectable()
export class CarService {
  constructor(
    @Inject(constants.CAR_REPOSITORY)
    private readonly carsRepository: typeof Car,
  ) {}

  async getCars(): Promise<Car[]> {
    return this.carsRepository.findAll({
      include: [{ model: Manufacturer }, { model: Owner }],
    });
  }

  async createCar(car): Promise<Car> {
    return this.carsRepository.create(car);
  }

  async updateCar(id, car): Promise<Car> {
    const [_, [updatedCar]] = await this.carsRepository.update(car, { where: { id }, returning: true });
    return updatedCar;
  }

  async deleteCar(carId): Promise<number> {
    return this.carsRepository.destroy({
      where: {
        id: carId,
      },
    });
  }

  async getCar(carId): Promise<Car> {
    return this.carsRepository.findOne({
      where: {
        id: carId,
      },
      include: [{ model: Manufacturer }],
    });
  }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  provideDiscount(): void {
    const from = setMonth(new Date(), -17);
    const to = setMonth(new Date(), -11);
    this.carsRepository.update(
      { discount: 0.2 },
      {
        where: {
          discount: { [Op.eq]: 0 },
          firstRegistrationDate: { [Op.between]: [from, to] },
        },
      },
    );
  }
}
