import { fullscreenStore } from "@/state/fullscreen";
import { Box } from "@chakra-ui/react";
import { ReactNode, useEffect, useRef } from "react";

interface FullSlideProps {
  children: ReactNode;
}

export default function FullSlide(props: FullSlideProps) {
  const { children } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      fullscreenStore.setState({ element: ref.current });
    }
  }, []);

  return (
    <Box ref={ref} display="flex" justifyContent="center" alignItems="center">
      <Box
        w={fullscreenStore().isFullscreen ? "100%" : "75%"}
        sx={{
          aspectRatio: "16/9",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
