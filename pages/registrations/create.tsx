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
} from "@chakra-ui/react";

export default function Create() {
  const submitForm = () => {};
  const formik = useFormik({
    initialValues: {
      studentId: "",
      firstName: "",
      lastName: "",
      phone: "",
      enrollDate: "",
    },
    onSubmit: (values) => {
      console.log({ values });
    },
  });
  return (
    <CustomLayout>
      <Stack w="70vw">
        <Link href="/registrations" color="blue.500" mt="2">
          Back to List
        </Link>
        <Center>
          <Text fontSize="3xl">
            Fill below Details to create new
          </Text>
        </Center>

        <form onSubmit={formik.handleSubmit}>
          <FormControl id="studentId" mt="4">
            <FormLabel>Instructor ID</FormLabel>
            <Input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.studentId}
              required
            />
          </FormControl>
          <FormControl id="firstName" mt="4">
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              required
            />
          </FormControl>

          <FormControl id="lastName" mt="4">
            <FormLabel>Last Name</FormLabel>
            <Input
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              required
            />
          </FormControl>
          <FormControl id="phone" mt="4">
            <FormLabel>Phone</FormLabel>
            <Input
              name="phone"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.phone}
              required
            />
          </FormControl>
          <FormControl id="enrollDate" mt="4">
            <FormLabel>Hire Date</FormLabel>
            <Input
              name="enrollDate"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.enrollDate}
              required
            />
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
