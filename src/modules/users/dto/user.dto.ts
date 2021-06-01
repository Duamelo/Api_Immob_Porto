

export class UserDto {
  constructor(object: any) {
    this.nom = object.nom;
    this.prenom = object.prenom;
    this.email = object.email;
    this.telephone = object.telephone;
    this.pays = object.pays;
    this.adresse = object.adresse;
    this.role = object.role;
  };

  readonly nom: string;
  readonly prenom: string;
  readonly email: string;
  readonly telephone: string;
  readonly pays: string;
  readonly adresse: string;
  readonly password: string;
  readonly role: string;
  
}

export default UserDto;