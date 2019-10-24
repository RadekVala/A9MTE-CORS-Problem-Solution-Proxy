import { Component } from '@angular/core';
import { StagService } from '../api/stag.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private data:Object = ''

  constructor(
    private api:StagService
  ) {}

  ngOnInit(){
    this.api.getSchedule('A16082').subscribe((data)=> {
      console.log(data);
      this.data = data;
    })
  }

}
