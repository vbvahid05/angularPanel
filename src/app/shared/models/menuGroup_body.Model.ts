export  class MenuGroupBodyModel {
    menuGroupId: number ;
    parentMenuGroupId: number;
    statusCode: number;
    message: string;
    status: boolean;
    caption: string;
    name: string;
    imageUrl: string;
    isActive: boolean;
    sortOrder: number;

    constructor(
        menuGroupId: number ,
        parentMenuGroupId: number,
        statusCode: number,
        message: string,
        status: boolean,
        caption: string,
        name: string,
        imageUrl: string,
        isActive: boolean,
        sortOrder: number,
    ) {
        this.menuGroupId = menuGroupId;
        this.parentMenuGroupId = parentMenuGroupId;
        this.statusCode = statusCode;
        this.message = message;
        this.status = status;
        this.caption = caption;
        this.name = name;
        this.imageUrl = imageUrl;
        this.isActive = isActive;
        this.sortOrder = sortOrder;
    }


}
