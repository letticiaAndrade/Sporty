import { Flex } from "@chakra-ui/react";
import { Header, UserModules } from "../components";

export function Home() {

    return (
        <>
            <Flex w="full" h="100vh">
                {/* <Flex flexDirection="column" flex={1} bgColor="primary.400" > */}
                <Header />
                {/*  <Text fontSize={28} textAlign="center" fontWeight="bold" color="white">SPORTY</Text>
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
                    </Stack> */}

                {/* </Flex> */}
                <Flex flex={9} bgColor="light.100">
                    <UserModules />
                </Flex>
            </Flex>
        </>
    )
}