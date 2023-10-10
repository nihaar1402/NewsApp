import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent {
newsarray:any=[];

constructor(private science:NewsService){
  science.getscience().subscribe((data:any)=>{
    console.log(data);
    this.newsarray=data.articles;
  })
}
}
