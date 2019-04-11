export class MenuGroup {
    menuGroupId: number;
    parentMenuGroupId: number ;
    name: string;
    caption: string;
    imageUrl: string;
    sortOrder: number;
    isActive: boolean;

    constructor(
                menuGroupId: number,
                parentMenuGroupId: number ,
                name: string,
                caption: string,
                imageUrl: string,
                sortOrder: number,
                isActive: boolean
                ) {
        this.menuGroupId = menuGroupId;
        this.parentMenuGroupId = parentMenuGroupId ;
        this.name = name;
        this.caption = caption;
        this.imageUrl = imageUrl;
        this.sortOrder = sortOrder;
        this.isActive = isActive;
    }
}

