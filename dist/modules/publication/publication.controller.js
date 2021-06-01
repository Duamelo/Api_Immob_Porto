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
exports.PublicationController = void 0;
const common_1 = require("@nestjs/common");
const publication_service_1 = require("./publication.service");
const jwt_auth_guard_1 = require("../auth/jwt.auth.guard");
const create_publication_dto_1 = require("./dto/create-publication.dto");
let PublicationController = class PublicationController {
    constructor(publicationService) {
        this.publicationService = publicationService;
    }
    async findAll() {
        return await this.publicationService.findAll();
    }
    async findOne(id) {
        const pub = await this.publicationService.findOne(id);
        if (!pub) {
            throw new common_1.NotFoundException('This publication doesn\'t exist');
        }
        return pub;
    }
    async create(pub, req) {
        console.log("rentre dans la fonction create");
        try {
            return await this.publicationService.create(pub, req.user.id);
        }
        catch (err) {
            console.log(err, req);
        }
    }
    async update(id, pub, req) {
        const { numberOfAffectedRows, updatedPublication } = await this.publicationService.update(id, pub, req.user.id);
        if (numberOfAffectedRows === 0) {
            throw new common_1.NotFoundException('This Publication doesn\'t exist');
        }
        return updatedPublication;
    }
    async remove(id, req) {
        const deleted = await this.publicationService.delete(id, req.user.id);
        if (deleted === 0) {
            throw new common_1.NotFoundException('This Publication doesn\'t exist');
        }
        return 'Successfully deleted';
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PublicationController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PublicationController.prototype, "findOne", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.default),
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_publication_dto_1.default, Object]),
    __metadata("design:returntype", Promise)
], PublicationController.prototype, "create", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.default),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()), __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_publication_dto_1.default, Object]),
    __metadata("design:returntype", Promise)
], PublicationController.prototype, "update", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.default),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PublicationController.prototype, "remove", null);
PublicationController = __decorate([
    common_1.Controller('publication'),
    __metadata("design:paramtypes", [publication_service_1.PublicationService])
], PublicationController);
exports.PublicationController = PublicationController;
//# sourceMappingURL=publication.controller.js.map