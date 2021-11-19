import React from "react";
import { Box, Link, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import CustomLayout from "./components/layout";
import { Center } from "@chakra-ui/layout";

export default function Home() {
  const links: HomeLinksProps[] = [
    {
      href: "students",
      name: "Students",
      tagline: "Students Basic Information",
    },
    {
      href: "instructors",
      name: "Instructors",
      tagline: "Instructors Basic Information",
    },
    {
      href: "departments",
      name: "Departments",
      tagline: "Departments Basic Information",
    },
    {
      href: "courses",
      name: "Courses",
      tagline: "Courses Basic Information",
    },
    {
      href: "studyterms",
      name: "Study Terms",
      tagline: "Study Terms Information",
    },
    {
      href: "teaching",
      name: "Teaching Assignment",
      tagline: "Instructors Teaching Assignment",
    },
    {
      href: "registration",
      name: "Course Registration",
      tagline: "Student Course Registration",
    },
  ];
  return (
    <CustomLayout>
      <Stack w="100vw" pr="6" pl="6">
        <Box bg="gray.100" color="black">
          <Stack padding="6">
            <Text fontSize="6xl">Student Information System (SIS)</Text>
            <Text fontSize="3xl">
              SIS is an application to manage student information and
              registration system.
            </Text>
          </Stack>
        </Box>
        <Center>
          <Box display="flex" w="80vw" flexWrap="wrap">
            {links.map((link) => (
              <HomeLinks
                key={link.href}
                href={link.href}
                name={link.name}
                tagline={link.tagline}
              />
            ))}
          </Box>
        </Center>
      </Stack>
    </CustomLayout>
  );
}
interface HomeLinksProps {
  href: string;
  name: string;
  tagline: string;
}
function HomeLinks(props: HomeLinksProps): JSX.Element {
  return (
    <Stack spacing="1" p="10">
      <Link href={props.href}>
        <Text fontSize="3xl" color="blue.400">
          {props.name}
        </Text>
      </Link>
      <Text fontSize="md" color="gray">
        {props.tagline}
      </Text>
    </Stack>
  );
}
