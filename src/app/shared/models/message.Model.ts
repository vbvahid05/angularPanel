export class MessageModel {
    id: number;
    result: string ;
    exception: any;
    status: number;
    isCanceled: boolean;
    isCompleted: boolean;
    isCompletedSuccessfully: boolean;
    isFaulted: boolean;
    asyncState: any ;
    creationOptions: number;

    constructor(
    id: number,
    result: string ,
    exception: any,
    status: number,
    isCanceled: boolean,
    isCompleted: boolean,
    isCompletedSuccessfully: boolean,
    isFaulted: boolean,
    asyncState: any ,
    creationOptions: number
    ) {
        this.id = id;
        this.result = result;
        this.exception = exception ;
        this.status = status ;
        this.isCanceled = isCanceled;
        this.isCompleted = isCompleted ;
        this.isCompletedSuccessfully = isCompletedSuccessfully;
        this.isFaulted = isFaulted ;
        this.asyncState = asyncState ;
        this.creationOptions = creationOptions ;
    }
}

