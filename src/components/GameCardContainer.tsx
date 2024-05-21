import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <>
      <Box borderRadius={10} height="100%" width="100%" overflow="hidden">
        {children}
      </Box>
    </>
  );
};

export default GameCardContainer;
