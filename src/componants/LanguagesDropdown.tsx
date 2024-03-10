import { Dispatch, SetStateAction } from "react"

type selectedLanguageType = { id: number, name: string, mode: string }

type LanguagesDropdownType = {
    languages: selectedLanguageType[],
    selectedLanguage: selectedLanguageType,
    setSelectedLanguage: Dispatch<SetStateAction<{ id: number; name: string; mode: string; }>>,
    setIsLanguageBoxOpen: Dispatch<SetStateAction<boolean>>
}

const LanguagesDropdown = ({ languages, selectedLanguage, setSelectedLanguage, setIsLanguageBoxOpen }: LanguagesDropdownType) => {
    return (
        <div
            className='bg-[#323232] absolute top-[66px] left-1 h-[150px] z-10 pt-2 rounded-md border-[1px] border-[#3c3c3c] flex flex-col flex-wrap max-[760px]:h-[250px] '
        >
            {languages.map((language) => (
                <div
                    key={language.id}
                    className={`hover:bg-[#3c3c3c] px-3 py-1 cursor-pointer min-w-[100px] rounded-lg ${selectedLanguage.mode === language.mode ? 'bg-[#206931]' : ''}`}
                    onClick={() => {
                        setSelectedLanguage(language)
                        setIsLanguageBoxOpen(false)
                    }}
                >
                    <span className='text-white'>{language.name}</span>
                </div>
            ))}
        </div>
    )
}

export default LanguagesDropdown
