import { Gender, Position } from "../../constants/enums";
import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { IsEmailAlreadyExist } from "./isEmailAlreadyExist";

registerEnumType(Gender, { name: "Gender" });
registerEnumType(Position, { name: "Position" });

@Entity({ name: "staffs" })
@Unique(["email"])
@ObjectType()
export class Staff extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Field()
  @Column({ name: "first_name" })
  firstName: string;

  @Field()
  @Column({ name: "last_name" })
  lastName: string;

  @Field({ nullable: true })
  @Column("text", { name: "middle_name", nullable: true })
  middleName?: string;

  @Field((type) => Gender)
  @Column({
    type: "enum",
    enum: Gender,
  })
  gender: Gender;

  @Field()
  @Column()
  @IsEmailAlreadyExist({ message: "Email already in use." })
  email: string;

  @Column()
  password: string;

  @Field((type) => Position)
  @Column({
    type: "enum",
    enum: Position,
  })
  position: Position;

  @Column({
    type: "timestamptz",
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", name: "updated_at" })
  updatedAt: Date;
}
