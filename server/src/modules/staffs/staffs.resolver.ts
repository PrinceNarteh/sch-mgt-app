import { Query, Resolver } from "type-graphql";

import { Staff } from "../../entities/Staff";

@Resolver()
export class StaffResolver {
  @Query(() => String)
  async staffs() {
    return await Staff.find({});
  }
}
