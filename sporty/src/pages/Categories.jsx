import routes from "../service/api";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Header, TitlePage, CategorieCard } from "../components";
import { CheckCircle, Plus, CirclesFour } from "@phosphor-icons/react";
import { Button, Center, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react";
// import { useCache } from "../hooks";

export function Categories() {
    const [categories, setCategories] = useState([]);
    // const { categoriesCache, setCache } = useCache();


    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            categoriaNome: "",
            idTorneio: ""
        }
    });

    const { isOpen: isOpenCreate, onOpen: onOpenCreate, onClose: onCloseCreate } = useDisclosure();

    const onSubmit = data => {
        routes.categories.create({ body: { ...data } })
            .then(() => {
                setCategories([]);

                onCloseCreate();
                // setCache("categoriesCache", [...categories, {...data}]);
            })
            .catch(() => "Deu errado.")
    }

    useEffect(() => {
        if (!categories.length)
            routes.categories.list().then((e) => setCategories(e))
    }, [categories, setCategories]);

    console.log(categories)

    return (
        <Flex w="full" h="100vh">
            <Header />

            <Flex flexDir="column" px={2} pb={8} flex={9} bgColor="light.100">

                <TitlePage title="Categorias" Icon={CirclesFour} />

                <Stack align="center" justify="flex-end" direction={{ base: "column", sm: "row" }} mb={8}>
                    <Button
                        size="md"
                        my={2} px={10}
                        colorScheme="primary"
                        onClick={onOpenCreate}
                        leftIcon={<Plus size={20} />}
                        w={{ base: "full", sm: "fit-content" }}
                    >
                        Nova Categoria
                    </Button>
                </Stack>

                <Stack direction="row" flexWrap="wrap" mt={8} spacing={3}>
                    {categories?.length
                        ? categories.map(categories =>
                            <CategorieCard key={categories?.id} categorie={categories} />)
                        : (
                            <Center flexDir="column" w="full">
                                {/* <Image src={nothing} w="80" mb={8} /> */}
                                <Heading fontSize={24}>Nada aqui</Heading>
                            </Center>
                        )}
                </Stack>

                <Modal isOpen={isOpenCreate} onClose={onCloseCreate}>
                    <ModalOverlay />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalContent bg="light.100">
                            <ModalHeader>Nova Categoria</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Stack spacing={3}>
                                    <FormControl isRequired isInvalid={errors?.categoriaNome}>
                                        <FormLabel color="dark.100">Nome</FormLabel>
                                        <Input
                                            bg="#FFF" placeholder="Nome"
                                            focusBorderColor="primary.400"
                                            {...register("categoriaNome", { required: "Nome é obrigatório." })}
                                        />
                                        <FormErrorMessage>{errors?.categoriaNome?.message}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isRequired isInvalid={errors?.idTorneio}>
                                        <FormLabel color="dark.100">Identificador</FormLabel>
                                        <Input
                                            bg="#FFF" placeholder="Identificador do torneio"
                                            focusBorderColor="primary.400"
                                            {...register("idTorneio", { required: "Nome é obrigatório." })}
                                        />
                                        <FormErrorMessage>{errors?.idTorneio?.message}</FormErrorMessage>
                                    </FormControl>
                                </Stack>
                            </ModalBody>

                            <ModalFooter>
                                <Button variant="ghost" colorScheme="error" mr={3} onClick={onCloseCreate}>
                                    Cancelar
                                </Button>
                                <Button type="submit" colorScheme="success" leftIcon={<CheckCircle size={20} />}>
                                    Cadastrar Categoria
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </form>
                </Modal>
            </Flex>
        </Flex>
    )
}