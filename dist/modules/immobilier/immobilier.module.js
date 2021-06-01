"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImmobilierModule = void 0;
const common_1 = require("@nestjs/common");
const immobilier_service_1 = require("./immobilier.service");
const immobilier_controller_1 = require("./immobilier.controller");
const immobilier_providers_1 = require("./immobilier.providers");
let ImmobilierModule = class ImmobilierModule {
};
ImmobilierModule = __decorate([
    common_1.Module({
        imports: [],
        providers: [immobilier_service_1.ImmobilierService, ...immobilier_providers_1.immobilierProviders],
        controllers: [immobilier_controller_1.ImmobilierController]
    })
], ImmobilierModule);
exports.ImmobilierModule = ImmobilierModule;
//# sourceMappingURL=immobilier.module.js.map