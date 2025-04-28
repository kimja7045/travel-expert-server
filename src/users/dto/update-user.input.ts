import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { description: '이름', nullable: true })
  name: string;

  @Field(() => String, { description: '소셜 종류', nullable: true })
  social: string;
}
