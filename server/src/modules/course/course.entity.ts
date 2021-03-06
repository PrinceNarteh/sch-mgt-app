import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Subject } from "../subject/subject.entity";

@Entity()
@ObjectType()
export class Course {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  name: string;

  @ManyToMany(() => Subject)
  @JoinTable({
    name: "course_subject",
    joinColumn: {
      name: "course",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "subject",
      referencedColumnName: "id",
    },
  })
  @Field()
  subjects: Subject[];

  @Column({
    type: "timestamptz",
    name: "created_at",
  })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz", name: "updated_at" })
  updatedAt: Date;
}
