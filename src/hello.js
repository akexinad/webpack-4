import HelloButton from './components/hello_button/helloButton.js';
import Heading from './components/heading/heading.js';

const heading = new Heading();
heading.render();

const helloButton = new HelloButton();
helloButton.render();

if ( process.env.NODE_ENV === 'production' ) {
    console.log('Production mode');
} else if ( process.env.NODE_ENV === 'developent' ) {
    console.log('Development mode');   
}
