import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateClientInput {
  @Field({ description: 'Example field (name)' })
  name: string;

  @Field({ description: 'Example field (email)' })
  email: string;

  @Field({ description: 'Example field (cellphone)' })
  cellphone: string;
}
