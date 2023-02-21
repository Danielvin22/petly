//  async function start() {
//   const response = await fetch("https://dog.ceo/api/breeds/list/all")   
//   const data =  await response.json()
//   // createpetlist(data.message)

// }

// start()



// function createPetList(petlist) {
//   document.getElementById("dog-card")
// }


// fetch('https://pets-v2.dev-apis.com/pets').then((data)=>{
//   // console.log(data);
//   return data.json();
// }).then((completedata)=>{
//   console.log(completedata[2]);
// })


const div = document.getElementById('cardsDisplay')

fetch('https://pets-v2.dev-apis.com/pets')
  .then((response) => response.json())
  .then((data) => {
    let cardsDisplay = data
    cardsDisplay.map(function(play){
      let name = document.createElement('h2')
      let email = document.createElement('h2')

      name.innerHTML = `${play.brand}`
      console.log('data');
    

    })

  });

