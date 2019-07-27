import SpaceTraveller from './space_traveller.jpg';
import './watch-image.scss';

export default class WatchImage {

    render() {
        
        const img = document.createElement('img');
        img.alt = 'Space Traveller Watch';
        img.width = 500;
        img.src = SpaceTraveller;
        img.classList.add('watch-image');

        const body = document.querySelector('body');
        body.appendChild(img);
    }
}