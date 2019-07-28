import './hello-button.scss';

export default class HelloButton {

    btnCssClass = 'hello-btn';
    txtCssClass = 'hello-text';

    render() {

        const btn = document.createElement('button');
        btn.innerHTML = 'Hello';
        btn.classList.add(this.btnCssClass);
        btn.onclick = () => {

            const para = document.createElement('p');
            para.innerHTML = 'Button was clicked!';
            para.classList.add(this.txtCssClass);
            body.appendChild(para);
        };
        
        const body = document.querySelector('body');
        body.appendChild(btn);
    }   
}