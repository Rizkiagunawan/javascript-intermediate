const elFormUsername = document.querySelector('#form-username');
const elCard = document.querySelector('.card');
const elCardImg = document.querySelector('.card-img-top');
const elCardBtn = document.querySelector('#card-btn');
const elCardTitle = document.querySelector('#card-title');

const getGitHubUser = async (username) => {
  try {
    if (!username) {
      return null;
    }
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if (data?.login) {
      return data;
    } else {
      return 'Not Found';
    }
  } catch (error) {
    console.log('error');
    return error;
  }
};

elFormUsername.onsubmit = async (e) => {
  e.preventDefault();
  let inputUsername = elFormUsername.firstElementChild.value;
  let data = await getGitHubUser(inputUsername);

  if (data.login) {
    elCardImg.classList.remove('d-none');
    elCardBtn.classList.remove('d-none');

    elCardTitle.innerText = data.login;
    elCardImg.src = data.avatar_url;
    elCardBtn.href = data.html_url;
  } else {
    elCardImg.classList.add('d-none');
    elCardBtn.classList.add('d-none');

    elCardTitle.innerText = data;
  }
  elCard.classList.remove('d-none');
};