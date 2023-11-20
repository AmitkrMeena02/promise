const posts = [];
let lastActivityTime = null;

// Function to create a new post
function createPost(post) {
  return new Promise((resolve) => {
    posts.push(post);
    resolve();
  });
}

// Function to delete the last post
function deletePost() {
  return new Promise((resolve, reject) => {
    if (posts.length > 0) {
      const deletedPost = posts.pop();
      resolve(deletedPost);
    } else {
      reject("ERROR: No posts to delete");
    }
  });
}

// Create a new function called updateLastUserActivityTime
function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivityTime = new Date().toLocaleTimeString();
      resolve(lastActivityTime);
    }, 1000);
  });
}

// Promise.all to handle both createPost and updateLastUserActivityTime
Promise.all([
  createPost({ title: "Post 1", body: "This is Post 1" }),
  updateLastUserActivityTime(),
])
  .then(([_, updatedLastActivityTime]) => {
    console.log("All Posts:", posts);
    console.log("Last Activity Time:", updatedLastActivityTime);
    return deletePost();
  })
  .then((deletedPost) => {
    console.log("Deleted Post:", deletedPost);
    console.log("Remaining Posts:", posts);
  })
  .catch((error) => console.log(error));

// async.await to handle both createPost and updateLastUserActivityTime  
  async function handlePostOperations() {
    try {
      await createPost({ title: "Post 1", body: "This is Post 1" });
  
      const updatedLastActivityTime = await updateLastUserActivityTime();
      console.log("All Posts:", posts);
      console.log("Last Activity Time:", updatedLastActivityTime);
  
      const deletedPost = await deletePost();
      console.log("Deleted Post:", deletedPost);
      console.log("Remaining Posts:", posts);
    } catch (error) {
      console.log(error);
    }
  }
  
  handlePostOperations();  
