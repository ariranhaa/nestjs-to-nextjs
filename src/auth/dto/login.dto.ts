import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @IsString({ message: 'Senha precisa ser uma sring' })
  @IsNotEmpty({ message: 'Senha não pode estar vazia' })
  password: string;

  @IsString()
  teste: string;
}
