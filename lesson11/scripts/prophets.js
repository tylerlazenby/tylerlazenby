const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birthDate = document.createElement('p');
            let birthPlace = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            birthDate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            birthPlace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            img.setAttribute('src', prophets[i].imageurl);

            card.appendChild(h2);
            card.appendChild(birthDate);
            card.appendChild(birthPlace);
            card.appendChild(img);

            document.querySelector('div.cards').appendChild(card);
        }
    });



