//We select the elements we want to work with
const userContainer = document.getElementById("userContainer");
const refreshButton = document.getElementById("refreshButton");

//We use the fetch API to make a request to the API
async function fetchRandomUser() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();

        const user = data.results[0];
        const userHTML = `
            <img src="${user.picture.large}" alt="User Photo">
            <h2>${user.name.first} ${user.name.last}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.location.street.name}, ${user.location.city}, ${user.location.state}</p>
        `;
        userContainer.innerHTML = userHTML;
    } catch (error) {
        userContainer.innerHTML = "<p>Error fetching user data. Please try again later.</p>";
        console.error("Error:", error);
    }
}

//Event listener to call the function when the button is clicked
refreshButton.addEventListener("click", fetchRandomUser);

//Function call to display a random user when the page loads
fetchRandomUser();
