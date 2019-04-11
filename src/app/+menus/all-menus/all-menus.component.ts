import { Component, OnInit, ViewChild, Inject, AfterViewInit, OnChanges } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { DialogMenuComponent } from './dialog-menu/dialog-menu.component';
import { HttpService } from '../../shared/services/httpService.service';
import { MenuGroup } from './MenuGroup.Model';



@Component({
  selector: 'app-all-menus',
  templateUrl: './all-menus.component.html',
  styleUrls: ['./all-menus.component.css']
})
export class AllMenusComponent implements OnInit , AfterViewInit , OnChanges {
    constructor(public dialog: MatDialog , private  httpservice: HttpService ) {}
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
    ELEMENT_DATA: any;
    kk: any;
    dataSource = new MatTableDataSource<MenuGroup>();
    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnChanges() {

    }
    ngOnInit() {
      this.dataSource.paginator = this.paginator;
  }
    ngAfterViewInit() {
        this.get_MenuGroupList();
    }

    get_MenuGroupList() {
    this.httpservice.fetchMenuGroup().subscribe(
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
            isActive : false
        };
        this.httpservice.EditMenuGroup(newMenu).subscribe(
            (response) => {
                // console.log(response.headers.get('name'));
                // this.get_MenuGroupList();
            }
        );
    }


    delete_menuGroup(id) {
        this.httpservice.deleteMenuGroup(id).subscribe(
            (respons) => {
                console.log(respons.status);
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
}

