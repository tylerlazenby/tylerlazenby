const requestURL = 'data/rexburg.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const temples = jsonObject['temples'];

        for (let i = 0; i < temples.length; i++) {
            let summary = document.createElement('ul')
            let name = document.createElement('li');
            let location = document.createElement('li');
            let date = document.createElement('li');

            name.textContent = 'Official Name: ' + temples[i].NAME;
            location.textContent = 'Location: ' + temples[i].LOCATION;
            date.textContent = 'Dedicated: ' + temples[i].DEDICATED;

            summary.appendChild(name);
            summary.appendChild(location);
            summary.appendChild(date);

            document.querySelector('div#rexburg-summary').appendChild(summary);
        }
    });



