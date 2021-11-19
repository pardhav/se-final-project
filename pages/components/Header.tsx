import React from "react";
import { Heading, Flex, Box, Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box w="100%" p="4" bg="gray.900">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        pb="3"
        color="white"
      >
        <Heading as="h4" size="lg" fontWeight="md" >
            Student Information System
          </Heading>
      </Flex>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        bg="gray.900"
        color="white"
      >
        <Link variant="link" colorScheme="gray" color="white" href="/">
          Home
        </Link>
        <Link variant="link" colorScheme="gray" color="white" href="/students">
          Students
        </Link>
        <Link variant="link" colorScheme="gray" color="white" href="/instructors">
          Instructors
        </Link>
        <Link variant="link" colorScheme="gray" color="white" href="/departments">
          Departments
        </Link>
        <Link variant="link" colorScheme="gray" color="white" href="/courses">
          Courses
        </Link>
        <Link variant="link" colorScheme="gray" color="white" href="/terms">
          Study Terms
        </Link>
        <Link variant="link" colorScheme="gray" color="white" href="/teaching">
          Teaching Assingments
        </Link>
        <Link variant="link" colorScheme="gray" color="white" href="/registrations">
          Course Registration
        </Link>
        <Link variant="link" colorScheme="gray" color="white" href="/about">
          About
        </Link>
        <Link variant="link" colorScheme="gray" color="white" href="/contact">
          Contact
        </Link>
      </Flex>
    </Box>
  );
}
