import { Center, Box, Text } from "@chakra-ui/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
export default function CustomLayout(props: LayoutProps) {
  return (
    <Center w="100%" h="100%">
      <Box display="flex" flexDirection="column">
        <Box flex="1" minH="80vh">
          <main>{props.children}</main>
        </Box>
        <Box>
            <hr />
            <footer>
              <Text fontSize="sm" color="gray.900" pt="2" pl="4">
                {"\xA9 2021 NECT SIS Application"}
              </Text>
            </footer>
        </Box>
      </Box>
    </Center>
  );
}
