import { VStack, Text, Flex, Box, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

export default function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4} position={"sticky"} top={0}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser name="pijoy" followers="105,924" avatar="/img1.png" />
      <SuggestedUser name="john_doe" followers="1,534" avatar="/img2.png" />
      <SuggestedUser name="jane_doe" followers="1026" avatar="/img3.png" />
      <SuggestedUser name="some_name" followers="924" avatar="/img4.png" />
      <SuggestedUser name="some_name" followers="1824" avatar="/img5.png" />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"self-start"}>
        @ 2024 Built By{" "}
        <Link
          href="https://www.youtube.com"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          PIJOY
        </Link>
      </Box>
    </VStack>
  );
}
