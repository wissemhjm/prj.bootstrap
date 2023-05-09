let posts = [];

function createPost() {
  let title = document.getElementById("title").value;
  let subject = document.getElementById("subject").value;
  let imageUrl = document.getElementById("image-url").value;
  
  let post = { title: title, subject: subject, imageUrl: imageUrl };
  posts.push(post);
  displayPosts();
}

function displayPosts() {
  let Maker = "";
  
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    
    Maker += "<div class='post'>";
    Maker += "<h2>" + post.title + "</h2>";
    Maker += "<p>" + post.subject + "</p>";
    Maker += "<img src='" + post.imageUrl + "'>";
    Maker += "</div>";
  }
  
  document.getElementById("posts").innerHTML = Maker;
  // to compensate something from html in js //
}
