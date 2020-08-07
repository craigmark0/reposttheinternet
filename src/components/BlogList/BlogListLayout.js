import React from 'react';
import { BlogListLayoutBase } from './BlogListLayoutBase.style';

export function BlogListLayout() {
  return (
    <BlogListLayoutBase numOfRows={6}>
      <div>Hello</div>
      <div>there</div>
      <div>World</div>
    </BlogListLayoutBase>
  )
};