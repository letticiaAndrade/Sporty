import { useNavigate } from "react-router-dom";
import { Avatar, AvatarBadge, Button, Flex, Stack, Text, VStack } from "@chakra-ui/react";

export function Home() {
    const navigate = useNavigate();

    const onLogout = () => {
        alert("saiu e limpou cache")
        navigate("/")
    }

    return (
        <Flex w="full" h="100vh">
            <Flex flexDirection="column" flex={1} bgColor="light.400" >
                <Text fontSize={28} textAlign="center" fontWeight="bold" color="primary.400">SPORTY</Text>
                <Stack flex={1} justifyContent="center">

                    <Button color="light.400" bgColor="transparent">
                        Todos os torneios
                    </Button>
                    <Button >
                        Todos os torneios
                    </Button>
                    <Button >
                        Todos os torneios
                    </Button>
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
            <Flex flex={4} bgColor="primary.400">

            </Flex>
        </Flex>
    )
}