import { BadRequestError } from './../bad-request-error';
import { PostService } from '../services/post.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../not-found-error';
import { AppError } from '../app-error';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
    .subscribe(
      response => {
        this.posts = response;
      });
  }

  createPost(input: HTMLInputElement) {
    if (input.value.length > 0) {
      const post = { title: input.value };
      input.value = '';
      this.service.create(post)
      .subscribe(
        response => {
          post['id'] = response['id'];
          this.posts.splice(0, 0, post);
          console.log(response);
        },
        (error: AppError) => {
          if (error instanceof BadRequestError) {
            // this.form.setErrors(error.originalError);
          } else {
            throw error;
          }
        });
    }
  }

  updatePost(post) {
    this.service.update(post, JSON.stringify({isRead: true}))
    .subscribe(
      response => {
          console.log(response);
      });
  }

  deletePost(post) {
    this.service.delete(99999)
    .subscribe(
      response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          /* 404 is no longer working on jsonplaceholder (on random id) */
          alert('This post has already been deleted.');
        } else {
          throw error;
        }
      });
  }
}
