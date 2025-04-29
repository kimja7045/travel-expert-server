import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Place {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  image: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  type: PlaceType;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => Number, { nullable: true })
  rating?: number;

  @Field(() => String, { nullable: true })
  phone?: string;
}

export type PlaceType = 'hotel' | 'restaurant' | 'cafe' | 'bar' | 'shop';
