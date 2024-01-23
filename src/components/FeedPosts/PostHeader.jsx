import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function PostHeader({ username, avatar }) {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} alt="User Profile Pic" size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          {username}
        </Flex>
        <Box color={"gray.500"} fontSize={12}>
          · 1w
        </Box>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          color={"blue.500"}
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"0.2s ease"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
}
