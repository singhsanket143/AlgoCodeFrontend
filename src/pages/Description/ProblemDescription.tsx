
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';


import NewAceEditor from '../../componants/NewAceEditor';

function Description({ descriptionText }) {


    const sanitizedMarkdown = descriptionText;


    const [activeTab, setActiveTab] = useState('statement');
    const [leftWidth, setLeftWidth] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const startDragging = (e) => {
        setIsDragging(true);
        e.preventDefault();
    }

    const stopDragging = (e) => {
        if (isDragging) {
            setIsDragging(false);
        }
    }

    const onDrag = (e) => {
        if (!isDragging) return;

        const newLeftWidth = (e.clientX / window.innerWidth) * 100;
        if (newLeftWidth > 10 && newLeftWidth < 90) {
            setLeftWidth(newLeftWidth);
        }

    }



    return (
        <div
            className='flex w-screen h-screen'
            onMouseMove={onDrag}
            onMouseUp={stopDragging}
        >

            <div className='leftPanel h-full overflow-auto' style={{ width: `${leftWidth}%` }}>
                <div className='tabs'>

                    <button onClick={() => setActiveTab('statement')}>Problem Statement</button>
                    <button onClick={() => setActiveTab('editorial')}>Editorial</button>
                    <button onClick={() => setActiveTab('submissions')}>Submission</button>

                </div>

                <div className='markdownViewer p-[20px] basis-1/2'>
                    <ReactMarkdown>
                        {sanitizedMarkdown}
                    </ReactMarkdown>
                </div>


            </div>

            <div className='cursor-col-resize w-[5px] bg-slate-200 hover:bg-blue-600 h-full' onMouseDown={startDragging}></div>

            <div className='rightPanel h-full overflow-auto' style={{ width: `${100 - leftWidth}%` }}>
                <div className='editorContainer'>
                    <NewAceEditor>

                    </NewAceEditor>
                </div>
            </div>
        </div>
    )
}

export default Description;