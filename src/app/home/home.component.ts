import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RedditService } from '../reddit.service';
import { throwError } from 'rxjs/internal/observable/throwError';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  redditForm: FormGroup;
  articles: object;
  src: string;

  constructor(private fb: FormBuilder, private redditService: RedditService) { }

  ngOnInit() {
    this.redditForm = this.fb.group({
      subredditName: ['', Validators.required]
    });
  }

  setDefaultPic() {
    this.src = './app/assets/images/no-image.png';
  }

  getFormControl(name) {
    return this.redditForm.get(name);
  }

  onSubmit() {
    this.redditService.getSubredditData(this.redditForm.value.subredditName).subscribe(
      data => { this.articles = data; },
      error => alert(error.message)
    );
  }
}
