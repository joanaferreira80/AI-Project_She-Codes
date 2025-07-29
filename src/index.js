

function displayPoem(response) {


  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

let InstructionsElement = document.querySelector("#instructions");
let apikey="t61c0cb24c8co6107fad0a63023aa3ea";
let prompt = `Write a portuguese poem about ${InstructionsElement.value}`;
let context = "you are a AI assistant good to write simple portuguese poems in Portuguese. Write a 4 line poem and separate each line with <br>. Sign the poem with a <strong>She Codes AI</strong>";
let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
axios.get(apiUrl).then(displayPoem);

}

let poemFormElement = document.querySelector("#form");
poemFormElement.addEventListener("submit", generatePoem);