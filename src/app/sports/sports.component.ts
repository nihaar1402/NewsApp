import { Component } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  newsarray:any=[]
  constructor(private sports:NewsService){
    sports.getsports().subscribe((data:any)=>{
      this.newsarray=data.articles;
    })
  }
}
