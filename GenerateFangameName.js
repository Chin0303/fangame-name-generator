function generateName() {
    fetch('frontnames.txt')
        .then(response => response.text())
        .then(surnames => {
            fetch('lastnames.txt')
                .then(response => response.text())
                .then(lastnames => {
                    const surnameArray = surnames.split('\n').filter(Boolean); 
                    const lastnameArray = lastnames.split('\n').filter(Boolean);

                    const randomSurname = surnameArray[Math.floor(Math.random() * surnameArray.length)];
                    const randomLastname = lastnameArray[Math.floor(Math.random() * lastnameArray.length)];

                    const generatedName = document.getElementById('generatedName');
                    generatedName.textContent = `${randomSurname} ${randomLastname}`;
                })
                .catch(error => console.error('Error reading lastname.txt:', error));
        })
        .catch(error => console.error('Error reading surname.txt:', error));
}