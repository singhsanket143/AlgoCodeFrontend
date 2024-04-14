import CollapsableTopicProblem from "./CollapsableTopicProblems";
import SampleProblemList from "../../constants/SampleProblemList";
import { ProblemData } from "../../types/problem.types";

type Topic = {
    topic: string;
    topicId: string;
    problems: ProblemData[];
}

function ProblemList() {

    return (
        <div className="flex justify-center items-center w-[100vw]">

            <div className="topic-list flex flex-col w-[60%]">
                    
                   {SampleProblemList.map((topic: Topic) => <CollapsableTopicProblem topicName={topic.topic} key={topic.topicId} problems={topic.problems}/>)}
            </div>


        </div>
    )
}

export default ProblemList;