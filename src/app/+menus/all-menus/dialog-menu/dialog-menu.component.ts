import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-dialog-menu',
  templateUrl: './dialog-menu.component.html',
  styleUrls: ['./dialog-menu.component.css']
})
export class DialogMenuComponent implements OnInit {
    message = '';
    cancelButtonText = 'Cancel';
    constructor(@Inject(MAT_DIALOG_DATA) public data: any ,
                private dialogRef: MatDialogRef<DialogMenuComponent>
                ) {
            this.message = data.message;
            this.cancelButtonText = data.buttonText.cancel;
        this.dialogRef.updateSize('600vw', '400vw');
    }



    ngOnInit() {
  }

}
