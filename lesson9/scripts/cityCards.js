const requestURL = '../townData/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

            // Create Elements
            let card = document.createElement('section');
            let name = document.createElement('h3');
            let motto = document.createElement('p');
            let factList = document.createElement('ul');
            let yearFounded = document.createElement('li');
            let population = document.createElement('li');
            let averageRainFall = document.createElement('li');
            let photo = document.createElement('img');
            let townLink = document.createElement('a');

            // Add Classes
            card.className = 'city-summary';
            name.className = 'city-header';
            motto.className = 'motto';
            factList.className = 'fact-list';
            yearFounded.className = 'fact';
            population.className = 'fact';
            averageRainFall.className = 'fact';
            photo.className = 'city-photo';

            // Add content from JSON
            name.textContent = towns[i].name;
            motto.textContent = '"' + towns[i].motto + '"';
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Population: ' + towns[i].currentPopulation;
            averageRainFall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            townLink.setAttribute('href', towns[i].name.toLowerCase() + '-7.html');
            photo.setAttribute('src', 'image/' +  towns[i].photo);
            photo.setAttribute('alt', towns[i].name);

            // Create the Fact List
            factList.appendChild(yearFounded);
            factList.appendChild(population);
            factList.appendChild(averageRainFall);

            // Create Town Link on Photo
            townLink.appendChild(photo);

            // Create Card
            card.appendChild(name);
            card.appendChild(motto);
            card.appendChild(factList);
            card.appendChild(townLink);

            // Add Card to DOM
            document.querySelector('div.home-summary').appendChild(card);
        }
    });