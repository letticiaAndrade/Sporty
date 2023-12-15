import {
    Text,
    Stack,
    Button,
    Flex,
    VStack,
    Avatar,
    AvatarBadge,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { CaretDown, X } from "@phosphor-icons/react";

export function Header() {
    const navigate = useNavigate();
    // const { session } = useCache();

    /*     const handleLogout = () => {
          setCache("session", null);
          navigation("/signin");
        } */
        const onLogout = () => {
            alert("saiu e limpou cache")
            navigate("/")
        }

    return (
        <>
         <Flex flexDirection="column" flex={1} bgColor="primary.400" >
                    <Text fontSize={28} textAlign="center" fontWeight="bold" color="white">SPORTY</Text>
                    <Stack flex={1} justifyContent="center">
                        <VStack>
                            <Avatar name="Leticia Matos">
                                <AvatarBadge boxSize='1.25em' bg='green.500' />
                            </Avatar>
                            <Text>Leticia Matos</Text>
                            <Button onClick={() => onLogout()} variant="outline" colorScheme="primary" color="primary.400">
                                SAIR
                            </Button>
                        </VStack>
                    </Stack>

                </Flex>
        </>
    );
}