import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StagService {

  constructor(
    private http: HttpClient
  ) { }

  public getSchedule(id:string){
    return this.http.get('/ws/services/rest2/rozvrhy/getRozvrhByStudent?osCislo='+id+'&outputFormat=JSON')
  }
}
