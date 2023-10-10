import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-entertain',
  templateUrl: './entertain.component.html',
  styleUrls: ['./entertain.component.css']
})
export class EntertainComponent {
  newsarray:any=[];

  constructor(private ent:NewsService){
    ent.getentertain().subscribe((data:any)=>{
   console.log(data);
   this.newsarray=data.articles;
    })
  }
}
