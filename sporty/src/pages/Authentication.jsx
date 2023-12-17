import { useState } from "react";
import routes from "../service/api";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import Esporte from "../../public/assets/esporte.png";
import { Eye, EyeClosed, LockKey, SignIn } from "@phosphor-icons/react"
import { Button, Center, Flex, FormControl, FormErrorMessage, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";

export function Authetication() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: "",
      login: "",
      senha: "",
    },
  });

  const onSignUp = (data) => {
    routes.users.signUp({ body: { ...data } }).then(() => navigate("Home")).catch(() => alert("Deu errado o cadastro."))
  };

  const onSignIn = (data) => {
    routes.users.signIn({ body: { ...data } }).then(() => {
      navigate("Home")
    }).catch(() => alert("Deu errado o login."))
  };

  return (
    <>
      <Flex w="100%" h="100vh">

        <Center bgImage={Esporte} filter='auto' flexDirection="column" blur='1px' bgSize="cover" display={{ base: "none", lg: "flex" }} bgColor="primary.400" flex={1}>
          <Text fontSize={32} color="light.50" casing="uppercase">Sporty</Text>
        </Center>

        <Flex bgColor="light.100" flex={1} flexDir="column" justifyContent="center" padding={20}>
          <Text fontWeight="semibold" fontSize={28}>Bem - vindo de volta</Text>
          <Text fontSize={16} whiteSpace="pre-line">Se cadastre e gerencie seus torneios diretamente{"\n"} de dentro da plataforma.</Text>

          <Stack justifyContent="center" bgColor="light.200" padding={5} rounded={8} boxShadow="2xl" m={50} >
            <Tabs variant='enclosed' isFitted colorScheme="primary" >
              <TabList>
                <Tab>Sign up</Tab>
                <Tab>Sign in</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <form onSubmit={handleSubmit(onSignUp)}>
                    <Controller
                      name="nome"
                      control={control}
                      rules={{ required: "Nome obrigatório." }}
                      render={({ field }) => (

                        <FormControl isInvalid={errors?.nome}>
                          <Text color="dark.300">Nome</Text>
                          <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                              {/* <LockKey size={24} /> */}
                            </InputLeftElement>
                            <Input focusBorderColor="primary.400" variant="outline" type='text' placeholder='Leticia Matos' {...field} />
                          </InputGroup>
                          {errors?.nome && (
                            <FormErrorMessage ml={5}>
                              {errors?.nome?.message}
                            </FormErrorMessage>
                          )}
                        </FormControl>
                      )}
                    />

                    <Controller
                      name="login"
                      control={control}
                      rules={{ required: "Login obrigatório." }}
                      render={({ field }) => (
                        <FormControl isInvalid={errors?.login}>

                          <Text color="dark.300">Login</Text>
                          <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                              {/* <LockKey size={76} /> */}
                            </InputLeftElement>
                            <Input focusBorderColor="primary.400" type='text' placeholder='Ex: lele123' {...field} />
                          </InputGroup>

                          {errors.login && (
                            <FormErrorMessage ml={5}>
                              {errors?.login?.message}
                            </FormErrorMessage>
                          )}
                        </FormControl>
                      )}
                    />

                    <Controller
                      name="senha"
                      control={control}
                      rules={{ required: "Senha é obrigatória." }}
                      render={({ field }) => (
                        <FormControl isInvalid={errors.senha}>
                          <Text color="dark.300">Senha</Text>
                          <InputGroup>
                            <InputLeftElement color="primary.400" pointerEvents='none'>
                              <LockKey size={24} style={{ color: "primary.400" }} />
                            </InputLeftElement>
                            <Input focusBorderColor="primary.400" type={!show ? 'password' : "text"} placeholder='Digite sua senha' {...field} />
                            <InputRightElement
                              onClick={() => setShow((prev) => !prev)}
                              color="primary.400"
                              // eslint-disable-next-line react/no-children-prop
                              children={
                                show ? (
                                  <Eye
                                    size={25}
                                    style={{ alignSelf: "center" }}
                                  />
                                ) : (
                                  <EyeClosed
                                    size={25}
                                    style={{ alignSelf: "center" }}
                                  />
                                )
                              }
                            />
                          </InputGroup>
                          {errors.senha && (
                            <FormErrorMessage ml={5}>
                              {errors?.senha?.message}

                            </FormErrorMessage>
                          )}
                        </FormControl>
                      )}
                    />

                    <Button type="submit" variant="outline" rightIcon={<SignIn size={18} />} color="primary.400" colorScheme="primary"  >
                      Login
                    </Button>
                  </form>

                </TabPanel>
                <TabPanel>
                  <form onSubmit={handleSubmit(onSignIn)}>

                    <Controller
                      name="login"
                      control={control}
                      rules={{ required: "Login obrigatório." }}
                      render={({ field }) => (
                        <FormControl isInvalid={errors?.login}>

                          <Text color="dark.300">Login</Text>
                          <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                              {/* <LockKey size={76} /> */}
                            </InputLeftElement>
                            <Input focusBorderColor="primary.400" type='text' placeholder='Ex: lele123' {...field} />
                          </InputGroup>

                          {errors.login && (
                            <FormErrorMessage ml={5}>
                              {errors?.login?.message}
                            </FormErrorMessage>
                          )}
                        </FormControl>
                      )}
                    />

                    <Controller
                      name="senha"
                      control={control}
                      rules={{ required: "Senha é obrigatória." }}
                      render={({ field }) => (
                        <FormControl isInvalid={errors.senha}>
                          <Text color="dark.300">Senha</Text>
                          <InputGroup>
                            <InputLeftElement color="primary.400" pointerEvents='none'>
                              <LockKey size={24} style={{ color: "primary.400" }} />
                            </InputLeftElement>
                            <Input focusBorderColor="primary.400" type={!show ? 'password' : "text"} placeholder='Digite sua senha' {...field} />
                            <InputRightElement
                              onClick={() => setShow((prev) => !prev)}
                              color="primary.400"
                              // eslint-disable-next-line react/no-children-prop
                              children={
                                show ? (
                                  <Eye
                                    size={25}
                                    style={{ alignSelf: "center" }}
                                  />
                                ) : (
                                  <EyeClosed
                                    size={25}
                                    style={{ alignSelf: "center" }}
                                  />
                                )
                              }
                            />
                          </InputGroup>
                          {errors.senha && (
                            <FormErrorMessage ml={5}>
                              {errors?.senha?.message}

                            </FormErrorMessage>
                          )}
                        </FormControl>
                      )}
                    />

                    <Button type="submit" variant="outline" rightIcon={<SignIn size={18} />} color="primary.400" colorScheme="primary"  >
                      Login
                    </Button>
                    {/* <p>two!</p> */}
                  </form>
                </TabPanel>
              </TabPanels>
            </Tabs>

          </Stack>


        </Flex>
      </Flex >
    </>
  )
}