import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  newsarray:any=[]
  constructor(private business:NewsService){

    business.getbusiness().subscribe((data:any)=>{
      this.newsarray=data.articles;
    })

  }
}
