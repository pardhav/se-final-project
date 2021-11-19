import React from "react";
import { Center } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import CustomLayout from './components/layout';

export default function about() {
  return (
    <CustomLayout>
      <Center mt="4">
        <Stack>
          <Text fontSize="2xl">
            This is an Student Information System developed by NECT Team
          </Text>
          <Text fontSize="xl">Team Members</Text>
          <ol>
            <li>
              <Text>Pardhav</Text>
            </li>
            <li>
              <Text>Abhiram</Text>
            </li>
            <li>
              <Text>Vamsi</Text>
            </li>
            <li>
              <Text>Gunas</Text>
            </li>
            <li>
              <Text>Manoj</Text>
            </li>
            <li>
              <Text>Sandeep</Text>
            </li>
          </ol>
        </Stack>
      </Center>
    </CustomLayout>
  );
}
