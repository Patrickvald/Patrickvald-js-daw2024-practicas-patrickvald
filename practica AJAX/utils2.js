const BASE_URL = 'https://reqres.in/api/users/';
const POSTMAN_URL = 'https://httpbin.org/post';

window.addEventListener('load', (ev) => {
  let numsecs = document.getElementById('numsecs');
  let user = document.getElementById('user');
  let boton = document.querySelector('button');

  boton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
  });
}

async function procesarFetch(numsecs, user) {
  try {
    const response = await fetch(`${BASE_URL}${user}?delay=${numsecs}`/* , { method: 'GET'}  El get es el default*/);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    const userData = data.data;

    document.getElementById('id').innerHTML = userData.id;
    document.getElementById('email').innerHTML = userData.email;

    // Now we do the POST
    const postResponse = await fetch(POSTMAN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const postData = await postResponse.json();
    const createdUser = postData.json;

    document.getElementById('name').innerHTML = createdUser.first_name;
    document.getElementById('picture').src = createdUser.avatar;
    document.getElementById('status').innerHTML = '200';
  } catch (error) {
    console.log('The user was not found, try again with a valid user');
    document.getElementById('status').innerHTML = error.message;
  }
}
