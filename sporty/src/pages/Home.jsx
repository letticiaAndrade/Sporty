import { Flex } from "@chakra-ui/react";
import { Header, UserModules } from "../components";

export function Home() {

    return (
        <Flex w="full" h="100vh">
            <Header />
            <Flex flex={9} bgColor="light.100">
                <UserModules />
            </Flex>
        </Flex>
    )
}