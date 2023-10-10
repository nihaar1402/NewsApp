import { Component } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent {
 newsarray:any=[]
  constructor(private tech:NewsService){
    tech.gettech().subscribe((data:any)=>{
       this.newsarray=data.articles;
    })
  }
}
