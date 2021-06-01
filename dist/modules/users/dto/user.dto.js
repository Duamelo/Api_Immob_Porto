"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
class UserDto {
    constructor(object) {
        this.nom = object.nom;
        this.prenom = object.prenom;
        this.email = object.email;
        this.telephone = object.telephone;
        this.pays = object.pays;
        this.adresse = object.adresse;
        this.role = object.role;
    }
    ;
}
exports.UserDto = UserDto;
exports.default = UserDto;
//# sourceMappingURL=user.dto.js.map