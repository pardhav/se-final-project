
import React from "react";
import CustomLayout from "../components/layout";
import { useFormik } from "formik";
import {
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Link,
  Select
} from "@chakra-ui/react";

export default function Create() {
  const formik = useFormik({
    initialValues: {
      courseId: "",
      courseName: "",
      deptName: "",
    },
    onSubmit: (values) => {
      console.log({ values });
    },
  });
  return (
    <CustomLayout>
      <Stack w="70vw">
        <Link href="/courses" color="blue.500" mt="2">
          Back to List
        </Link>
        <Center>
          <Text fontSize="3xl">
            Fill below Details to create new Course
          </Text>
        </Center>

        <form onSubmit={formik.handleSubmit}>
          <FormControl id="studentId" mt="4">
            <FormLabel>Course ID</FormLabel>
            <Input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.courseId}
              required
            />
          </FormControl>
          <FormControl id="firstName" mt="4">
            <FormLabel>Course Name</FormLabel>
            <Input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.courseName}
              required
            />
          </FormControl>

          <FormControl id="lastName" mt="4">
            <FormLabel>Department Name</FormLabel>
            <Select
              placeholder="Select Department"
              onChange={formik.handleChange}
              value={formik.values.deptName}
              required
            >
              <option>Computer Science</option>
              <option>Computer Engineering</option>
              <option>Bussiness Analysis</option>
            </Select>
          </FormControl>

          <Center>
            <Button mt="4" mb="4" type="submit">
              Create
            </Button>
          </Center>
        </form>
      </Stack>
    </CustomLayout>
  );
}
