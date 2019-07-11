/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cards = document.querySelector('.cards')

const userData = axios.get('https://api.github.com/users/JCRN')
  userData
    .then(data => {
      // handle success
      console.log('response', data);
      const userCard = createUserCard(data.data)
      cards.appendChild(userCard)
    })
  userData
    .catch(error => {
      // handle error
      alert('OOPS! Something Went Wrong :(', error)
      console.log('error', error);
    })


// const testCard = {
//   avatar_url: 'https://avatars1.githubusercontent.com/u/50152206?v=4',
//   name: 'Jason Clemons',
//   login: 'JCRN',
//   location: 'Seattle',
//   html_url: 'https://github.com/JCRN',
//   followers: 13,
//   following: 13,
//   bio: 'Full Stack Web Development Student @ Lambda School'
// }

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createUserCard(data) {
  // Define elements
  const card = document.createElement('div')
  const cardImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardInfoHeader = document.createElement('h3')
  const cardInfoUserName = document.createElement('p')
  const cardInfoLocation = document.createElement('p')
  const cardInfoProfile = document.createElement('p')
  const cardInfoProfileURL = document.createElement('a')
  const cardInfoFollowers = document.createElement('p')
  const cardInfoFollowing = document.createElement('p')
  const cardInfoBio = document.createElement('p')

  // Add class names
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  cardInfoHeader.classList.add('name')
  cardInfoUserName.classList.add('username')

  // Set content
  cardImg.src = data.avatar_url
  cardInfoHeader.textContent = data.name
  cardInfoUserName.textContent = data.login
  cardInfoLocation.textContent = `Location: ${data.location}`
  cardInfoProfileURL.href = `Profile: ${data.html_url}`
  cardInfoFollowers.textContent = `Followers: ${data.followers}`
  cardInfoFollowing.textContent = `Following: ${data.following}`
  cardInfoBio.textContent = `Bio: ${data.bio  }`

  // Build the card
  card.appendChild(cardImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(cardInfoHeader)
  cardInfo.appendChild(cardInfoUserName)
  cardInfo.appendChild(cardInfoLocation)
  cardInfo.appendChild(cardInfoLocation)
  cardInfo.appendChild(cardInfoProfile)
  cardInfoProfile.appendChild(cardInfoProfileURL)
  cardInfo.appendChild(cardInfoFollowers)
  cardInfo.appendChild(cardInfoFollowing)
  cardInfo.appendChild(cardInfoBio)

  // Return completed card
  return card
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
