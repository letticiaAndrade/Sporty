import routes from "../service/api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header, TitlePage } from "../components";
import { CirclesFour, Trophy } from "@phosphor-icons/react";
import { Badge, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Center, HStack, Stack } from "@chakra-ui/react";

export function TournamentDetails() {
    const [categories, setCategories] = useState([]);
    let { tournament } = useLocation().state;

    useEffect(() => {
        if (!categories.length)
            routes.torneio.listAllCategoryById({ id: tournament?.id }).then((e) => setCategories(e))
    }, [categories, setCategories]);

    console.log(categories)

    return (
        <Flex w="full" h="100vh">
            <Header />

            <Flex flexDir="column" px={2} pb={8} flex={9} bgColor="light.100">
                <TitlePage title="Detalhes do Torneio" Icon={Trophy} />
                <Stack direction="column" flexWrap="wrap" mt={8} spacing={3}>

                    <Box my={10} color="dark.500" shadow="md" bg="light.50" p={2} rounded="md">
                        <Box h={.5} bg="light.200" my={3} rounded="full" />
                        <HStack>
                            <CirclesFour size={40} />
                            <Heading size="lg">Categorias</Heading>
                        </HStack>
                        {categories?.length
                            ? categories.map(categorie => (
                                <>
                                    <Stack px={4} pb={2}>
                                        <Stack key={categorie?.id} borderWidth={1} rounded="md" shadow="md" bgColor="light.100" p={2} my={1}>
                                            <HStack flexWrap="wrap">
                                                <Badge rounded="md" px={2} colorScheme="primary">
                                                    {categorie?.nomeCat}
                                                </Badge>
                                            </HStack>

                                            <Box h="1px" bgColor="light.200" />

                                            <Heading size="md">Identificador: {categorie?.id}</Heading>
                                            <HStack>
                                                <Text>Categoria {categorie?.nomeCat}</Text>
                                            </HStack>
                                        </Stack>
                                    </Stack>
                                </>
                            )
                            ) : (
                                <Center flexDir="column" w="full">
                                    <Heading fontSize={24}>Nada aqui</Heading>
                                </Center>
                            )}

                    </Box >
                </Stack >
            </Flex>
        </Flex>
    )
}