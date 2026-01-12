import { Button } from "@chakra-ui/react";
import { memo } from "react";
import { Link } from "react-router";

const HomeButton = () => {
  return (
    <Button bg="teal.500" color="gray.50" _hover={{ opacity: 0.7 }} asChild>
      <Link to="/home">HOME画面へ戻る</Link>
    </Button>
  );
};

export default memo(HomeButton);
