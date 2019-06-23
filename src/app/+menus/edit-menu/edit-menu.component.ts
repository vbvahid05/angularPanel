import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../shared/services/httpService_Menus.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { StatusModel } from '../../shared/models/status.Model';
import { MatSnackBar } from '@angular/material';
import { MenuGroupBodyModel } from '../../shared/models/menuGroup_body.Model';
import { MenuGroup } from '../all-menus/MenuGroup.Model';


@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css'] ,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class EditMenuComponent implements OnInit , AfterViewInit {
  menuGroupID: number ;
  menuGroupEditForm: FormGroup;
  paramsSubsctiption: Subscription;
  respValu: any;
  VBname: any ;
  VBcaption = '';
  menuGrupResponse: MenuGroupBodyModel ;
  errorStatus: StatusModel;
  statusCode = '';
  newValue: MenuGroup;
  constructor(private route: Router  , private  router: ActivatedRoute , private httpSevice: HttpService , private toastMessage: MatSnackBar) {
    }

  ngOnInit() {

      this.menuGroupEditForm = new FormGroup({
          menuGroupId : new FormControl(null),
          name: new FormControl(null),
          caption: new FormControl(null),
          imageUrl: new FormControl(null),
          sortOrder: new FormControl(null),
          isActive: new FormControl(null),
      });

      this.menuGroupID = this.router.snapshot.params['id'];
      this.httpSevice.fetch_MenuGroupDateById(this.menuGroupID).subscribe(
          (response) => {
              this.menuGrupResponse = response.body ;
              if (this.menuGrupResponse.statusCode) {
                  this.statusCode = 'کد خطا :' + this.menuGrupResponse.statusCode ;
                  this.toastMessage.open(this.statusCode + this.menuGrupResponse.message , '', { duration: 5000});
              } else  {
                  this.menuGroupEditForm.patchValue({
                      name :  this.menuGrupResponse.name ,
                      caption: this.menuGrupResponse.caption ,
                      imageUrl: this.menuGrupResponse.imageUrl ,
                      sortOrder: this.menuGrupResponse.sortOrder ,
                      isActive: this.menuGrupResponse.isActive
                  });
              }}
      );
      this.VBname = this.menuGroupID;

      this.httpSevice.fetch_subMenus(this.menuGroupID).subscribe(
          (response) => {
              console.log(response);
          }
      );
  }

     ngAfterViewInit()  {

             }

    onSubmitEditMenuGroup () {
        this.menuGroupID = this.router.snapshot.params['id'];
        this.menuGroupEditForm.value.menuGroupId = +this.menuGroupID ;
        this.newValue = this.menuGroupEditForm.value;
        this.httpSevice.EditMenuGroup( this.newValue ).subscribe(
            (response) => {
               if (response) {
                   this.toastMessage.open('ویرایش شد', '', { duration: 1000});
                   this.route.navigate(['/menus/listMenu']);
               }
            }
        );

        console.log(this.menuGroupEditForm);
    }

    OnDestroy() {
      this.paramsSubsctiption.unsubscribe();
    }
}
