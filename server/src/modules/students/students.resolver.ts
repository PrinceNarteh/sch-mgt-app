import { Student } from "../../entities/Student";
import { Query, Resolver } from "type-graphql";

@Resolver(Student)
export class StudentResolver {
  @Query(() => [Student])
  async students() {
    return await Student.find();
  }
}
