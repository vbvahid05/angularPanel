import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { MenuGroup } from '../../+menus/all-menus/MenuGroup.Model';

@Injectable()
export class HttpService {
    constructor (private httpClient: HttpClient) {}


    public fetchMenuGroup(): Observable<MenuGroup[]> {
        const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbGkiLCJBY3RpdmVQcm9qZWN0IjoiUE1PUyIsImV4cCI6MTU1NDgyMzY0NywiaXNzIjoiaHR0cDovL215b25lc3RvcnkuYWh1cmFjbXMuaXIvIiwiYXVkIjoiaHR0cDovL215b25lc3RvcnkuYWh1cmFjbXMuaXIvIn0.pNVOUtZSf1r1gV8nyFoIqWq4C7ArhWSF1SxiyszOhpg' ;
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Authorization': token ,
            'x-api-key': '7c2f7bdeed818da7ba27b165958a2927'
        });
        return this.httpClient.get<MenuGroup[]>(
            'http://api.ahuracms.ir/fa/MenuGroups',
            { headers: headers }

        );
    }

    public postNewMenuGroup(menuGroupItem: MenuGroup): Observable<HttpResponse<MenuGroup>> {

        const url = 'http://api.ahuracms.ir/fa/MenuGroups/New';
        const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbGkiLCJBY3RpdmVQcm9qZWN0IjoiUE1PUyIsImV4cCI6MTU1NDgyMzY0NywiaXNzIjoiaHR0cDovL215b25lc3RvcnkuYWh1cmFjbXMuaXIvIiwiYXVkIjoiaHR0cDovL215b25lc3RvcnkuYWh1cmFjbXMuaXIvIn0.pNVOUtZSf1r1gV8nyFoIqWq4C7ArhWSF1SxiyszOhpg' ;
        const httpHeaders  = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token ,
            'x-api-key': '7c2f7bdeed818da7ba27b165958a2927'
        });

         return this.httpClient.post<MenuGroup> ('http://api.ahuracms.ir/fa/MenuGroups/New' , JSON.stringify(menuGroupItem)  ,
             {
                 headers : httpHeaders,
                 observe : 'response'
             });
        //
    }

    public EditMenuGroup(menuGroupItem: MenuGroup): Observable<HttpResponse<MenuGroup>> {

        const url = 'http://api.ahuracms.ir/fa/MenuGroups/New';
        const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbGkiLCJBY3RpdmVQcm9qZWN0IjoiUE1PUyIsImV4cCI6MTU1NDgyMzY0NywiaXNzIjoiaHR0cDovL215b25lc3RvcnkuYWh1cmFjbXMuaXIvIiwiYXVkIjoiaHR0cDovL215b25lc3RvcnkuYWh1cmFjbXMuaXIvIn0.pNVOUtZSf1r1gV8nyFoIqWq4C7ArhWSF1SxiyszOhpg' ;
        const httpHeaders  = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token ,
            'x-api-key': '7c2f7bdeed818da7ba27b165958a2927'
        });

        return this.httpClient.put<MenuGroup> ('http://api.ahuracms.ir/fa/MenuGroups/Edit' , JSON.stringify(menuGroupItem)  ,
            {
                headers : httpHeaders,
                observe : 'response'
            });
        //
    }



    public deleteMenuGroup(id) {

        const url = 'http://api.ahuracms.ir/fa/MenuGroups/New';
        const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbGkiLCJBY3RpdmVQcm9qZWN0IjoiUE1PUyIsImV4cCI6MTU1NDgyMzY0NywiaXNzIjoiaHR0cDovL215b25lc3RvcnkuYWh1cmFjbXMuaXIvIiwiYXVkIjoiaHR0cDovL215b25lc3RvcnkuYWh1cmFjbXMuaXIvIn0.pNVOUtZSf1r1gV8nyFoIqWq4C7ArhWSF1SxiyszOhpg' ;
        const httpHeaders  = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token ,
            'x-api-key': '7c2f7bdeed818da7ba27b165958a2927'
        });

        return this.httpClient.delete('http://api.ahuracms.ir/fa/MenuGroups/Edit/' + id  ,
            {
                headers : httpHeaders,
                observe : 'response'
            });
        //
    }


    public fetch_MenuGroupDateById (id): Observable <any> {
        const url = 'http://api.ahuracms.ir/fa/MenuGroups/' + id;
        const token = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbGkiLCJBY3RpdmVQcm9qZWN0IjoiUE1PUyIsImV4cCI6MTU1NDgyMzY0NywiaXNzIjoiaHR0cDovL215b25lc3RvcnkuYWh1cmFjbXMuaXIvIiwiYXVkIjoiaHR0cDovL215b25lc3RvcnkuYWh1cmFjbXMuaXIvIn0.pNVOUtZSf1r1gV8nyFoIqWq4C7ArhWSF1SxiyszOhpg' ;
        const httpHeaders  = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token ,
            'x-api-key': '7c2f7bdeed818da7ba27b165958a2927'
        });
        return this.httpClient.get(url ,
            {
                headers : httpHeaders,
                observe : 'response'
            });
    }
}
