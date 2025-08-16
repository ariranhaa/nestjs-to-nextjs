import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Nome precisa ser uma sring' })
  @IsNotEmpty({ message: 'Nome não pode estar vazio' })
  name: string;

  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @IsString({ message: 'Senha precisa ser uma sring' })
  @IsNotEmpty({ message: 'Senha não pode estar vazia' })
  @MinLength(6, { message: 'A senha deve conter mais de 6 caracteres' })
  password: string;
}
