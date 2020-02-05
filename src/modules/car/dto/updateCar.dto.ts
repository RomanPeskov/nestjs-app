import { ApiProperty } from '@nestjs/swagger';

export class UpdateCarDto {
  @ApiProperty()
  readonly manufacturerId?: number;

  @ApiProperty()
  readonly price?: number;

  @ApiProperty()
  readonly firstRegistrationDate?: Date;

  @ApiProperty()
  readonly discount?: number;
}
