import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import Esporte from "../../public/assets/esporte.png";
import { Eye, EyeClosed, LockKey, SignIn } from "@phosphor-icons/react"
import { Button, Center, Flex, FormControl, FormErrorMessage, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from "@chakra-ui/react";


export function Authetication() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const user = {
    name: "Leticia",
    login: "123",
    password: "123"
  };

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      login: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    // console.log(data?.name)
    if (data.name === user.name && data.login === user.login && data.password === user.password) {
      navigate("Home")
    } else {
      // Autenticação falhou
      setError("name", {
        type: "validate",
        message: "Credenciais inválidas"
      });

      setError("login", {
        type: "validate",
        message: "Credenciais inválidas",
      });

      setError("password", {
        type: "validate",
        message: "Credenciais inválidas",
      });
    }
  };

  return (
    <>
      <Flex w="100%" h="100vh">

        <Center bgImage={Esporte} filter='auto' blur='1px' bgSize="cover" display={{ base: "none", lg: "flex" }} bgColor="primary.400" flex={1}>
        </Center>

        <Flex bgColor="light.100" flex={1} flexDir="column" justifyContent="center" padding={20}>
          <Text fontWeight="semibold" fontSize={28}>Bem - vindo de volta</Text>
          <Text fontSize={16} whiteSpace="pre-line">Se cadastre e gerencie seus torneios diretamente{"\n"} de dentro da plataforma.</Text>

          <form onSubmit={handleSubmit(onSubmit)}>

            <Stack justifyContent="center" bgColor="light.200" padding={5} rounded={8} boxShadow="2xl" m={50} >

              <Controller
                name="name"
                control={control}
                rules={{ required: "Nome obrigatório." }}
                render={({ field }) => (

                  <FormControl isInvalid={errors?.name}>
                    <Text color="dark.300">Nome</Text>
                    <InputGroup>
                      <InputLeftElement pointerEvents='none'>
                        {/* <LockKey size={24} /> */}
                      </InputLeftElement>
                      <Input focusBorderColor="primary.400" variant="outline" type='text' placeholder='Leticia Matos' {...field} />
                    </InputGroup>
                    {errors?.name && (
                      <FormErrorMessage ml={5}>
                        {errors?.name?.message}
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
                name="password"
                control={control}
                rules={{ required: "Senha é obrigatória." }}
                render={({ field }) => (
                  <FormControl isInvalid={errors.password}>
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
                    {errors.password && (
                      <FormErrorMessage ml={5}>
                        {errors?.password?.message}

                      </FormErrorMessage>
                    )}
                  </FormControl>
                )}
              />

              <Button type="submit" variant="outline" rightIcon={<SignIn size={18} />} color="primary.400" colorScheme="primary"  >
                Login
              </Button>
            </Stack>
          </form>

        </Flex>
      </Flex>
    </>
  )
}