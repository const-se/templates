// Profile

const profileAvatar = './images/avatar.jpg';
const profileName = 'Иннокентий Константинопольский';
const profileAvatarElement = document.querySelector('.profile__avatar');
const profileNameElement = document.querySelector('.profile__name');

// Posting form

const postingFormElement = document.querySelector('.posting__form');
const postingTextElement = document.querySelector('.form__field_type_text');

// Posts

const initialPosts = [
    {
        avatar: './images/avatar2.jpg',
        name: 'Гавриил Подвыподвертов',
        text: 'Добро пожаловать на лайвкодинг!',
        time: new Date('2021-08-26T20:00:00')
    },
    {
        avatar: './images/avatar3.jpg',
        name: 'Антонина Барбидокская',
        text: 'Приветствую всех вас!',
        time: new Date('2021-08-26T19:30:00')
    }
];
const postsElement = document.querySelector('.posts');

// Functions

function post(data) {
    console.log(data); // TODO
}

function postingFormHandler(event) {
    event.preventDefault();

    post({
        avatar: profileAvatar,
        name: profileName,
        text: postingTextElement.value,
        time: new Date()
    });

    postingTextElement.value = '';
}

function formatDate(date) {
    const day = date.getDate();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

// App

profileAvatarElement.style.backgroundImage = `url('${profileAvatar}')`;
profileNameElement.textContent = profileName;

postingFormElement.addEventListener('submit', postingFormHandler);
