import * as React from 'react'
import Editor from '@monaco-editor/react'
import { Box } from "@chakra-ui/react"

function CodeEditorBox() {
    return (
        <>
            <Box minH="100%" bg="#0f0a19" color="gray.500" px={6} py={8}>
                <Editor 
                    height="75vh"
                    defaultLanguage="javascript"
                    defaultValue="type code here..."
                />
            </Box>
        </>
    )
}

export default CodeEditorBox