import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  constructor(private http: HttpClient) { }

  getSubredditData(subredditContext) {
    return this.http.get(`http://www.reddit.com/r/${subredditContext}.json`);
  }
}
