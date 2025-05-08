import { useRef, useEffect, useState } from 'react';
import Editor from '@monaco-editor/react'
import { Box, HStack, Text } from "@chakra-ui/react"
import LanguageSelector from "./LanguageSelector.jsx"
import OutputBox from './OutputBox.jsx';

function CodeEditorBox() {
    const editoRef = useRef();
    const [selectedLang, setSelectedLang] = useState("Javascript");
    const [content, setContent] = useState("");
    function changeLanguage(language) {
        setSelectedLang(language);
    }
    function handleChange(newContent) {
        setContent(newContent);
    }
    return (
        <Box>
            <HStack spacing={4}>
                <Box w="50%">
                    <LanguageSelector language={selectedLang} changeLanguage={changeLanguage} />
                    <Box minH="100%" bg="#0f0a19" color="gray.500" px={6} py={8}>
                        <Editor
                            height="75vh"
                            width="50vh"
                            theme='vs-dark'
                            language={selectedLang}
                            defaultValue="start some code..."
                            onMount={(editor) => {
                                editoRef.current = editor;
                                editoRef.current.focus();
                            }}
                            value={content}
                            onChange={(content) => handleChange(content)}
                        />
                    </Box>
                </Box>
                <OutputBox />
            </HStack>
        </Box>
    )
}

export default CodeEditorBox