import { Query, Resolver } from "type-graphql";

@Resolver()
export class ExampleResolver {
  @Query(() => String)
  hello() {
    return "Hello, World!";
  }
}
