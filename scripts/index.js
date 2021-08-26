// Profile

const profileAvatar = document.querySelector('.profile__avatar').src;
const profileName = document.querySelector('.profile__name').textContent;

// Posting form

const postingFormElement = document.querySelector('.posting__form');
const postingTextElement = document.querySelector('.form__field_type_text');

// Posts

const initialPosts = [
    {
        avatar: './images/avatar3.jpg',
        name: 'Антонина Барбидокская',
        text: 'Приветствую всех вас!',
        time: new Date('2021-08-26T19:30:00')
    },
    {
        avatar: './images/avatar2.jpg',
        name: 'Гавриил Подвыподвертов',
        text: 'Добро пожаловать на лайвкодинг!',
        time: new Date('2021-08-26T20:00:00')
    }
];
const postsElement = document.querySelector('.posts');
const postTemplate = document.querySelector('#post-template').content;

// Functions

const addPost = (post) => {
    const postElement = postTemplate.querySelector('.post').cloneNode(true);
    postElement.querySelector('.author__avatar').src = post.avatar;
    postElement.querySelector('.author__avatar').alt = 'Avatar';
    postElement.querySelector('.author__name').textContent = post.name;
    postElement.querySelector('.post__text').textContent = post.text;
    postElement.querySelector('.post__time').textContent = formatDate(post.time);

    postsElement.prepend(postElement);
};

const postingFormHandler = (event) => {
    event.preventDefault();

    addPost({
        avatar: profileAvatar,
        name: profileName,
        text: postingTextElement.value,
        time: new Date()
    });

    postingFormElement.reset();
};

const formatDate = (date) => {
    const day = date.getDate();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    return `${day}.${month}.${year} ${hours}:${minutes}`;
};

// Event listeners

postingFormElement.addEventListener('submit', postingFormHandler);

initialPosts.forEach((post) => {
    addPost(post);
});
