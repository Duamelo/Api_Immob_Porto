"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.immobilierProviders = void 0;
const constants_1 = require("../../core/constants");
const immobilier_entity_1 = require("./immobilier.entity");
exports.immobilierProviders = [{
        provide: constants_1.IMMOBILIER_REPOSITORY,
        useValue: immobilier_entity_1.Immobilier,
    }];
//# sourceMappingURL=immobilier.providers.js.map