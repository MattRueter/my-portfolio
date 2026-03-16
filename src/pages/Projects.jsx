import { useParams } from "react-router";
import SlideDeck from "../components/SlideDeck";
import '../styles/slideDecks.scss'
import "../styles/projects.scss";

/**
 * Slide path convention:
 * - Overview deck (single per project): /slides/<projectSlug>/overview/<index>.svg
 * - Feature decks (0–N per project): /slides/<projectSlug>/features/<featureId>/<index>.svg
 */

const projectData = {
    "prompt-evaluation": {
        title: "AI Prompt Evaluation",
        description: "Evaluate and iterate on AI prompts with structured workflows and clear feedback.",
        githubUrl: "",
        liveUrl: "",
        overviewSlides: [
            "/slides/prompt-evaluation/overview/slide1.svg",
            "/slides/prompt-evaluation/overview/slide2.svg",
            "/slides/prompt-evaluation/overview/slide3.svg",
            "/slides/prompt-evaluation/overview/slide4.svg",
            "/slides/prompt-evaluation/overview/slide5.svg",
        ],
        featureDecks: [
            // {
            //     id: "prompt-tuning",
            //     title: "Prompt Tuning Flow",
            //     slides: ["/slides/prompt-evaluation/features/prompt-tuning/1.svg"],
            // },
        ],
    },
    "zest": {
        title: "Zest",
        description: "A product that brings energy and clarity to daily workflows.",
        githubUrl: "",
        liveUrl: "",
        overviewSlides: [],
        featureDecks: [],
    },
    "idiom": {
        title: "Idiom",
        description: "Language-learning tooling focused on real-world idiomatic usage.",
        githubUrl: "",
        liveUrl: "",
        overviewSlides: [],
        featureDecks: [],
    },
    "palabrisa": {
        title: "Palabrisa",
        description: "Experimental Spanish-learning experiences blending interaction and storytelling.",
        githubUrl: "",
        liveUrl: "",
        overviewSlides: [],
        featureDecks: [],
    },
    "plug": {
        title: "Plug",
        description: "A small utility project exploring integrations and automation.",
        githubUrl: "",
        liveUrl: "",
        overviewSlides: [],
        featureDecks: [],
    },
};


export default function Projects() {
    const params = useParams();
    const project = projectData[params.project];

    if (!project) {
        return (
            <div className="projectPage">
                <h1>Project not found</h1>
                <p>The requested project does not exist.</p>
            </div>
        );
    }

    return (
        <div className="projectPage">
            <header className="projectPage__header">
                <h1 className="projectPage__title">{project.title}</h1>
                {project.description && (
                    <p className="projectPage__description">{project.description}</p>
                )}
                {(project.githubUrl || project.liveUrl) && (
                    <div className="projectPage__links">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="projectPage__link"
                            >
                                View on GitHub
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="projectPage__link"
                            >
                                View live site
                            </a>
                        )}
                    </div>
                )}
            </header>

            {project.overviewSlides && project.overviewSlides.length > 0 && (
                <section className="projectPage__section projectPage__section--overview">
                    <h2 className="projectPage__sectionTitle">Overview</h2>                            
                        <SlideDeck
                            slides={project.overviewSlides}
                            variant="overview"
                            altPrefix={`${project.title} overview`}
                        />                
                </section>
            )}

            {project.featureDecks && project.featureDecks.length > 0 && (
                <section className="projectPage__section projectPage__section--features">
                    <h2 className="projectPage__sectionTitle">Features</h2>
                    <div className="projectPage__featureDecks">
                        {project.featureDecks.map((deck) => (
                            <article
                                key={deck.id}
                                className="projectPage__featureDeck"
                            >
                                {deck.title && (
                                    <h3 className="projectPage__featureTitle">
                                        {deck.title}
                                    </h3>
                                )}
                                <SlideDeck
                                    slides={deck.slides}
                                    variant="feature"
                                    altPrefix={`${project.title} ${deck.title || "feature"}`}
                                />
                            </article>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};
