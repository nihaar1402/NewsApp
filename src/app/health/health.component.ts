import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  newsarray:any=[]

  constructor(private health:NewsService){
    health.gethealth().subscribe((data:any)=>{
    console.log(data);
    this.newsarray=data.articles;
    })
  }
}
