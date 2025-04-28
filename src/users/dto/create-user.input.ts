import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: '아이디' })
  id: string;

  @Field(() => String, { description: '이름' })
  name: string;

  @Field(() => String, { description: '소셜 종류', nullable: true })
  social: string;
}
