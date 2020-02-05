import { Injectable, Inject } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { setMonth } from 'date-fns';
import { Op } from 'sequelize';

import { Owner } from './owner.entity';
import constants from '../../constants';

@Injectable()
export class OwnerService {
  constructor(
    @Inject(constants.OWNER_REPOSITORY)
    private readonly ownersRepository: typeof Owner,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  removeOldOwners(): void {
    const result = setMonth(new Date(), -17);
    this.ownersRepository.destroy({
      where: {
        purchaseDate: { [Op.lte]: result },
      },
    });
  }
}
