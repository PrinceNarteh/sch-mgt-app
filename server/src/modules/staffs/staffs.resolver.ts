import { ApolloError } from "apollo-server-express";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import bcrypt from "bcryptjs";

import { Staff } from "../../entities/Staff";
import { CreateStaffInputType, LoginStaffInputType } from "./staffInputType";
import { MyContext } from "../../utils/myContext";
import { getToken } from "../../libs/token";

@Resolver(Staff)
export class StaffResolver {
  @Query(() => [Staff])
  async staffs(): Promise<Staff[]> {
    return await Staff.find({});
  }

  @Mutation(() => Staff)
  async createStaff(@Arg("inputData") inputData: CreateStaffInputType) {
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

  @Mutation(() => Staff)
  async loginStaff(
    @Arg("inputData") inputData: LoginStaffInputType,
    @Ctx() ctx: MyContext
  ): Promise<Staff> {
    const { email, password } = inputData;

    // checking if staff is registered
    let staff = await Staff.findOne({ where: { email } });

    if (!staff || !(await bcrypt.compare(password, staff.password))) {
      throw new ApolloError("Invalid credentials");
    }

    const token = getToken(staff.id, staff.email);
    ctx.req.session.token = token;

    return staff;
  }
}
