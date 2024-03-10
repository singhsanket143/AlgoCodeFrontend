import { useState } from 'react'

import AceEditor from 'react-ace';

import { FaAngleDown } from "react-icons/fa";

import "ace-builds/src-noconflict/theme-monokai";
import 'ace-builds/src-noconflict/ace';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-typescript"
import "ace-builds/src-noconflict/mode-php"
import "ace-builds/src-noconflict/mode-swift"
import "ace-builds/src-noconflict/mode-kotlin"
import "ace-builds/src-noconflict/mode-dart"
import "ace-builds/src-noconflict/mode-golang"
import "ace-builds/src-noconflict/mode-ruby"
import "ace-builds/src-noconflict/mode-scala"
import "ace-builds/src-noconflict/mode-rust"
import "ace-builds/src-noconflict/ext-language_tools";
import LanguagesDropdown from './LanguagesDropdown';

type selectedLanguageType = { id: number, name: string, mode: string }

const NewAceEditor = () => {

    const languages: selectedLanguageType[] = [
        { id: 1, name: 'C++', mode: 'c_cpp' },
        { id: 2, name: 'Java', mode: 'java' },
        { id: 3, name: 'Python', mode: 'python' },
        { id: 4, name: 'JavaScript', mode: 'javascript' },
        { id: 5, name: 'TypeScript', mode: 'typescript' },
        { id: 6, name: 'PHP', mode: 'php' },
        { id: 7, name: 'Swift', mode: 'swift' },
        { id: 8, name: 'Kotlin', mode: 'kotlin' },
        { id: 9, name: 'Dart', mode: 'dart' },
        { id: 10, name: 'Golang', mode: 'golang' },
        { id: 11, name: 'Ruby', mode: 'ruby' },
        { id: 12, name: 'Scala', mode: 'scala' },
        { id: 13, name: 'Rust', mode: 'rust' },
    ]

    const defaultLanguage = languages[3]

    const [isLanguageBoxOpen, setIsLanguageBoxOpen] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage)

    return (
        <div className='m-2 relative'>
            <div className='h-16 flex flex-col bg-[#333333] rounded-lg'>
                <div className='h-[55%] text-white flex items-center pl-2'>
                    <span className='text-[#01b028] mr-1'>&lt;/&gt;</span> Code
                </div>
                <div className='bg-[#272822] h-[45%] border-b-[1px] border-[#3c3c3c] flex items-center'>
                    <div
                        className='hover:bg-[#3c3c3c] ml-1 px-2 rounded-md cursor-pointer flex items-center gap-1'
                        onClick={() => setIsLanguageBoxOpen(!isLanguageBoxOpen)}>
                        <span className=''>{selectedLanguage.name}</span>
                        <FaAngleDown size={15} style={{ marginTop: 2 }} />
                    </div>
                </div>
            </div>

            {isLanguageBoxOpen &&
                <LanguagesDropdown languages={languages} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} setIsLanguageBoxOpen={setIsLanguageBoxOpen} />
            }

            <AceEditor
                mode={selectedLanguage.mode}
                theme='monokai'
                name='codeEditor'
                className='editor'
                style={{ width: '100%' }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    showLineNumbers: true,
                    fontSize: 16
                }}
            />
        </div>
    )
}

export default NewAceEditor