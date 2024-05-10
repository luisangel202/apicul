import { IsEmail, IsNotEmpty, MaxLength, MinLength, minLength } from "class-validator";

export class CreateUserDto{
    @IsEmail ({},{
        message:'Formato de email invalido'
    } )

  email: string;
@MinLength(3,{
    message:'Minimo 10 caracteres'
})
@MaxLength(20,{
    message:'Maximo 15 caracteres'
})
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;

}
