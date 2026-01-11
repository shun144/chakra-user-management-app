import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const MobileNav = () => {
  return (
    <Box hideFrom="sm">
      <Sidebar />
    </Box>
  );
};

export default MobileNav;
