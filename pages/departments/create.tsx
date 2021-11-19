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
      departmentId: "",
      departmentName:""
    },
    onSubmit: (values) => {
      console.log({ values });
    },
  });
  return (
    <CustomLayout>
      <Stack w="70vw">
        <Link href="/departments" color="blue.500" mt="2">
          Back to List
        </Link>
        <Center>
          <Text fontSize="3xl">
            Fill below Details to create new Department
          </Text>
        </Center>

        <form onSubmit={formik.handleSubmit}>
          <FormControl id="studentId" mt="4">
            <FormLabel>Department Name</FormLabel>
            <Input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.departmentName}
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
