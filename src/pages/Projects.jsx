import { useParams } from "react-router";


export default function Projects() {
    let params = useParams();
    return(
        <div>
            <h1>I am the Projects page</h1>
            <p>{params.project}</p>
        </div>
    )
};
