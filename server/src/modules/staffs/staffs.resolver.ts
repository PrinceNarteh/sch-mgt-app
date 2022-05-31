import { ApolloError } from "apollo-server-express";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import bcrypt from "bcryptjs";

import { Staff } from "../../entities/Staff";
import { StaffInputType } from "./staffInputType";

@Resolver(Staff)
export class StaffResolver {
  @Query(() => [Staff])
  async staffs(): Promise<Staff[]> {
    return await Staff.find({});
  }

  @Mutation(() => Staff)
  async createStaff(@Arg("inputData") inputData: StaffInputType) {
    const { email, password } = inputData;

    let staff = await Staff.findOne({ where: { email } });

    if (staff) {
      throw new ApolloError("Email already in used.");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    staff = Staff.create({
      ...inputData,
      password: hashedPassword,
    });

    await staff.save();

    return staff;
  }
}
