import React from "react";
import CustomLayout from "./components/layout";
import { Stack, Text, Link, Box } from "@chakra-ui/react";

export default function contact() {
  return (
    <CustomLayout>
      <Box w="90vw">
        <Stack>
          <Text fontSize="3xl" mb="6">
            NECT
          </Text>
          <Text fontSize="md">Address:</Text>
          <Text>
            <ol style={{ listStyle: "none" }}>
              <li>One Microsoft Way</li>
              <li>Redmond WA, 98052 - 6399</li>
              <li>
                <Link href="tel:452.555.100" color="blue.500">
                  P:{" "}452.555.100{" "}
                </Link>
              </li>
            </ol>
          </Text>
          <Text>
            for support related email to:&nbsp;
            <Link href="mailto:support@nect.com" color="blue.500">
              support@nect.com
            </Link>
          </Text>
          <Text>
            for marketing related email to:&nbsp;
            <Link href="mailto:marketing@nect.com" color="blue.500">
              marketing@nect.com
            </Link>
          </Text>
        </Stack>
      </Box>
    </CustomLayout>
  );
}
