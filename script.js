/*Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
Creare un carosello come nella foto allegata. [vi ripasso quella completa di thumbnails ma quelle rimangono Bonus]

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.*/

const images = [
    {
      image: '01.webp',
      title: "Marvel's Spiderman Miles Morale",
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
      image: '02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
      image: '03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.",
    },
    {
      image: '04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
      image: '05.webp',
      title: "Marvel's Avengers",
      text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
];

 // Seleziona l'elemento carousel dal DOM
 const carousel = document.getElementById('carousel');
 console.log(images);

 // Crea e aggiungi le slides al carousel
 images.forEach((image, index) => {
    carousel.appendChild(createSlide(image, index === 0)); // La prima slide è attiva inizialmente
});

function createSlide(image, isActive) {
    // Crea un'elemento div per la slide
    const slide = document.createElement('div');
    slide.classList.add('slide'); // Aggiungi la classe 'slide' alla slide

    // Crea un'immagine principale e imposta gli attributi
    const mainImage = document.createElement('img');
    mainImage.setAttribute('src', image.image);
    mainImage.setAttribute('alt', image.title);

    // Crea un elemento div per le informazioni testuali
    const imageInfo = document.createElement('div');
    imageInfo.innerHTML = `<h2>${image.title}</h2><p>${image.text}</p>`;

    // Aggiungi l'immagine principale e le informazioni alla slide
    slide.appendChild(mainImage);
    slide.appendChild(imageInfo);

    // Aggiungi la classe 'active' se la slide è la prima slide attiva
    if (isActive) {
        slide.classList.add('active');
    }

    return slide;
}


  