const KEY = '563492ad6f9170000100000127c1a2cf3daa40f29e851b26734e9b6d';
let number = Math.floor(Math.random() * 100) + 1;
console.log(number);
const random = `https://api.pexels.com/v1/curated?per_page=20&page=${number}`;

async function getPhotos(){
    await fetch(random, {
        Authorization: KEY,
        headers: {
            'Authorization': KEY,
        }
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data.photos);
        for (let i = 0; i < data.photos.length; i++) {
            const imgContainer = document.getElementById('imgContainer');
            const div = document.createElement('div');
            const img = document.createElement('img');
            const imgSrc = data.photos[i].src.large;

            imgContainer.appendChild(div);
            div.className = 'col col-12 col-md-6 col-lg-4';
            div.appendChild(img);
            img.className = 'w-100';
            img.src += imgSrc;
            // console.log(data.photos[i]);
        };
    });
};

async function userPhotos(){
    const query = document.getElementById('input').value;
    const URL = `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`;

    await fetch(URL, {
        Authorization: KEY,
        headers: {
            'Authorization': KEY,
        }
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data.photos);
        for (let i = 0; i < data.photos.length; i++) {
            const imgContainer = document.getElementById('imgContainer');
            const div = document.createElement('div');
            const img = document.createElement('img');
            const imgSrc = data.photos[i].src.medium;

            imgContainer.appendChild(div);
            div.className = 'col col-auto';
            div.appendChild(img);
            img.src += imgSrc;
            // console.log(data.photos[i]);
        };
    });
};
