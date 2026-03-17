import { useParams, Link } from "react-router";
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
        title: "AI Prompt Evaluation Pipeline",
        description: "CLI tool to systematically test prompts against sets of user input.",
        githubUrl: "https://github.com/MattRueter/ai-prompt-evaluation",
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
        description: "Creates exercises and feedback from student foreign language writing tasks.",
        githubUrl: "",
        liveUrl: "",
        overviewSlides: [
            "/slides/zest/overview/slide1.svg",
            "/slides/zest/overview/slide2.svg",
            "/slides/zest/overview/slide3.svg",
            "/slides/zest/overview/slide4.svg",
            "/slides/zest/overview/slide5.svg",
        ],
        featureDecks: [],
    },
    "idiom": {
        title: "Idiom",
        description: "Foreign language self study suite.",
        githubUrl: "",
        liveUrl: "https://demo.idiomlanguages.com/",
        overviewSlides: [
            "/slides/idiom/overview/slide1.svg",
            "/slides/idiom/overview/slide2.svg",
            "/slides/idiom/overview/slide3.svg",
            "/slides/idiom/overview/slide4.svg",
            "/slides/idiom/overview/slide5.svg",
        ],
        featureDecks: [],
    },
    "palabrisa": {
        title: "Palabrisa",
        description: "A language processing API which returns language learning exercises and analysis from words and texts.",
        githubUrl: "",
        liveUrl: "",
        overviewSlides: [            
            "/slides/palabrisa/overview/slide1.svg",
            "/slides/palabrisa/overview/slide2.svg",
            "/slides/palabrisa/overview/slide3.svg",
            "/slides/palabrisa/overview/slide4.svg",
            "/slides/palabrisa/overview/slide5.svg",],
        featureDecks: [],
    },
    "plug": {
        title: "Plug",
        description: "A collection of simple APIs for student's of frontend development to play with.",
        githubUrl: "https://github.com/Plug-org",
        liveUrl: "https://plug.parlanchin.com/",
        overviewSlides: [
            "/slides/plug/overview/slide1.svg",
            "/slides/plug/overview/slide2.svg",
            "/slides/plug/overview/slide3.svg",
            "/slides/plug/overview/slide4.svg",
            "/slides/plug/overview/slide5.svg",
        ],
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
                <Link to="/">go back</Link>
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
