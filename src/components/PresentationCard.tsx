import { Heading, Box, Text, Link } from "@chakra-ui/react";

interface PresentationCardProps {
  presentation: string;
  presentationTitle: string;
  presentationAuthor: string;
  presentationDate: string;
}

export default function PresentationCard({
  presentationTitle,
  presentation,
  presentationDate,
  presentationAuthor,
}: PresentationCardProps) {
  return (
    <>
      <Box
        bg="linear-gradient(43deg, rgba(22,22,22,1) 34%, rgba(84,40,127,1) 74%)"
        w="30rem"
        h="18rem"
        borderRadius=".3rem"
      >
        {/* TODO: Import Icon */}
        <Link>{/* <Play /> */}</Link>
        {presentation}
      </Box>
      <Text>{presentationDate}</Text>
      <Heading fontSize="1.5rem">{presentationTitle}</Heading>
      <Text>By {presentationAuthor}</Text>
    </>
  );
}
