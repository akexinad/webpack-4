import SpaceTraveller from './space_traveller.jpg';

export default function addImage() {
    const img = document.createElement('img');
    img.alt = 'Space Traveller Watch';
    img.width = 500;
    img.src = SpaceTraveller;

    const body = document.querySelector('body');
    body.appendChild(img);
}