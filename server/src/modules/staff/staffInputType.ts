import { IsEmail, IsEnum, IsString, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { Gender, Position } from "../../constants/enums";

@InputType()
export class CreateStaffInputType {
  @Field()
  @MinLength(2)
  @IsString()
  firstName: string;

  @Field()
  @MinLength(2)
  @IsString()
  lastName: string;

  @Field({ nullable: true })
  @MinLength(2)
  @IsString()
  middleName?: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsEnum(Gender)
  gender: Gender;

  @Field()
  @IsEnum(Position)
  position: Position;

  @Field()
  @MinLength(6)
  @IsString()
  password: string;
}

@InputType()
export class LoginStaffInputType {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(6)
  @IsString()
  password: string;
}
