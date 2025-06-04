import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import { Languages } from "../constants";

function LanguageSelector({ language, changeLanguage }) {
    const langs = Object.entries(Languages);
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="lg" mb={9}>
                    {language} 
                </Button>   
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                <Menu.Content>
                    {langs.map(([lang, ver]) => (
                       <Menu.Item key={lang} value={lang} onClick={() => changeLanguage(lang)}>
                        <Text fontWeight="semibold" textStyle="md">{lang}</Text>
                        <Text textStyle="xs">{ver}</Text>
                       </Menu.Item>
                    ))}
                </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default LanguageSelector;