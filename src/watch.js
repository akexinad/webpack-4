import _ from 'lodash';

import Heading from './components/heading/heading.js';
import WatchImage from './components/watch-image/watch-image.js';

const heading = new Heading();
heading.render( _.upperFirst('georges watches') );

const watchImage = new WatchImage();
watchImage.render();

