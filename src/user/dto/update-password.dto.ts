import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @IsString({ message: 'Senha precisa ser uma sring' })
  @IsNotEmpty({ message: 'Senha não pode estar vazia' })
  currentPassword: string;

  @IsString({ message: 'A nova enha precisa ser uma sring' })
  @IsNotEmpty({ message: 'A nova senha não pode estar vazia' })
  @MinLength(6, { message: 'A nova senha deve conter mais de 6 caracteres' })
  newPassword: string;
}
