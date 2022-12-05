// Add your code here




function submitData (userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
        },
         body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`,
        }),
    })

    // .then(resp => resp.json())
    // .then(data => {
    //     let line = document.createElement('li')
    //     line.textContent = data.id
    //     document.body.append(line)
    // })

    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let line = document.createElement('li')
        line.textContent = data.id
        document.body.append(line)
    })
    .catch(error => {
        let mistake = document.createElement('li')
        mistake.textContent = error.message
        document.body.append(mistake)
    })
}