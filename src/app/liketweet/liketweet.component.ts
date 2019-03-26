import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-liketweet',
  templateUrl: './liketweet.component.html',
  styleUrls: ['./liketweet.component.scss']
})
export class LiketweetComponent {
  faHeart = faHeart;
  @Input('is-liked') isLiked:boolean = false;
  @Input('likes-count') likesCount:number = 0;

  addToFav() {
    if(!this.isLiked) {
      this.isLiked = !this.isLiked;
      this.likesCount++;
    } else {
      this.isLiked = !this.isLiked;
      this.likesCount--;
    }
  }

}
