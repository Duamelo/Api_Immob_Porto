"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImmobilierDto = void 0;
class ImmobilierDto {
    constructor(object) {
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
    }
    ;
}
exports.ImmobilierDto = ImmobilierDto;
exports.default = ImmobilierDto;
//# sourceMappingURL=immobilier.dto.js.map