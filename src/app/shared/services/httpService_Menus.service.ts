import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { MenuGroup } from '../../+menus/all-menus/MenuGroup.Model';
import { catchError, tap } from 'rxjs/operators';
import { PublicService } from './public.service';

@Injectable()
export class HttpService {
    constructor (private httpClient: HttpClient , private publicService: PublicService) {}
    baseUrl = this.publicService.BaseUrl();
    tokenString = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbGkiLCJBY3RpdmVQcm9qZWN0IjoiUE1PUyIsImV4cCI6MTU1NjEwNDU1OCwiaXNzIjoiaHR0cDovL215b25lc3RvcnkuYWh1cmFjbXMuaXIvIiwiYXVkIjoiaHR0cDovL215b25lc3RvcnkuYWh1cmFjbXMuaXIvIn0.p9WhzWP3AlVNsN6OCNyp_GXrj_8JXem_Uk5kZVeXJkQ';
    apiKey = '7c2f7bdeed818da7ba27b165958a2927';
    
    public fetchMenuGroup(): Observable<MenuGroup[]> {
                    const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbGkiLCJBY3RpdmVQcm9qZWN0IjoiUE1PUyIsImV4cCI6MTU1NDgyMzY0NywiaXNzIjoiaHR0cDovL215b25lc3RvcnkuYWh1cmFjbXMuaXIvIiwiYXVkIjoiaHR0cDovL215b25lc3RvcnkuYWh1cmFjbXMuaXIvIn0.pNVOUtZSf1r1gV8nyFoIqWq4C7ArhWSF1SxiyszOhpg' ;
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Authorization': token ,
            'x-api-key': this.apiKey
        });

        return this.httpClient.get<MenuGroup[]>(
            this.baseUrl + 'MenuGroups',
            { headers: headers }

        );
    }

    public postNewMenuGroup(menuGroupItem: MenuGroup): Observable<HttpResponse<MenuGroup>> {

        const url = this.baseUrl + 'MenuGroups/New';
        const token = 'Bearer ' + this.tokenString ;
        const httpHeaders  = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token ,
            'x-api-key': this.apiKey
        });

         return this.httpClient.post<MenuGroup> ('http://api.ahuracms.ir/fa/MenuGroups/New' , JSON.stringify(menuGroupItem)  ,
             {
                 headers : httpHeaders,
                 observe : 'response'
             });
        //
    }

    public EditMenuGroup(menuGroupItem: MenuGroup): Observable<HttpResponse<MenuGroup>> {

        const url = this.baseUrl + 'MenuGroups/Edit' ;
        const token = 'Bearer ' + this.tokenString ;
        const httpHeaders  = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token ,
            'x-api-key': this.apiKey
        });

        return this.httpClient.put<MenuGroup> ( url , JSON.stringify(menuGroupItem)  ,
            {
                headers : httpHeaders,
                observe : 'response'
            });
        //
    }



    // deleteMenuGroup (id): Observable<any> {
    //
    //     const url = 'http://api.ahuracms.ir/fa/MenuGroups/';
    //     const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbGkiLCJBY3RpdmVQcm9qZWN0IjoiUE1PUyIsImV4cCI6MTU1NDgyMzY0NywiaXNzIjoiaHR0cDovL215b25lc3RvcnkuYWh1cmFjbXMuaXIvIiwiYXVkIjoiaHR0cDovL215b25lc3RvcnkuYWh1cmFjbXMuaXIvIn0.pNVOUtZSf1r1gV8nyFoIqWq4C7ArhWSF1SxiyszOhpg' ;
    //     const httpHeaders  = new HttpHeaders({
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //         'Authorization': token ,
    //         'x-api-key': '7c2f7bdeed818da7ba27b165958a2927'
    //     });
    //     return this.httpClient.delete<any>(url + id, httpHeaders).pipe(
    //         tap(_ => console.log(`deleted product id=${id}`))
    //     );
    // }

    public deleteMenuGroup(id) {

        const url = this.baseUrl + 'MenuGroups/';
        const token = 'Bearer ' + this.tokenString ;
        const httpHeaders  = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token ,
            'x-api-key': this.apiKey
        });

        return this.httpClient.delete(url + id  ,
            {
                headers : httpHeaders
            });

    }


    public fetch_MenuGroupDateById (id): Observable <any> {
        const url = this.baseUrl + 'MenuGroups/' + id;
        const token = 'Bearer ' + this.tokenString ;
        const httpHeaders  = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token ,
            'x-api-key': this.apiKey
        });
        return this.httpClient.get(url ,
            {
                headers : httpHeaders,
                observe : 'response'
            });
    }

// #################### SubMenu  #######################
    public fetch_subMenus (menuGroupId): Observable <any> {
        const url = this.baseUrl + 'Menus/' + menuGroupId + '/child';
        const token = 'Bearer ' + this.tokenString ;
        const httpHeaders  = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token ,
            'x-api-key': this.apiKey
        });
        return this.httpClient.get(url ,
            {
                headers : httpHeaders,
                observe : 'response'
            });
    }

}
