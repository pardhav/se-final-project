import React from "react";
import CustomLayout from "../components/layout";
import {
  Heading,
  Stack,
  Link,
  HStack,
  Text,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

interface StudentData {
  id: string;
  firstname: string;
  lastname: string;
  phone: number;
  enrollDate: string;
}
export default function Students() {
  const [searchKey, setSearchKey] = React.useState("");

  const [studentData, setStudentData] = React.useState([] as StudentData[]);

  const fetchStudentData = () => {
    setStudentData([
      {
        id: "1",
        firstname: "Adams",
        lastname: "jerry",
        phone: 9999999999,
        enrollDate: "12/12/2021",
      },
    ]);
  };
  const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
    setSearchKey(event.currentTarget.value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    (() => {
      fetchStudentData();
    })();
  }, []);
  const searchStudents = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("search clicked");
    console.log(searchKey);
  };
  return (
    <CustomLayout>
      <Stack w="90vw">
        <Heading>Students</Heading>
        <Link href="/students/create" color="blue.500">
          Create New Student
        </Link>
        <HStack>
          <Text>Find by Name: </Text>
          <Input placeholder="Enter name to Search" onChange={handleChange} />
          <Button onClick={searchStudents}>Search</Button>
        </HStack>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Student ID</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th isNumeric>Phone Number</Th>
              <Th>Enrollment Date</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {studentData.map((data) => (
              <Tr key={data.id}>
                <Td>{data.id}</Td>
                <Td>{data.firstname}</Td>
                <Td>{data.lastname}</Td>
                <Td isNumeric>{data.phone}</Td>
                <Td>{data.enrollDate}</Td>
                <Td>
                  <Link color="blue.500">Edit</Link>&nbsp;|&nbsp;
                  <Link color="blue.500">Delete</Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Stack>
    </CustomLayout>
  );
}
