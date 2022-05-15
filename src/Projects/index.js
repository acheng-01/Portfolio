import React from 'react';
import STORE from '../store';
import './Projects.css';

function Projects() {
    const renderTechnologies = (tech) => {
        return tech.map((technology, index) => {
            return (
                <li key={index}>{technology}</li>
            );
        });
    }

    const renderContent = () => {
        return STORE.map(({ project_name, short_description, image, github_repo_link, live_demo_link, technologies }) => {
            return (
                <div key={project_name} className="project-card">
                    <h3>{project_name}</h3>
                    <h4>{short_description}</h4>
                    <div className={'demo ' + image} />
                    <div className="project-links">
                        <a href={live_demo_link}>
                            <button className="live-link">
                                Live App
                            </button>
                        </a>
                        <a href={github_repo_link}>
                            <button className="github-link">
                                Github Repo
                            </button>
                        </a>
                    </div>
                    <ul className="tech-container">
                        {renderTechnologies(technologies)}
                    </ul>
                </div>
            )
        })
    }

    return (
        <section className="project-section" id="projects">
            <div className="inner-project-container">
                <h2>Projects</h2>
                <h5>Hover for gif</h5>
                <div className="project-content-container">
                    {renderContent()}
                </div>
            </div>
        </section>
    )
}

export default Projects;