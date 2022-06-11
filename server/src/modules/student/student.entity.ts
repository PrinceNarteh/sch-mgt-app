import { Gender } from "../../constants/enums";
import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

registerEnumType(Gender, { name: "Gender" });

@Entity({ name: "students" })
@ObjectType()
export class Student extends BaseEntity {
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

  @Column({ type: "date" })
  @Field()
  dateOfBirth: Date;

  @Field()
  @Column()
  profilePic: string;

  @CreateDateColumn({
    type: "timestamptz",
    name: "created_at",
  })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", name: "updated_at" })
  updatedAt: Date;
}
