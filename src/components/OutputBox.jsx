import { executeCode } from "../api.js";
import { Box, Text, Button } from "@chakra-ui/react";

function OutputBox({editorRef, language}) {
    const runCode = async () => {
        const code = editorRef.current.getValue()
        if (!code) return;
        try {
            const res = await executeCode(language, code);
        } catch(error) {
            console.log(error.message);
        }
    }
    return (
        <Box w="50%"> 
            <Text fontWeight="semibold" textStyle="lg">Output</Text>
            <Button 
                variant="outline"
                colorPalette="green"
                mb={2}
                onClick={runCode}
            >
                Run Code
            </Button>
            <Box
                height="75vh"
                p={2}
                border="1px solid"
                borderRadius={4}
                borderColor='#333'
            >
                test
            </Box>
        </Box>
    )
}

export default OutputBox;