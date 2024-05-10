import { IsEmail, IsNotEmpty, MaxLength, MinLength, minLength } from "class-validator";

export class CreateUserDto{
    @IsEmail ({},{
        message:'Formato de email invalido'
    } )

  email: string;
@MinLength(4,{
    message:'Minimo 4 caracteres'
})
@MaxLength(10,{
    message:'Maximo 10 caracteres'
})
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;

}
