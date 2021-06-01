declare enum Type_Immob {
    STUDIO = "studio",
    CHAMBRE = "chambre",
    MAISON = "maison"
}
export declare class CreateImmobilierDto {
    readonly type: Type_Immob;
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
}
export default CreateImmobilierDto;
