fetch("https://jsonplaceholder.typicode.com/posts")
.then((res => res.json()))
.then((data) =>displayData(data))

function displayData(posts){
  const postContainer = document.getElementById("post-container");
  
  for (const post of posts) {
    // console.log(post);
     const div = document.createElement("div");
     div.classList.add("post")
     div.innerHTML = `
     <h4>User- ${post.id} </h4>
     <h5>Post : ${post.title} </h5>
     <P>Description : ${post.body} </P>

     `
     postContainer.appendChild(div);
    
  }
 
}