
export class ImmobilierDto {
    constructor(object: any) {
      this.type = object.type;
      this.nombreDeChambre = object.nombreDeChambre;
      this.nombreDeSalon = object.nombreDeSalon;
      this.cuisine = object.cuisine;
      this.sanitaire = object.sanitaire;
      this.douche = object.douche;
      this.surface = object.surface;
      this.description = object.description;
      this.adresse = object.adresse;
      this.dateDeDisponibilite = object.dateDeDisponibilite;
      this.etatDuBien = object.etatDuBien;
      this.etage = object.etage;
      this.date_offre = object.date_offre;
      this.type_offre = object.type_offre;
      this.description_offre = object.description_offre;
      this.options = object.options;

    };
  
    readonly type: string;
    readonly nombreDeChambre: string;
    readonly nombreDeSalon: string;
    readonly cuisine: boolean;
    readonly sanitaire: boolean;
    readonly douche: boolean;
    readonly surface: number;
    readonly description: string;
    readonly adresse: string;
    readonly dateDeDisponibilite: string;
    readonly etatDuBien: string;
    readonly etage: number;
    readonly date_offre: string;
    readonly type_offre: string;
    readonly titre_offre: string;
    readonly  description_offre: string;
    readonly options: string;



  }
  
  export default ImmobilierDto;