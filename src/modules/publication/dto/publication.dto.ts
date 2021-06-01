export class CreatePublicationDto{
    constructor(object: any)
    {

        this.titre = object.titre;
        this.description = object.description;
        this.date_pub = object.date_pub;
        this.type_pub= object.type_bup;
    }

    readonly titre : string;
    readonly description: string;
    readonly date_pub: string;
    readonly type_pub: string
}

export default CreatePublicationDto;