import { PUBLICATION_REPOSITORY } from "src/core/constants";
import { Publication } from "./publication.entity";




export const publicationProviders = [{
    provide: PUBLICATION_REPOSITORY,
    useValue: Publication
}];

