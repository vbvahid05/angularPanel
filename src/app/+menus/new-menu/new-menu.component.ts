import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../../shared/services/httpService.service';
import { MenuGroup } from '../all-menus/MenuGroup.Model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.css']
})
export class NewMenuComponent implements OnInit {
  menuGroupForm: FormGroup;
    checked = true;
    constructor(private router: Router  , private  httpservice: HttpService , private toastMessage: MatSnackBar) { }

    // menuGroupId: number,
    // parentMenuGroupId: number ,
    // name: string,
    // caption: string,
    // imageUrl: string,
    // sortOrder: number,
    // isActive: boolean
  ngOnInit() {
    this.menuGroupForm = new FormGroup({
        menuGroupId : new FormControl(-1),
        name: new FormControl(null),
        caption: new FormControl(null),
        imageUrl: new FormControl(null),
        sortOrder: new FormControl(null),
        isActive: new FormControl(null),
        }
    );
  }

    onSubmitNewMenuGroup () {
    // console.log(this.menuGroupForm.value);
    const newMenu: MenuGroup = this.menuGroupForm.value;
        this.httpservice.postNewMenuGroup(newMenu).subscribe(
            (response) => {
                const  message = 'منو جدید با موفقیت اضافه شد';
                const  action = '';
                this.toastMessage.open(message , action , { duration: 3000 , });
                this.router.navigate(['/menus/editMenu/' + response.body.menuGroupId]);
            }
        );
    }

}
