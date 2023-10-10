import { Component } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  newsarray:any=[]

  constructor(private news:NewsService){
    this.news.getnews().subscribe((result:any)=>{
      console.log(result)
      this.newsarray=result.articles;

    })
  }
}
