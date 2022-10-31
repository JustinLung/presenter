import { Flex } from "@chakra-ui/react";
import PresentationCard from "@/components/PresentationCard";
import { nextClient } from "@lib/client";
import { Presentation } from "@lib/generated/sdk";

interface PageProps {
  data: Presentation[];
}

export default function Page(props: PageProps) {
  const { data } = props;
  return (
    <>
      <Flex
        direction="row"
        gap="2rem"
        flexWrap="wrap"
        maxW="90rem"
        m="0 auto"
        justify={{ sm: "center" }}
      >
        {data.map((data) => {
          return (
            <PresentationCard
              key={data?.id}
              // TODO: slide thumbnail
              presentation="-"
              presentationTitle={data.title}
              presentationAuthor={data.createdBy.name}
              presentationDate={data.createdAt.split("T")}
              presentationLink={`presentation/${data.id}`}
            />
          );
        })}
      </Flex>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await nextClient.getPresentation();
  console.log(data);
  return {
    props: {
      data: data.presentations,
    },
  };
};
