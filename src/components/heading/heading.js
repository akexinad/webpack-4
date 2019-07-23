import './heading.scss';

export default class Heading {
    render() {
        const h1 = document.createElement('h1');
        const body = document.querySelector('body');

        h1.innerHTML = 'This is webpack!!!';

        body.appendChild(h1);
    }
}