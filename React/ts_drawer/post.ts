'use strict';

enum PostStatus {
  Unpublished,
  Published,
  Draft
}

interface Post {
  title: string;
  status: PostStatus;
  content: string;
}

let post: Post = {
  title: '相信猪会飞',
  status: PostStatus.Unpublished,
  content: '--------'
} 