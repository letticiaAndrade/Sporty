/* eslint-disable react/prop-types */
import { Center, Stack, Text } from "@chakra-ui/react";

export function ModuleButton({ label, Icon, onClick, comment = null }) {

  return (
    <Center
      p={8}
      mb={6}
      bg="white"
      boxShadow="md"
      flexDir="column"
      color="dark.300"
      m={8}
      borderRadius={8}
      opacity={1}
      w={{ base: "80%", sm: 280 }}
      onClick={onClick}
      h={{ base: "80%", sm: 280 }}
      cursor={"pointer"}
      _hover={{
        color: "primary.400",
        transform: "scale(1.1)",
      }}
    >
      <Icon size={60} />
      <Stack space={0}>
        <Text mt={6} textAlign="center" fontSize={16} fontWeight="medium">{label}</Text>
        <Text mt={6} textAlign="center" fontSize={14} fontWeight="light">{comment}</Text>
      </Stack>
    </Center>
  );
}