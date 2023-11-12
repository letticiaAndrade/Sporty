import { useState } from "react";
import { Button, Flex, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { Eye, EyeClosed, LockKey, SignIn } from "@phosphor-icons/react"

export function Authetication() {

  const [show, setShow] = useState(false)

  return (
    <>
      <Flex bgColor="red" w="100%" h="100vh">
        <Flex bgColor="primary.400" flex={1}>
          {/* IMAGEM DE ALGUMA COISA */}
        </Flex>

        <Flex bgColor="light.100" flex={1} flexDir="column" justifyContent="center" padding={20}>
          <Text fontWeight="semibold" fontSize={32}>Bem - vindo de volta</Text>
          <Text fontSize={18} whiteSpace="pre-line">Se cadastre e gerencie seus torneios diretamente{"\n"} de dentro da plataforma.</Text>

          <Stack justifyContent="center" boxShadow="initial" m={50} >

            <Text color="dark.300">Nome</Text>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                {/* <LockKey size={24} /> */}
              </InputLeftElement>
              <Input variant="outline" type='text' placeholder='Leticia Matos' />
            </InputGroup>

            <Text color="dark.300">Login</Text>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                {/* <LockKey size={76} /> */}
              </InputLeftElement>
              <Input type='text' placeholder='Ex: lele123' />
            </InputGroup>

            <Text color="dark.300">Senha</Text>
            <InputGroup>
              <InputLeftElement pointerEvents='none'>
                {/* <LockKey size={76} /> */}
              </InputLeftElement>
              <Input type={!show ? 'password' : "text"} placeholder='Digite sua senha' />
              <InputRightElement
                onClick={() => setShow((prev) => !prev)}
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

            <Button variant="outline" rightIcon={<SignIn size={18} />} colorScheme="orange"  >
              Login
            </Button>
          </Stack>

        </Flex>
      </Flex>
    </>
  )
}