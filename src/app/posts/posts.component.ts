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
    .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    if (input.value.length > 0) {
      const post = { title: input.value };
      this.posts.splice(0, 0, post);

      input.value = '';

      this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost['id'];
          console.log(newPost);
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

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
      updatedPost => {
          console.log(updatedPost);
      });
  }

  deletePost(post) {
    // Optimistic delete
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post['id'])
    .subscribe(
      () => {
      },
      (error: AppError) => {
        // Is not 404 so add it back
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          // Is 404 so splice it and show to user
          this.posts.splice(index, 1);
          /* 404 is no longer working on jsonplaceholder (on random id) */
          alert('This post has already been deleted.');
        } else {
          throw error;
        }
      });
  }
}
