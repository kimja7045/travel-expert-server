import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType({ description: 'user' })
export class User {
  @Field(() => ID)
  id: number;

  @Field(() => String, { description: 'name' })
  name: string;

  @Field(() => String, { description: '소셜 종류' })
  social: string;
}
