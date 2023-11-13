import { Button, Flex, Stack, Text } from "@chakra-ui/react";

export function Home() {
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
                </Stack>
            </Flex>
            <Flex flex={4} bgColor="primary.400">

            </Flex>
        </Flex>
    )
}