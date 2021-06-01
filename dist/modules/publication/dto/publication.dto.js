"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePublicationDto = void 0;
class CreatePublicationDto {
    constructor(object) {
        this.titre = object.titre;
        this.description = object.description;
        this.date_pub = object.date_pub;
        this.type_pub = object.type_bup;
    }
}
exports.CreatePublicationDto = CreatePublicationDto;
exports.default = CreatePublicationDto;
//# sourceMappingURL=publication.dto.js.map