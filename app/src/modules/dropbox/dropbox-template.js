const dropboxTemplate = `
<div class="dropbox">
<div class="dropbox__btn-container">
    <button class="dropbox__btn">Click to filter</button>
    <div class="dropbox__input-container">
        <input
            class="dropbox__input"
            type="text"
            placeholder="Write text"
        />
        <div class="dropbox__input-close"></div>
    </div>
</div>
<ul class="dropbox__list">
    <li class="dropbox__list-item" data-meta="audio">
        <audio controls>
            <source
                src="./assets/audio.mp3"
                type="audio/mpeg"
            />
        </audio>
    </li>
    <li class="dropbox__list-item" data-meta="image">
        <img src="./assets/img.jpg" alt="image" />
    </li>
    <li class="dropbox__list-item" data-meta="element">
        <div class="element">
            <div class="element__btn-container">
                <button class="element__btn element__btn--1">
                    Click me!
                </button>
                <button class="element__btn element__btn--2">
                    And me!
                </button>
            </div>
            <ul class="element__menu">
                <li class="element__menu-item">
                    <a href="#" class="element__menu-link">
                        Home
                    </a>
                </li>
                <li class="element__menu-item">
                    <a href="#" class="element__menu-link">
                        Contacts
                    </a>
                </li>
                <li class="element__menu-item">
                    <a href="#" class="element__menu-link">
                        About Us
                    </a>
                </li>
            </ul>
        </div>
    </li>
    <li class="dropbox__list-item" data-meta="video">
        <video controls="controls" poster="./assets/img.jpg">
            <source
                src="./assets/video.mp4"
                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
        </video>
    </li>
    <li class="dropbox__list-item" data-meta="text">
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quia dolorem voluptates nam. Voluptate eveniet
            modi quod et asperiores! At, eaque?</span>
    </li>
</ul>
`;

export default dropboxTemplate;
