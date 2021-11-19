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
  firstname: string;
  lastname: string;
  phone: number;
  date: string;
}
export default function Instructors() {
  const [searchKey, setSearchKey] = React.useState("");

  const [data, setData] = React.useState([] as IData[]);

  const fetchData = () => {
    setData([
      {
        id: "1",
        firstname: "Adams",
        lastname: "jerry",
        phone: 9999999999,
        date: "12/12/2021",
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
        <Heading>Instructors</Heading>
        <Link href="/instructors/create" color="blue.500">
          Create New Instructor
        </Link>
        <HStack>
          <Text>Find by Name: </Text>
          <Input placeholder="Enter name to Search" onChange={handleChange} />
          <Button onClick={searchStudents}>Search</Button>
        </HStack>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Instructor ID</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th isNumeric>Phone Number</Th>
              <Th>Hire Date</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((d) => (
              <Tr key={d.id}>
                <Td>{d.id}</Td>
                <Td>{d.firstname}</Td>
                <Td>{d.lastname}</Td>
                <Td isNumeric>{d.phone}</Td>
                <Td>{d.date}</Td>
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
