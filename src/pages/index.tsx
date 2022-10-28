import { nextClient } from "@lib/client";
import PresentationCard from "@/components/PresentationCard";

export default function Page() {
  return (
    <PresentationCard
      presentation="-"
      presentationTitle="Performance"
      presentationAuthor="Justin Lung"
      presentationDate="21-01-22"
    />
  );
}

export const getStaticProps = async () => {
  const data = await nextClient.getPresentationId({
    id: "cl9pxhz8j07oo0aw9pekd5tgs",
  });

  return {
    props: {
      presentation: data.presentation,
    },
  };
};
