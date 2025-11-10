/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 30)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class UpdateUserDto {
  name: string;
  email: string;
}
