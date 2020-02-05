import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty()
  readonly manufacturerId: number;

  @ApiProperty()
  readonly price: number;

  @ApiProperty()
  readonly firstRegistrationDate: Date;

  @ApiProperty()
  readonly discount: number;
}
