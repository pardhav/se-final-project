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

interface IData {
  registrationId: string;
  courseName: string;
  studentName: string;
  termName: string;
}
export default function Registrations() {
  const [searchKey, setSearchKey] = React.useState("");

  const [data, setData] = React.useState([] as IData[]);

  const fetchData = () => {
    setData([
      {
        registrationId: "1",
        courseName: "Advanced Database Topics",
        studentName: "Winter",
        termName: "Hassan",
      },
    ]);
  };
  const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
    setSearchKey(event.currentTarget.value);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    (() => {
      fetchData();
    })();
  }, []);
  const searchStudents = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("search clicked");
    console.log(searchKey);
  };
  return (
    <CustomLayout>
      <Stack w="90vw">
        <Heading>Registrations</Heading>
        <Link href="/registrations/create" color="blue.500">
          Create New
        </Link>
        <HStack>
          <Text>Find by Name: </Text>
          <Input placeholder="Enter name to Search" onChange={handleChange} />
          <Button onClick={searchStudents}>Search</Button>
        </HStack>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Registration ID</Th>
              <Th>Course Name</Th>
              <Th>Term Name</Th>
              <Th>Student Name</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((d) => (
              <Tr key={d.registrationId}>
                <Td>{d.registrationId}</Td>
                <Td>{d.courseName}</Td>
                <Td>{d.termName}</Td>
                <Td>{d.studentName}</Td>
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
