/**
 * Styles
 */
import './index.scss';

/**
 * Libs
 */

/**
 * Custom Modules
 */
import Dropbox from './modules/dropbox/dropbox';

/**
 * Main code
 */

const newDropbox = new Dropbox();

// Init dropbox
newDropbox.init();
