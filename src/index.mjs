import blogPost from './blog_post.mjs';

const container = document.getElementById('container');

function test() {
  console.log(blogPost[0].title);
}

function getBlogPosts(){
  let output = "";
  for (var i = 0; i < blogPost.length; i++) {
    output +=   `<div class="content">
                  <h2>${blogPost[i].title}</h2>
                  <div class="content_header">
                  </div>
                  <p>${blogPost[i].text}</p>
                  <p>Kristian Friis</p><p class="date"><small>${blogPost[i].date}</small></p>
                </div>`;
    container.innerHTML = output;
  };
};

document.AddEventListener('DOMContentLoaded', getBlogPosts());
