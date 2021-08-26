const byInsertAdjacentHTML = (data) => {
    const html =
        `<div class="post">
          <div class="author post__author">
            <div class="author__avatar" style="background-image: url('${data.avatar}')"></div>
            <h3 class="author__name">${data.name}</h3>
            <button type="button" class="author__button-remove">&times;</button>
          </div>
          <p class="post__text">${data.text}</p>
          <p class="post__time">${formatDate(data.time)}</p>
        </div>`;
    postsElement.insertAdjacentHTML('afterbegin', html);
};

const byCreateElement = (data) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const authorElement = document.createElement('div');
    authorElement.classList.add('author');
    authorElement.classList.add('post__author');
    postElement.append(authorElement);

    const avatarElement = document.createElement('div');
    avatarElement.classList.add('author__avatar');
    avatarElement.style.backgroundImage = `url('${data.avatar}')`;
    authorElement.append(avatarElement);

    const nameElement = document.createElement('h3');
    nameElement.classList.add('author__name');
    nameElement.textContent = data.name;
    authorElement.append(nameElement);

    const removeElement = document.createElement('button');
    removeElement.classList.add('author__button-remove');
    removeElement.type = 'button';
    removeElement.innerHTML = '&times;';
    authorElement.append(removeElement);

    const textElement = document.createElement('p');
    textElement.classList.add('post__text');
    textElement.textContent = data.text;
    postElement.append(textElement);

    const timeElement = document.createElement('p');
    timeElement.classList.add('post__time');
    timeElement.textContent = formatDate(data.time);
    postElement.append(timeElement);

    postsElement.prepend(postElement);
};

const byTemplate = (data) => {
    const postTemplate = document.querySelector('#post-template').content;

    const postElement = postTemplate.querySelector('.post').cloneNode(true);
    postElement.querySelector('.author__avatar').style.backgroundImage = `url('${data.avatar}')`;
    postElement.querySelector('.author__name').textContent = data.name;
    postElement.querySelector('.post__text').textContent = data.text;
    postElement.querySelector('.post__time').textContent = formatDate(data.time);

    postsElement.prepend(postElement);
};
