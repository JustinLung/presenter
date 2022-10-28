import { Flex, Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      as="header"
      justify="space-between"
      alignItems="center"
      bg="darkgrey"
      p="1.5rem"
      textDecoration="none"
    >
      <Link href="/" fontWeight="bold" fontSize="1.5rem">
        fdnd.presenter
      </Link>
      <Link
        href="/"
        bg="purple"
        fontWeight="bold"
        px="1rem"
        py=".5rem"
        borderRadius=".2rem"
        _hover={{ textDecoration: "none", bg: "black" }}
        _focus={{ bg: "black" }}
      >
        Create Presentation
      </Link>
    </Flex>
  );
}
