import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  Text,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../constants";

export default function PostFooter({ username ,isProfilePage}) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  function handleLike() {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  }

  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>

      <Text fontWeight={600} fontSize="sm">
        {likes} likes
      </Text>

      {!isProfilePage && (
        <>
          <Text fontWeight={600} fontSize="sm">
            {username}{" "}
            <Text as="span" fontWeight={400}>
              Feeling Good
            </Text>
          </Text>

          <Text color={"gray"} fontSize="sm">
            View all 1,000 comments
          </Text>
        </>
      )}

      <Flex alignItems={"center"} gap={2} justifyContent={"center"} w={"full"}>
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment..."}
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
              transition={"0.2s ease"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
}
