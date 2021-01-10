const app = document.getElementById('root'); //selectRootFromDOM

const logo = document.createElement('img'); //createIMG
logo.src = 'https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png';

const container = document.createElement('div'); //createDIV
container.setAttribute('class', 'container');

app.appendChild(logo); //appendNewElementsToRoot
app.appendChild(container);

const request = new XMLHttpRequest(); //createRequest

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true); //openConnection
request.onload = function () {
  const data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      description = movie.description.substring(0, 300);
      p.textContent = `${description}...`;
      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}; //dataOnloading

request.send(); //sendRequest
