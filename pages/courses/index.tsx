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
  id: string;
  courseName: string;
  deptName: string;
}
export default function Courses() {
  const [searchKey, setSearchKey] = React.useState("");

  const [data, setData] = React.useState([] as IData[]);

  const fetchData = () => {
    setData([
      {
        id: "1",
        courseName: "Adams",
        deptName: "jerry",
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
        <Heading>Courses</Heading>
        <Link href="/courses/create" color="blue.500">
          Create New Course
        </Link>
        <HStack>
          <Text>Find by Name: </Text>
          <Input placeholder="Enter name to Search" onChange={handleChange} />
          <Button onClick={searchStudents}>Search</Button>
        </HStack>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Course ID</Th>
              <Th>Course Name</Th>
              <Th>Department Name</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((d) => (
              <Tr key={d.id}>
                <Td>{d.id}</Td>
                <Td>{d.courseName}</Td>
                <Td>{d.deptName}</Td>
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
