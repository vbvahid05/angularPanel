import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../shared/services/httpService.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css'] ,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class EditMenuComponent implements OnInit , AfterViewInit {
  menuGroupID: number ;
  menuGroupForm: FormGroup;
  respValu: any;
  constructor(private  router: ActivatedRoute , private httpSevice: HttpService) {
    }

  ngOnInit() {

      this.menuGroupID = this.router.snapshot.params['id'];
      this.httpSevice.fetch_MenuGroupDateById(this.menuGroupID).subscribe(
          (response) => {
              this.respValu = response ;
              this.menuGroupForm = new FormGroup({
                      menuGroupId : new FormControl(response.body.menuGroupID),
                      name: new FormControl(response.body.name),
                      caption: new FormControl(response.body.caption),
                      imageUrl: new FormControl(response.body.imageUrl),
                      sortOrder: new FormControl(response.body.sortOrder),
                      isActive: new FormControl(response.body.isActive),
                  }
              );
              console.log(this.menuGroupForm.value);
          }
      );
  }

     ngAfterViewInit()  {


     }
}
