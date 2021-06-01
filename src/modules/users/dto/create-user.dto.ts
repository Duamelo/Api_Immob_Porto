//import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

enum Role {
    ADMIN = 'admin',
    CLIENT  = 'client',
    VENDEUR = 'vendeur'

}


export class CreateUserDto {
  //  @IsNotEmpty()
    readonly nom: string;


    //@IsNotEmpty()
    readonly prenom: string;
    
    
    //@IsNotEmpty()
    //@IsEmail()
    readonly email: string;
    
    //@IsNotEmpty()
    readonly telephone: string;
    
    //@IsNotEmpty()
    readonly pays: string;
    
    //@IsNotEmpty()
    readonly adresse: string;
    

    //@IsNotEmpty()
    //@MinLength(6)
    readonly password: string;

       
    //@IsNotEmpty()
    //@IsEnum(Role, {
      //  message: 'role must be either admin, client or vendor',
    //})
    readonly role: Role;
}

export default CreateUserDto;