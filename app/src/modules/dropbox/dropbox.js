// Libraries
import $ from 'jquery';

// Templates
import dropboxTemplate from './dropbox-template';

// Styles
import './dropbox.scss';
import './element.scss';

// Assets
/* eslint-disable no-unused-vars */
import img from './assets/img.jpg';
import audio from './assets/audio.mp3';
import video from './assets/video.mp4';
/* eslint-enable no-unused-vars */

// HTML Custom element implementation ( create custom element with dropbox template )
class DropboxTemplate extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = dropboxTemplate;
    }
}

customElements.define('dropbox-template', DropboxTemplate);
// Insert the element into the markup
document.querySelector('.wrapper').appendChild(new DropboxTemplate());

// Main Class

/**
 * The main class of Dropbox element
 *
 * @class Dropbox
 */
class Dropbox {
    constructor() {
        // All elements, which take a part in this module
        this.config = {
            $button: $('.dropbox__btn'),
            $inputContainer: $('.dropbox__input-container'),
            $inputEl: $('.dropbox__input'),
            $closeBtn: $('.dropbox__input-close'),
            $itemsList: $('.dropbox__list')
        };

        // Info about states of this module
        this.state = {
            opened: false,
            wasOpened: false,
            listHeight: 0,
            constantList: []
        };
    }

    /**
     * This method is the main, and it should be called immediately after instantiation
     * In it will handle all events
     * Get started height of list to correct animation of list
     *
     * @method init
     */
    init() {
        this.config.$itemsList.children().each((idx, item) => {
            this.state.constantList.push(item);
        });

        this.config.$button.click(() => {
            this.openDropbox();
        });

        this.config.$closeBtn.click(() => {
            this.closeDropbox();
        });

        this.config.$inputEl.on('input', event => {
            this.filterItems(event);
        });
    }

    /**
     * Check if dropbox is opened, if it false - add class and open dropbox
     *
     * @method openDropbox
     */
    openDropbox() {
        const { $inputContainer } = this.config;
        const { $itemsList } = this.config;

        if (!this.state.wasOpened) {
            $itemsList.children().each((idx, el) => {
                $(el).children()[0].style.width = '100%';
            });

            this.state.wasOpened = true;
        }

        if (!this.state.opened) {
            $inputContainer.addClass('dropbox__input-container--active');
            $itemsList.addClass('dropbox__list--active');
            this.state.opened = true;
        }
    }

    /**
     * Check if dropbox is opened, if it true - remove class and close dropbox
     *
     * @method closeDropbox
     */
    closeDropbox() {
        const { $inputContainer } = this.config;
        const { $itemsList } = this.config;

        if (this.state.opened) {
            $inputContainer.removeClass('dropbox__input-container--active');
            $itemsList.removeClass('dropbox__list--active');
            this.state.opened = false;
        }
    }

    /**
     * This method filtered list items by first letters and delegate items adding
     * functionality in renderItems method
     *
     * @method filterItems
     * @param {Object} event Standart event object
     */
    filterItems(event) {
        const inputVal = event.target.value;
        const { constantList } = this.state;
        const inputLength = inputVal.length;
        let finalItemsArr = [];

        finalItemsArr = constantList.filter(el => {
            const dataVal = el.dataset.meta;
            const letters = dataVal
                .split('')
                .splice(0, inputLength)
                .join('');
            if (letters === inputVal) {
                return true;
            }

            if (dataVal === 'text') {
                const childText = $(el).children()[0].innerText;
                const childLetters = childText
                    .split('')
                    .splice(0, inputLength)
                    .join('');
                if (inputVal === childLetters.trim().toLowerCase()) {
                    return true;
                }
            }
            return false;
        });

        this.renderItems(finalItemsArr);
    }

    /**
     * This method accept array of li elements ( list items ) and add them to list
     *
     * @method renderItems
     * @param {Array} itemsArr Array of items, which need to show in list
     */
    renderItems(itemsArr) {
        this.config.$itemsList.children().each((idx, el) => {
            $(el).remove();
        });
        itemsArr.forEach(el => {
            this.config.$itemsList.append(el);
        });
    }
}

export default Dropbox;
