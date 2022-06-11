import { Student } from "./student.entity";
import { Query, Resolver } from "type-graphql";

@Resolver(Student)
export class StudentResolver {
  @Query(() => [Student])
  async students() {
    return await Student.find();
  }
}
