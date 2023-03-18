const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const posterName = document.getElementById('posterName');
const posterLocation = document.getElementById('posterLocation');
const postImg = document.getElementById('postImg');
const heartIcon = document.getElementById('heartIcon')
const dmIcon = document.getElementById('dmIcon');
const likeCount = document.getElementById('likeCount');
let count = 21492;


postImg.addEventListener('dblclick', function () {
    console.log('clicked');
})

heartIcon.addEventListener('click', () => {
    let newCount = count ++;
    likeCount.innerHTML = `${newCount.toLocaleString()} likes`;
    heartIcon.setAttribute('src', 'images/red-heart.png');
    
})

dmIcon.addEventListener('click', () => {
    heartIcon.setAttribute('src', 'images/icon-heart.png')
})


for (let i = 0; i < posts.length; i++) {
    
}

const postContainer = document.getElementById('postContainer');

for (let i = 0; i < posts.length; i++) {
  const post = posts[i];

  // Create elements
  const postDiv = document.createElement('div');
  const posterAvatar = document.createElement('img');
  const posterInfoDiv = document.createElement('div');
  const posterName = document.createElement('p');
  const posterLocation = document.createElement('p');
  
  const postImg = document.createElement('img');
  const iconsDiv = document.createElement('div');
  const heartIcon = document.createElement('img');
  const dmIcon = document.createElement('img');
  const likeCountP = document.createElement('p');

  // Set attributes
  postDiv.classList.add('post');
  posterAvatar.classList.add('poster-avatar');
  posterAvatar.setAttribute('src', post.avatar);
  posterNameP.classList.add('bold', 'poster-name');
  posterNameP.textContent = post.name;
  posterLocationP.classList.add('poster-location');
  posterLocationP.textContent = post.location;
  postImg.classList.add('post-img');
  postImg.setAttribute('src', post.post);
  heartIcon.classList.add('icon');
  heartIcon.setAttribute('src', 'images/icon-heart.png');
  dmIcon.classList.add('icon');
  dmIcon.setAttribute('src', 'images/icon-dm.png');
  likeCountP.classList.add('like-count');
  likeCountP.textContent = `${post.likes.toLocaleString()} likes`;

  // Append elements
  postContainer.appendChild(postDiv);
  postDiv.appendChild(posterAvatar);
  postDiv.appendChild(posterInfoDiv);
  posterInfoDiv.appendChild(posterNameP);
  posterInfoDiv.appendChild(posterLocationP);
  postDiv.appendChild(postImg);
  postDiv.appendChild(iconsDiv);
  iconsDiv.appendChild(heartIcon);
  iconsDiv.appendChild(dmIcon);
  postDiv.appendChild(likeCountP);
}


// <section>
//             <div class="container mid">
//                 <img class="poster-avatar" src="images/avatar-vangogh.jpg" alt="middle aged man with ginger hair looking left">
//                 <div class="poster-info">
//                     <p class="bold poster-name" id="posterName">Vincent van Gogh</p>
//                     <p class="poster-location" id="posterLocation">Zundert, Netherlands</p>
//                 <div>
//             </div>
//         </section>  
        
// //  <section>
// //             <div>
// //                 <img class="post-img" id="postImg" src="images/post-vangogh.jpg" alt="portrait of a middle aged man with ginger hair">
// //             </div>
// //         </section>
        
// //         <section>
// //             <div class="container">
// //                 <div class="icons">
// //                     <img class="icon heart" id="heartIcon" src="images/icon-heart.png" alt="heart icon">
// //                     <img class="icon comment" src="images/icon-comment.png" alt="comment icon">
// //                     <img class="icon dm" id="dmIcon" src="images/icon-dm.png" alt="message icon">
// //                 </div>
// //                 <p class="bold info" id="likeCount">21,492 likes</p>
// //                 <p><span class="bold info">vincey1853</span> just took shrooms lol</p>
// //             </div>
// //         </section>        