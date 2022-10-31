import { Heading, Box, Text, Link, Flex } from "@chakra-ui/react";

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
    <Flex direction="column" p="1.5rem">
      <Box
        bg="linear-gradient(43deg, rgba(22,22,22,1) 34%, rgba(84,40,127,1) 74%)"
        w="25rem"
        h="15rem"
        borderRadius=".3rem"
      >
        {/* TODO: Import Icon */}
        <Link href={presentationLink}>{/* <Play /> */}</Link>
        {presentation}
      </Box>
      <Text>{presentationDate}</Text>
      <Heading fontSize="1.5rem">{presentationTitle}</Heading>
      <Text>By {presentationAuthor}</Text>
    </Flex>
  );
}
