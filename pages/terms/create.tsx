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
      termName: "",
      termStartDate: "",
      termEndDate: "",
      termYear: "",
      termSeason: "",
    },
    onSubmit: (values) => {
      console.log({ values });
    },
  });
  return (
    <CustomLayout>
      <Stack w="70vw">
        <Link href="/terms" color="blue.500" mt="2">
          Back to List
        </Link>
        <Center>
          <Text fontSize="3xl">Fill the Form</Text>
        </Center>

        <form onSubmit={formik.handleSubmit}>
          <FormControl id="termName" mt="4">
            <FormLabel>Term Name</FormLabel>
            <Input
              name="termName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.termName}
              required
            />
          </FormControl>
          <FormControl id="termStartDate" mt="4">
            <FormLabel>Term Start Date</FormLabel>
            <Input
              name="termStartDate"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.termStartDate}
              required
            />
          </FormControl>

          <FormControl id="termEndDate" mt="4">
            <FormLabel>Term End Date</FormLabel>
            <Input
              name="termEndDate"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.termEndDate}
              required
            />
          </FormControl>
          <FormControl id="termSeason" mt="4">
            <FormLabel>Term Season</FormLabel>
            <Input
              name="termSeason"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.termSeason}
              required
            />
          </FormControl>
          <FormControl id="termYear" mt="4">
            <FormLabel>Term Year</FormLabel>
            <Input
              name="termYear"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.termYear}
              required
            />
          </FormControl>
          <Center>
            <Button mt="4" mb="4" type="submit">
              Submit
            </Button>
          </Center>
        </form>
      </Stack>
    </CustomLayout>
  );
}
