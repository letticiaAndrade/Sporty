import routes from "../service/api";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Header, TitlePage, InscriptionCard } from "../components";
import { CheckCircle, Plus, IdentificationCard } from "@phosphor-icons/react";
import { Button, Center, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react";
// import { useCache } from "../hooks";

export function Inscriptions() {
    const [inscriptions, setInscriptions] = useState([]);
    // const { categories, setCache } = useCache();
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
                setInscriptions([]);
                onCloseCreate();
            })
    }

    useEffect(() => {
        if (!inscriptions.length)
            routes.inscriptions.list().then((e) => setInscriptions(e))
    }, [inscriptions, setInscriptions]);

    console.log(inscriptions)

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
                                {/* <Image src={nothing} w="80" mb={8} /> */}
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
                                        <Input
                                            bg="#FFF" placeholder="Identificador da categoria "
                                            focusBorderColor="primary.400"
                                            {...register("categoriaId", { required: "Identificador da categoria é obrigatório." })}
                                        />
                                        <FormErrorMessage>{errors?.categoriaId?.message}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isRequired isInvalid={errors?.userId1}>
                                        <FormLabel color="dark.100">Primeiro Participante</FormLabel>
                                        <Input
                                            bg="#FFF" placeholder="Identificador do participante"
                                            focusBorderColor="primary.400"
                                            {...register("userId1", { required: "Identificador do participante é obrigatório." })}
                                        />
                                        <FormErrorMessage>{errors?.userId1?.message}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isRequired isInvalid={errors?.userId2}>
                                        <FormLabel color="dark.100">Segundo Participante</FormLabel>
                                        <Input
                                            bg="#FFF" placeholder="Identificador do participante"
                                            focusBorderColor="primary.400"
                                            {...register("userId2", { required: "Identificador do participante é obrigatório." })}
                                        />
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