import { useRef, useEffect, useState } from 'react';
import Editor from '@monaco-editor/react'
import { Box, HStack, Stack, VStack, Text } from "@chakra-ui/react"
import LanguageSelector from "./LanguageSelector.jsx"
import OutputBox from './OutputBox.jsx';

function CodeEditorBox() {
    const editorRef = useRef();
    const [selectedLang, setSelectedLang] = useState("javascript");
    const [content, setContent] = useState("");
    function changeLanguage(language) {
        setSelectedLang(language);
    }
    function handleChange(newContent) {
        setContent(newContent);
    }
    return (
        <Box p={8}>
            <HStack spacing={4}>
                <Box w="50%">
                    <LanguageSelector language={selectedLang} changeLanguage={changeLanguage} />
                    <Editor
                        height="75vh"
                        theme='vs-dark'
                        language={selectedLang}
                        defaultValue="start some code..."
                        onMount={(editor) => {
                            editorRef.current = editor;
                            editorRef.current.focus();
                        }}
                        value={content}
                        onChange={(content) => handleChange(content)}
                    />
                </Box>
                <OutputBox editorRef={editorRef} language={selectedLang}/>
            </HStack>
        </Box>
    )
}

export default CodeEditorBox