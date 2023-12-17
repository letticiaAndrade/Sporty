import routes from "../service/api";
import { useCache } from "../hooks";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Header, TitlePage, InscriptionCard } from "../components";
import { CheckCircle, Plus, IdentificationCard } from "@phosphor-icons/react";
import { Button, Center, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, useDisclosure } from "@chakra-ui/react";

export function Inscriptions() {
    const [users, setUsers] = useState([]),
        [categories, setCategories] = useState([]),
        [inscriptions, setInscriptions] = useState([])

    const { inscriptionsCache, categoriesCache, usersCache, setCache } = useCache();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            categoriaId: "",
            userId1: "",
            userId2: "",
        }
    });

    const { isOpen: isOpenCreate, onOpen: onOpenCreate, onClose: onCloseCreate } = useDisclosure();

    const onSubmit = data => {
        routes.inscriptions.create({ body: { ...data } })
            .then(() => {
                setCache("inscriptionsCache", [...inscriptions, { ...data }]);
                onCloseCreate();
            }).catch(() => console.log("Ocorreu um erro."))
    }

    useEffect(() => {
        // tentar obter categorias, usuarios e inscrições do cache
        const cachedUsers = usersCache['usersCache'];
        const cachedCategories = categoriesCache['categoriesCache'];
        const cacheInscriptions = inscriptionsCache['inscriptionsCache'];
        if (cacheInscriptions) {
            setInscriptions(cacheInscriptions);
        } else {
            // se não houver no cache, buscar do servidor
            routes.inscriptions.list().then((e) => {
                setInscriptions(e);
                // salvar no cache para uso futuro
                setCache('inscriptionsCache', e);
            })
        }
        if (cachedUsers) {
            setUsers(cachedUsers);
        } else {
            // se não houver no cache, buscar do servidor
            routes.users.list().then((e) => {
                setUsers(e);
                // salvar no cache para uso futuro
                setCache('usersCache', e);
            })
        }
        if (cachedCategories) {
            setCategories(cachedCategories);

        } else {
            // se não houver no cache, buscar do servidor
            routes.categories.list().then((e) => {
                setCategories(e);
                // salvar no cache para uso futuro
                setCache('categoriesCache', e);
            })
        }
    }, [categoriesCache, inscriptions, inscriptionsCache, setCache, usersCache]);

    return (
        <Flex w="full" h="100vh">
            <Header />

            <Flex flexDir="column" px={2} pb={8} flex={9} bgColor="light.100">

                <TitlePage title="Inscrições" Icon={IdentificationCard} />

                <Stack align="center" justify="flex-end" direction={{ base: "column", sm: "row" }} mb={8}>
                    <Button
                        size="md"
                        my={2} px={10}
                        colorScheme="primary"
                        onClick={onOpenCreate}
                        leftIcon={<Plus size={20} />}
                        w={{ base: "full", sm: "fit-content" }}
                    >
                        Nova Inscrição
                    </Button>
                </Stack>

                <Stack direction="row" flexWrap="wrap" mt={8} spacing={3}>
                    {inscriptions?.length
                        ? inscriptions.map(inscriptions =>
                            <InscriptionCard key={inscriptions?.id} inscription={inscriptions} />)
                        : (
                            <Center flexDir="column" w="full">
                                <Heading fontSize={24}>Nada aqui</Heading>
                            </Center>
                        )}
                </Stack>

                <Modal isOpen={isOpenCreate} onClose={onCloseCreate}>
                    <ModalOverlay />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalContent bg="light.100">
                            <ModalHeader>Nova Inscrição</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Stack spacing={3}>

                                    <FormControl isRequired isInvalid={errors?.categoriaId}>
                                        <FormLabel color="dark.100">Categoria</FormLabel>
                                        <Select
                                            bg="#FFF"
                                            placeholder="Selecione uma categoria"
                                            focusBorderColor="primary.400"
                                            {...register("categoriaId", { required: "Selecione uma categoria." })}
                                        >
                                            {categories?.map(categorie => <option key={categories?.id} value={categorie?.id}>{categorie?.nomeCat}</option>)}
                                        </Select>
                                        <FormErrorMessage>{errors?.categoriaId?.message}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isRequired isInvalid={errors?.userId1}>
                                        <FormLabel color="dark.100">Primeiro Participante</FormLabel>
                                        <Select
                                            bg="#FFF"
                                            placeholder="Selecione um participante"
                                            focusBorderColor="primary.400"
                                            {...register("userId1", { required: "Selecione um participante." })}
                                        >
                                            {users?.map(user => <option key={users?.id} value={user?.id}>{user?.nome}</option>)}
                                        </Select>
                                        <FormErrorMessage>{errors?.userId1?.message}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isRequired isInvalid={errors?.userId2}>
                                        <FormLabel color="dark.100">Segundo Participante</FormLabel>
                                        <Select
                                            bg="#FFF"
                                            placeholder="Selecione um participante"
                                            focusBorderColor="primary.400"
                                            {...register("userId2", { required: "Selecione um participante." })}
                                        >
                                            {users?.map(user => <option key={users?.id} value={user?.id}>{user?.nome}</option>)}
                                        </Select>
                                        <FormErrorMessage>{errors?.userId2?.message}</FormErrorMessage>
                                    </FormControl>
                                </Stack>
                            </ModalBody>

                            <ModalFooter>
                                <Button variant="ghost" colorScheme="error" mr={3} onClick={onCloseCreate}>
                                    Cancelar
                                </Button>
                                <Button type="submit" colorScheme="success" leftIcon={<CheckCircle size={20} />}>
                                    Cadastrar Inscrição
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </form>
                </Modal>
            </Flex>
        </Flex>
    )
}