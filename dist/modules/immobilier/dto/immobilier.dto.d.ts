export declare class ImmobilierDto {
    constructor(object: any);
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
    readonly description_offre: string;
    readonly options: string;
}
export default ImmobilierDto;
