import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

export default function FeedPost({ img, avatar, username }) {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box my={2}>
        <Image src={img} alt={username} borderRadius={8} overflow={"hidden"} />
      </Box>
      <PostFooter username={username} />
    </>
  );
}
