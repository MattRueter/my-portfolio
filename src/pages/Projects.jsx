import { useParams } from "react-router";

const projectData = {
    "prompt-evaluation": {title:"AI Prompt Evaluation"},
    "zest": {title:"Zest"},
    "idiom": {title:"Idiom"},
    "palabrisa": {title:"Palabrisa"},
    "plug": {title:"Plug"},
}


export default function Projects() {
    let params = useParams();
    return(
        <div>
            <h1>{projectData[params.project].title}</h1>
            <p>a description</p> {/**from projectData object */}
            <p>link to github if public</p> {/**from projectData object */}
            <p>link to site if live</p> {/**from projectData object */}

            <p>overview slides</p>{/**from projectData object ? or checkout separate array of slides ? What Swiper.js needs */}

            <h2>Features</h2>

            <p>feature based presentations</p>
            {/**from projectData object ? or checkout separate array of slides ? What Swiper.js needs */}
        </div>
    )
};
