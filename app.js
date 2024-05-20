
let factText = document.getElementById('fact-text')



async function catFacts(){


    let apikey = "https://catfact.ninja/fact"

    const factData = await fetch(apikey).then(res => res.json())

    let speech = new SpeechSynthesisUtterance();
    speech.text = factData.fact ;
    window.speechSynthesis.speak(speech)


    console.log(factData.fact)

    factText.innerHTML = ""
    factText.innerHTML += `
    <p>${factData.fact}</p>
   `

}

 function next(){
    catFacts()
 }
