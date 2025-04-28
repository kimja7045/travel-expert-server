import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType({ description: 'user' })
export class User {
  @Field(() => ID)
  id: string;

  @Field({ description: '이름' })
  name: string;

  @Field({ description: '소셜 종류', nullable: true })
  social: string;
}
