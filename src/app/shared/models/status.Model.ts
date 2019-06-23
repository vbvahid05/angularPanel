export class StatusModel {
    status: boolean;
    statusCode: any ;
    message: any;
    constructor(
           status: boolean,
            statusCode: any ,
            message: any
    ) {
        this.status = status ;
        this.statusCode = statusCode ;
        this.message = message;
    }
}

