document.getElementById('github-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('search').value;

    fetch(`https://api.github.com/search/users?q=${username}`, {
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }
    })
    .then(response => response.json())
    .then(data => {
       
        displayUserResults(data.items);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function displayUserResults(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const userItem = document.createElement('li');
        userItem.innerHTML = `
            <img src="${user.avatar_url}" alt="${user.login}" style="width: 50px; height: 50px;">
            <p>Username: ${user.login}</p>
            <a href="${user.html_url}" target="_blank">Profile</a>
        `;
        userList.appendChild(userItem);
    });
}
