const requestURL = 'data/threeTemples.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const temples = jsonObject['temples'];

        for (let i = 0; i < temples.length; i++) {

            // Create Elements
            let card = document.createElement('div');
            let columnOne = document.createElement('div');
            let columnTwo = document.createElement('div');
            let name = document.createElement('h3');
            let address = document.createElement('div');
            let addressLineOne = document.createElement('p');
            let addressLineTwo = document.createElement('p');
            let phone = document.createElement('p');
            let email = document.createElement('p');
            let emailLink = document.createElement('a');
            let schedule = document.createElement('div');
            let openClose = document.createElement('p');
            let sessionSchedule = document.createElement('div');
            let sessionTitle = document.createElement('h4');
            let closureSchedule = document.createElement('div');
            let closureTitle = document.createElement('h4');
            let picture = document.createElement('picture');
            let image = document.createElement('img');
            let description = document.createElement('p');

            // Add Content
            name.textContent = temples[i].name;
            addressLineOne.textContent = temples[i].address;
            addressLineTwo.textContent = temples[i].city + " " + temples[i].state + ", " + temples[i].zip;
            phone.textContent = temples[i].phone;
            emailLink.textContent = temples[i].email;
            emailLink.setAttribute('href', "mailto:" + temples[i].email);
            openClose.textContent = temples[i].timeIn + " - " + temples[i].timeOut;
            sessionTitle.textContent = "Sessions";
            closureTitle.textContent = "Closures";
            image.setAttribute('src', temples[i].photoLocation);
            image.setAttribute('alt', temples[i].name);
            description.textContent = temples[i].summary;


            // Assign Classes
            card.className = "col-2";
            columnOne.className = "col";
            columnTwo.className = "col";
            address.className = "address";
            phone.className = "phone";
            email.className = "email";
            openClose.className = "openClose";
            sessionSchedule.className = "sessionSchedule";
            closureSchedule.className = "closureSchedule";

            // Simple Child Element Creation
            email.appendChild(emailLink);
            address.appendChild(addressLineOne);
            address.appendChild(addressLineTwo);
            schedule.appendChild(openClose);
            picture.appendChild(image);

            // Complex Child Element Creation
            schedule.appendChild(sessionTitle);
            for (let j = 0; j < temples[i].sessionSchedule.length; j++) {
                let session = document.createElement('p');
                session.textContent = temples[i].sessionSchedule[j];
                sessionSchedule.appendChild(session);
            }
            schedule.appendChild(sessionSchedule); // Sessions
            schedule.appendChild(closureTitle);
            for (let x = 0; x < temples[i].closureDates.length; x++) {
                let closure = document.createElement('p');
                closure.textContent = temples[i].closureDates[x];
                closureSchedule.appendChild(closure);
            }
            schedule.appendChild(closureSchedule); // Closures

            // Add to First Column
            columnOne.appendChild(name);
            columnOne.appendChild(address);
            columnOne.appendChild(phone);
            columnOne.appendChild(email);
            columnOne.appendChild(schedule);

            // Add to Second Column
            columnTwo.appendChild(picture);
            columnTwo.appendChild(description);

            // Add to Main Container
            card.appendChild(columnOne);
            card.appendChild(columnTwo);

            document.querySelector('div#temples').appendChild(card);
        }
    });



