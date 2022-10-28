import { Flex, Link, Heading } from "@chakra-ui/react";
import { theme } from "../styles/theme";

export default function Header() {
  return (
    <Flex
      as="header"
      justify="space-between"
      alignItems="center"
      bg={theme.colors.darkgrey}
      p="1.5rem"
      textDecoration="none"
    >
      <Link href="/" fontWeight="bold" fontSize="1.5rem">
        fdnd.presenter
      </Link>
      <Link
        href="/"
        bg={theme.colors.purple}
        fontWeight="bold"
        px="1rem"
        py=".5rem"
        borderRadius=".2rem"
        _hover={{ textDecoration: "none", bg: theme.colors.black }}
      >
        Create Presentation
      </Link>
    </Flex>
  );
}
