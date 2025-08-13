import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Nome precisa ser uma sring' })
  @IsNotEmpty({ message: 'Nome não pode estar vazio' })
  name: string;

  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @IsString({ message: 'Senha precisa ser uma sring' })
  @IsNotEmpty({ message: 'Senha não pode estar vazia' })
  password: string;
}
