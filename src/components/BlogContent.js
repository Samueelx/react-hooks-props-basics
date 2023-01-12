import React from "react";

function BlogContent({ articleText, isPublished, minutesRead}) {
  if(isPublished !== true)
  return null; /**Hide unpublished content */

  return (
    <div>
      <h1>{articleText}</h1>
      <p>A {minutesRead} Minutes Read</p>
    </div>
  );
}

export default BlogContent;
