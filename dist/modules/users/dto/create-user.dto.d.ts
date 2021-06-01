declare enum Role {
    ADMIN = "admin",
    CLIENT = "client",
    VENDEUR = "vendeur"
}
export declare class CreateUserDto {
    readonly nom: string;
    readonly prenom: string;
    readonly email: string;
    readonly telephone: string;
    readonly pays: string;
    readonly adresse: string;
    readonly password: string;
    readonly role: Role;
}
export default CreateUserDto;
