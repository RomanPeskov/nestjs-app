import { Injectable, Inject, NotFoundException } from '@nestjs/common';
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
    const [carsUpdated, [updatedCar]] = await this.carsRepository.update(car, { where: { id }, returning: true });
    if (!carsUpdated) {
      throw new NotFoundException();
    }
    return updatedCar;
  }

  async deleteCar(carId): Promise<number> {
    const car = await this.findCar(carId);

    if (!car) {
      throw new NotFoundException();
    }

    const deleteCar = await this.carsRepository.destroy({
      where: {
        id: carId,
      },
    });

    return deleteCar;
  }

  async getCar(carId): Promise<Car> {
    const car = await this.findCar(carId);
    return car;
  }

  async findCar(carId): Promise<Car> {
    const car = await this.carsRepository.findOne({
      where: {
        id: carId,
      },
      include: [{ model: Manufacturer }],
    });

    if (!car) {
      throw new NotFoundException();
    }

    return car;
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
