 async function start() {
  const response = await fetch("https://pets-v2.dev-apis.com/pets") 
    
  const data =  await response.json()
   createPetList(data.pets)
  console.log(data)

}

const createPetList = (pet) => { 
  let petImage =`
  <div class="content-display" id="cardsdisplay">
   ${pet.map(data_url => `
      <div class="boxx skeleton"> 
        <img class="boxx-img" class="card1" src=${data_url.images[0]} alt="">
      
        <div class="dogs-name">
          <div>
            <h3 class="luna-h3">${data_url.name}</h3>
            <h4 class="havenese">${data_url.breed}</h4>
          </div>
          <img  src="./src/public/svg/dog.svg" alt="">
        </div>
        <div class="button-city">
          <button class="view-button"><a hreidf="details.html">View Details</a></button>
        
            <img class="location-svg" src="./src/public/svg/location.svg" alt="">
            <h4 class="city-wa">${data_url.city} ${data_url.state}</h4>
          
        </div>
      </div>

      
    `)}
  
  </div>`

  document.getElementById('cardsdisplay').innerHTML = petImage
  

}

start()







 

 async function start() {
  const response = await fetch("https://pets-v2.dev-apis.com/pets") 
    
  const data =  await response.json()
   creatPetList(data.pets)
  console.log(data)

}

const creatPetList = (pet) => { 
  let petImage =`
  <div class="content-display2" id="cardsdisplay2">
   ${pet.map(data_url => `
      <div class="boxx skeleton"> 
        <img class="boxx-img" class="card1" src=${data_url.images[0]} alt="">
      
        <div class="dogs-name">
          <div>
            <h3 class="luna-h3">${data_url.name}</h3>
            <h4 class="havenese">${data_url.breed}</h4>
          </div>
          <img  src="./src/public/svg/dog.svg" alt="">
        </div>
        <div class="button-city">
          <button class="view-button"><a hreidf="details.html">View Details</a></button>
        
            <img class="location-svg" src="./src/public/svg/location.svg" alt="">
            <h4 class="city-wa">${data_url.city} ${data_url.state}</h4>
          
        </div>
      </div>

      
    `)}
  
  </div>`

  document.getElementById('cardsdisplay2').innerHTML = petImage
  

}

start()







 

