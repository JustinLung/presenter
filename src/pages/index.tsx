import { Flex } from "@chakra-ui/react";
import PresentationCard from "@/components/PresentationCard";
import { nextClient } from "@lib/client";

export default function Page({ presentations }) {
  return (
    <Flex
      direction="row"
      gap="1rem"
      flexWrap="wrap"
      maxW="90rem"
      m="0 auto"
      justify={{ sm: "center" }}
    >
      {presentations.map((data) => {
        return (
          <PresentationCard
            key={data?.id}
            // TODO: slide thumbnail
            presentation="-"
            presentationTitle={data.title}
            presentationAuthor={data.createdBy.name}
            presentationDate={data.createdAt.split("T")}
            presentationLink="/"
          />
        );
      })}
    </Flex>
  );
}

export const getStaticProps = async () => {
  const data = await nextClient.getPresentation();

  return {
    props: {
      presentations: data.presentations,
    },
  };
};
