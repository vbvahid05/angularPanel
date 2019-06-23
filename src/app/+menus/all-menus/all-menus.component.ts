import { Component, OnInit, ViewChild, Inject, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { DialogMenuComponent } from './dialog-menu/dialog-menu.component';
import { HttpService } from '../../shared/services/httpService_Menus.service';
import { MenuGroup } from './MenuGroup.Model';
import { Subscription } from 'rxjs/internal/Subscription';
import { Status } from 'tslint/lib/runner';
import { StatusModel } from '../../shared/models/status.Model';



@Component({
  selector: 'app-all-menus',
  templateUrl: './all-menus.component.html',
  styleUrls: ['./all-menus.component.css']
})
export class AllMenusComponent implements OnInit , AfterViewInit , OnChanges  , OnDestroy {

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
    ELEMENT_DATA: any;
    kk: any;
    dataSource = new MatTableDataSource<MenuGroup>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    menuListSubscription: Subscription ;
    menuEditSubscription: Subscription ;
    menuDeleteSubscription: Subscription;
    message = '';
    private errorCode: string;

    constructor(public dialog: MatDialog , private  httpservice: HttpService , private toastMessage: MatSnackBar) {
        this.get_MenuGroupList();
    }

    ngOnChanges() {

    }
    ngOnInit() {
      this.dataSource.paginator = this.paginator;
  }
    ngAfterViewInit() {

    }

    get_MenuGroupList() {
    this.menuListSubscription = this.httpservice.fetchMenuGroup().subscribe(
        (response) => {
            console.log(response);
            this.kk = response;
            this.dataSource.data = response;
        }
    );
    }

    new_MenuGroup() {
        const  newMenu: MenuGroup = {
                       menuGroupId : -1,
                       parentMenuGroupId : null,
                       name : 'MainMenu' ,
                       caption : 'منوی اصلی' ,
                       imageUrl : 'http://' ,
                       sortOrder : -1 ,
                       isActive : true

        };

        this.httpservice.postNewMenuGroup(newMenu).subscribe(
            (response) => {
                console.log(response);
                this.get_MenuGroupList();
            }
        );
    }


    edit_MenuGroup(id) {
        const  newMenu: MenuGroup = {
            menuGroupId : id,
            parentMenuGroupId : null,
            name : 'EDITED My Own Storys' ,
            caption : 'ویرایش شده داستان  جدید ' ,
            imageUrl : 'http://' ,
            sortOrder : 0 ,
            isActive : true
        };
      this.menuEditSubscription = this.httpservice.EditMenuGroup(newMenu).subscribe(
            (response) => {
                  console.log('In edit' + response);
                // console.log(response.headers.get('name'));
                // this.get_MenuGroupList();
            }
        );
    }


    delete_menuGroup(id) {
        this.menuDeleteSubscription = this.httpservice.deleteMenuGroup(id).subscribe(
            (respons: StatusModel) => {
                this.get_MenuGroupList();

                if (respons.status) {
                     this.message = respons.message.result;
                } else {
                    if (respons.statusCode != -1) {
                        this.errorCode = respons.statusCode + 'کد خطا';
                        this.message = respons.message.result + this.errorCode ;
                    }
                }
                const  action = '';
                this.toastMessage.open(this.message , action , { duration: 3000 , });
            }
        );
    }




    openDialog() {
        this.dialog.open(DialogMenuComponent, {
            data: {
                message: 'HelloWorld',
                buttonText: {
                    cancel: 'Done'
                }
            }
        });
    }


    onSelectSave(id) {
        this.dialog.open(DialogMenuComponent, {
            data: {
                message: 'HelloWorld' + id,
                buttonText: {
                    cancel: 'Done'
                }
            }
        });
    }

    ngOnDestroy() {
         this.menuListSubscription.unsubscribe();
         if ( this.menuEditSubscription) { this.menuEditSubscription.unsubscribe(); }
         if (this.menuDeleteSubscription) { this.menuDeleteSubscription.unsubscribe(); }
    }
}

