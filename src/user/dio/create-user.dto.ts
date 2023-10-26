import { IsString, IsNotEmpty, Min, MinLength, MaxLength, IsEnum } from 'class-validator'
import { UserStatus } from 'src/auth/user-status.enum'
export class CreateUserDto {

  @IsNotEmpty()
  @IsString()
  username: string

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(30)
  password: string

  @IsEnum(UserStatus)
  status: UserStatus
}