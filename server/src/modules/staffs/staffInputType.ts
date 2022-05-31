import { IsEmail, IsString, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class StaffInputType {
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
  @MinLength(6)
  @IsString()
  password: string;
}
