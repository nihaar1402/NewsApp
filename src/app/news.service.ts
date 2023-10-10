import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url='https://newsapi.org/v2/top-headlines?country=in&apiKey=8059efbb0616495bb57e89576c223778'
 businessurl='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8059efbb0616495bb57e89576c223778'
 sportsurl='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8059efbb0616495bb57e89576c223778'
 techurl='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8059efbb0616495bb57e89576c223778'
 sciurl='https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=8059efbb0616495bb57e89576c223778'
 healthurl='https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=8059efbb0616495bb57e89576c223778'
 entertainurl='https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8059efbb0616495bb57e89576c223778'

 constructor(private http:HttpClient) { }

  getnews(){
    return this.http.get(this.url);
  }

  getbusiness(){
   return this.http.get(this.businessurl);
  }
  getsports(){
    return this.http.get(this.sportsurl);
  }
  gettech(){
    return this.http.get(this.techurl);
  }
  getscience(){
    return this.http.get(this.sciurl);
  }
  gethealth(){
    return this.http.get(this.healthurl);
  }
  getentertain(){
    return this.http.get(this.entertainurl);
  }
}
