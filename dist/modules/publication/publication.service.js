"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const user_entity_1 = require("../users/user.entity");
let PublicationService = class PublicationService {
    constructor(publicationRepository) {
        this.publicationRepository = publicationRepository;
    }
    async create(publication, clientId) {
        console.log("rentre dans la fonction create de publicationService");
        return await this.publicationRepository.create(Object.assign(Object.assign({}, publication), { clientId }));
    }
    async findAll() {
        return await this.publicationRepository.findAll({
            include: [{ model: user_entity_1.User, attributes: { exclude: ['password'] } }],
        });
    }
    async findOne(id) {
        return await this.publicationRepository.findOne({
            where: { id },
            include: [{ model: user_entity_1.User, attributes: { exclude: ['password'] } }],
        });
    }
    async delete(id, clientId) {
        return await this.publicationRepository.destroy({ where: { id, clientId } });
    }
    async update(id, data, clientId) {
        const [numberOfAffectedRows, [updatedPublication]] = await this.publicationRepository.update(Object.assign({}, data), { where: { id, clientId }, returning: true });
        return { numberOfAffectedRows, updatedPublication };
    }
};
PublicationService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.PUBLICATION_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], PublicationService);
exports.PublicationService = PublicationService;
//# sourceMappingURL=publication.service.js.map