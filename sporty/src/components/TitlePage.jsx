import { useNavigate } from "react-router-dom";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { Flex, Heading, IconButton, Stack } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export function TitlePage({ title, Icon, Right }) {
  const navigation = useNavigate();
  return (
    <Stack
      align="center"
      my={8} w="full"
      justify="space-between"
      direction={{ base: "column", sm: "row" }}
    >
      <Stack
        color="dark.400"
        spacing={{ base: 4, sm: 8 }}
        direction={{ base: "column", sm: "row" }}
      >
        <IconButton
          fontSize={50}
          variant="ghost"
          color="dark.400"
          aria-label="Go back"
          icon={<ArrowCircleLeft />}
          onClick={() => navigation(-1)}
        />

        <Flex alignItems="center">
          <Icon size={40} />
          <Heading fontWeight="medium" ml={2} fontSize={{ base: 24, sm: 28, }}>
            {title}
          </Heading>
        </Flex>
      </Stack>

      {Right ? <Right /> : null}

    </Stack>
  );
}