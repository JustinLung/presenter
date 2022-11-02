import { getColorScheme } from "@/helpers/getColorScheme";
import { Heading, Box, Text, Link, Flex } from "@chakra-ui/react";
import { ColorScheme } from "@lib/generated/sdk";
import PlayIcon from "../icons/PlayIcon";

interface PresentationCardProps {
  presentationTitle: string;
  presentationAuthor: string;
  presentationDate: string;
  presentationLink: string;
  presentationBackground: string;
}

export default function PresentationCard({
  presentationTitle,
  presentationDate,
  presentationAuthor,
  presentationLink,
  presentationBackground,
}: PresentationCardProps) {
  const color = getColorScheme(presentationBackground as ColorScheme);

  return (
    <Flex direction="column" as="article">
      <Box
        bg={color.bgColor}
        color={color.color}
        w="25rem"
        h="15rem"
        borderRadius=".3rem"
        mt="2rem"
        pos="relative"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Link
          href={presentationLink}
          bg="currentColor"
          pos="absolute"
          bottom="1rem"
          right="1rem"
          borderRadius="50%"
          width="3rem"
          height="3rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="2px solid"
          borderColor="currentColor"
          _hover={{
            bg: "transparent",
            border: "2px solid",
            borderColor: "currentColor",
          }}
          _focus={{
            bg: "transparent",
            border: "2px solid",
            borderColor: "currentColor",
          }}
        >
          <PlayIcon width={15} heigth={18} />
        </Link>
        <Heading as="h2" fontSize="2xl">
          {presentationTitle}
        </Heading>
        <Text fontSize=".8rem">Author: {presentationAuthor}</Text>
      </Box>
      <Text pt=".5rem" color="lightgrey">
        {presentationDate}
      </Text>
    </Flex>
  );
}
