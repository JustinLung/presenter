import { Heading, Flex, Text, Link } from "@chakra-ui/react";

export default function NoPageFound() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      h="40rem"
      margin="0 auto"
    >
      <Heading as="h1">Whoops, Something went wrong.</Heading>
      <Text align="center" fontSize="md" maxW="30rem">
        The page you are looking for was moved, removed, renamed or might never
        exited
      </Text>
      <Heading fontSize="8xl">404</Heading>
      <Link
        href="/"
        bg="purple"
        py=".5rem"
        px="1rem"
        borderRadius=".2rem"
        _hover={{
          textDecoration: "none",
          bg: "black",
        }}
      >
        Go back to home
      </Link>
    </Flex>
  );
}
