import { Heading, Box, Text, Link, Flex } from "@chakra-ui/react";
import PlayIcon from "../icons/PlayIcon";

interface PresentationCardProps {
  presentation: string;
  presentationTitle: string;
  presentationAuthor: string;
  presentationDate: string;
  presentationLink: string;
}

export default function PresentationCard({
  presentationTitle,
  presentation,
  presentationDate,
  presentationAuthor,
  presentationLink,
}: PresentationCardProps) {
  return (
    <Flex direction="column" as="article">
      <Box
        bg="linear-gradient(43deg, rgba(22,22,22,1) 34%, rgba(84,40,127,1) 74%)"
        w="25rem"
        h="15rem"
        borderRadius=".3rem"
        mt="2rem"
        position="relative"
      >
        <Link
          href={presentationLink}
          bg="darkgrey"
          position="absolute"
          bottom="1rem"
          right="1rem"
          borderRadius="50%"
          p="1rem"
          border="2px solid"
          borderColor="darkgrey"
          _hover={{
            bg: "transparent",
            border: "2px solid",
            borderColor: "darkgrey",
          }}
          _focus={{
            bg: "transparent",
            border: "2px solid",
            borderColor: "darkgrey",
          }}
        >
          <PlayIcon width={15} heigth={18} />
        </Link>
        {presentation}
      </Box>
      <Text>{presentationDate}</Text>
      <Heading fontSize="1.5rem">{presentationTitle}</Heading>
      <Text>By {presentationAuthor}</Text>
    </Flex>
  );
}
