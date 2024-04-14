import { ProblemData } from "../../types/problem.types";



function CollapsableTopicProblem({topicName, problems}: {topicName: string, problems: ProblemData[]}) {
    return (
        <div className="collapse bg-stone-700 my-4 px-2">
            <input type="radio" name="my-accordion-1" /> 
            <div className="collapse-title text-xl font-medium flex justify-between">
                <div>
                    {topicName}
                </div>
                <div>
                    <progress className="progress w-56" value={Math.round(Math.random()*100)} max="100"></progress>
                </div>
            </div>
            <div className="collapse-content"> 
                {problems.map((problem: ProblemData) => <a className="block" key={problem.url} href={problem.url} target="_blank"> {problem.title} </a>)}
            </div>
        </div>
    )
}

export default CollapsableTopicProblem;