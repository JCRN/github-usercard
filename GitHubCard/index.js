// Get the top level element
const cards = document.querySelector('.cards')

<<<<<<< HEAD
getData('JCRN')
=======



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
>>>>>>> fb4ea8370746be9c63dfb081a108bb80cf52a9f5

// // // Define an array of follower logins, retrieved from: https://api.github.com/users/JCRN/followers
const followersArray = ['DeejayEaster', 'fskeen', 'ElvisKnapman', 'pdadlani', 'czclaxton', 'mariam-farrukh', 'Pmtague', 'daredtech', 'arvagas', 'LandryIrakoze', 'JerryOsorio28', 'MarquesJ8023', 'AlexisPanyathong', 'tommycoleman87'];

// Creates a new user card for each follower
followersArray.forEach(follower => getData(follower))


<<<<<<< HEAD

/**************************************************************************** FUNCTIONS *************************************************************************/
=======


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

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
>>>>>>> fb4ea8370746be9c63dfb081a108bb80cf52a9f5

/* 
1. Takes github user login as argument 
2. Axios: requests (usr) data from github API 
  Success:
    3. Creates a new user card by Calling createUserCard() and passing (usr) data object   
    4. Injects new user card into the DOM 
  Failure:
    3. Alert message   
*/
function getData(usr) {
  axios.get(`https://api.github.com/users/${usr}`)
  .then(results => {
    // create usr card
    console.log(results.data)
    const usrCard = createCard(results.data)
    cards.appendChild(usrCard) 
  })
  .catch(error => {
    alert('OOPS! Something Went Wrong :(', error)
  })
}



// Takes data object, creates elements / sets values / returns a github usercard  
function createCard(data) {
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

// Get top level element
const cards = document.querySelector('.cards')

// Define array of follower logins
const followersArray = ['DeejayEaster', 'fskeen', 'ElvisKnapman', 'pdadlani', 'czclaxton', 'mariam-farrukh', 'Pmtague', 'daredtech', 'arvagas', 'LandryIrakoze', 'JerryOsorio28', 'MarquesJ8023', 'AlexisPanyathong', 'tommycoleman87'];

/**************************************************************************** FUNCTIONS *************************************************************************/

/* 1. Takes github user login as argument 
   2. Axios call to github API to collect relevant user data 
      Success:
        Creates a new user card by passing user data into createUserCard() 
        Injects user card into the DOM 
      Failure:
        Alerts User */
function getUserData(usr) { 
  axios.get(`https://api.github.com/users/${usr}`)
  .then(data => {
    // handle success
    const userCard = createUserCard(data.data)
    cards.appendChild(userCard)
  })
  .catch(error => {
    // handle error
    alert('OOPS! Something Went Wrong :(', error)
  })
}


// Takes user data from API call, creates elements / sets values / returns a github usercard  
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
