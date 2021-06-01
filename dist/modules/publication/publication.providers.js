"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicationProviders = void 0;
const constants_1 = require("../../core/constants");
const publication_entity_1 = require("./publication.entity");
exports.publicationProviders = [{
        provide: constants_1.PUBLICATION_REPOSITORY,
        useValue: publication_entity_1.Publication
    }];
//# sourceMappingURL=publication.providers.js.map