// Get the top level element
const cards = document.querySelector('.cards')

// Define an array of follower logins, retrieved from: https://api.github.com/users/JCRN/followers
const followersArray = ['DeejayEaster', 'fskeen', 'ElvisKnapman', 'pdadlani', 'czclaxton', 'mariam-farrukh', 'Pmtague', 'daredtech', 'arvagas', 'LandryIrakoze', 'JerryOsorio28', 'MarquesJ8023', 'AlexisPanyathong', 'tommycoleman87'];

// Creates a new user card for each follower
followersArray.forEach(follower => getData(follower))



/**************************************************************************** FUNCTIONS *************************************************************************/

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
