import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './Bio.css';

function Bio() {
    return (
        <section className="bio-container" id="bio">
            <div className="about-me-header">
                <h2>About Me <FontAwesomeIcon icon={faUser} /></h2>
            </div>
            <div className="about-me-content">
                <div className="portrait-container">
                    <img src={process.env.PUBLIC_URL + "/images/portrait.jpg"} alt="me" />
                </div>
                <div className="bio-description">
                    
                    <p>
                        Hi! I'm Andrew. I was born and raised in the San Francisco
                        Bay Area and went to college at Cornell University. I am a Fullstack Developer.
                    </p>
                    <p>
                        Growing up, I found myself drawn to logic-based subjects such as math, physics,
                        and biology. Meanwhile, I also loved expressing myself artistically through
                        playing the violin and creating videos. These interests culminated in my pursuit of
                        software engineering as a career, where I can exercise the problem-solving
                        and creative parts of my mind.
                    </p>
                    <p>
                        Outside of working and studying, you can find me working out at the gym, playing
                        badminton, or going on the occasional photoshoot. I'm also looking for collaborative
                        opportunities with other developers, so if you'd like to get in touch please don't
                        hesitate to send me an email!
                    </p>
                </div>
            </div>
            <div className="contact">
                <a href="mailto: andrew41cheng@gmail.com">
                    Write me! <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </section>
    )
};

export default Bio;