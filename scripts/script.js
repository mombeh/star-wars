fetch(`https://www.swapi.tech/api/films`)
 .then((res) => res.json())
  .then((data) => {
    console.log(data)
    const phantomName = document.getElementById('empire')
    const clonesDiv = document.getElementById('smith')
    const revengeDiv = document.getElementById('returnn')
    const strikesVar = document.getElementById('menace')
    const jediName = document.getElementById('clones')
    const forceName = document.getElementById('awake')
  
    for (let index = 0; index < data.result.length; index++) {
      phantomName.innerHTML = `Episode 1: ${data.result[0].properties.title}`
      clonesDiv.innerHTML = `Episode 2: ${data.result[1].properties.title}`
      revengeDiv.innerHTML = `Episode 3: ${data.result[2].properties.title}`
      strikesVar.innerHTML = `Episode 4: ${data.result[3].properties.title}`
      jediName.innerHTML = `Episode 5: ${data.result[4].properties.title}`
      forceName.innerHTML = `Episode 6: ${data.result[5].properties.title}`
    }
  })

                      

