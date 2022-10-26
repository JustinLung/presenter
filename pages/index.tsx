import { nextClient } from "@lib/client";

export default function Page() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await nextClient.testq();
  console.log(data);

  return {
    props: {},
  };
};
