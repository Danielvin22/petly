 async function start() {
  const response = await fetch("https://pets-v2.dev-apis.com/pets")   
  const data =  await response.json()
   createPetList(data.pets)
  console.log(data)

}

const createPetList = (pet) => { 
  let petImage =`
  <div class="cards-display">
   ${pet.map(data_url => `
      <div class="cards-content"> 
        <img id="dog-card" class="card1" src=${data_url.images[0]} alt="">
      
        <div class="luna">
          <div>
            <h3 class="luna-h3">${data_url.name}</h3>
            <h4 class="havenese">${data_url.breed}</h4>
          </div>
          <img class="skeleton-" src="./src/public/svg/dog.svg" alt="">
        </div>
      </div>

      <div class="search-location">
        <button class="view"><a hreidf="details.html">View Details</a></button>
        <div class="seattle">
          <img class="location-svg" src="./src/public/svg/location.svg" alt="">
          <h4 class="seattle-wa">${data_url.city} ${data_url.state}</h4>
        </div>
      </div>
    `)}
  
  </div>`

  document.getElementById('cardsdisplay').innerHTML = petImage
  

}

start()






 

