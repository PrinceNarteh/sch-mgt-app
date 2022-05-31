import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";

@Entity()
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

  @Field()
  @Column()
  email: string;

  @Column()
  password: string;

  @UpdateDateColumn({
    type: "timestamptz",
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", name: "updated_at" })
  updatedAt: Date;
}
