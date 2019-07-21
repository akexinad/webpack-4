import './hello-button.css';

export default class HelloButton {

    render() {

        const btn = document.createElement('button');
        btn.innerHTML = 'Hello';
        btn.classList.add('hello-btn');
        btn.onclick = () => {

            const para = document.createElement('p');
            para.innerHTML = 'Button was clicked!';
            para.classList.add('hello-text');
            body.appendChild(para);
        };
        
        const body = document.querySelector('body');
        body.appendChild(btn);
    }   
}