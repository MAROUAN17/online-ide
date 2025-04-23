import * as React from 'react'
import Editor from '@monaco-editor/react'
import Box from '@mui/material/Box'

function CodeEditorBox() {
    return (
        <>
            <Box>
                <Editor 
                    height="90vh"
                    defaultLanguage="javascript"
                    defaultValue="type code here..."
                />
            </Box>
        </>
    )
}

export default CodeEditorBox