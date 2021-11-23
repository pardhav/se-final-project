import React from "react";
import IndexPage from "./components/IndexPage";
import { ITableHeadings } from "./interface";
import { Text, Tr, Td, Center, Button } from "@chakra-ui/react";

interface IData {
  id: string;
  course: {
    id: string;
    name: string;
  };
  instructor: {
    id: string;
    name: string;
    firstName: string;

    lastName: string;
  };
  term: {
    id: string;
    name: string;
  };
}
export default function Teaching() {
  const childRef = React.useRef<any>();
  const formInitialValues = {
    courseId: "",
    studentId: "",
    termId: "",
  };
  const [courseData, setCourseData] = React.useState([] as IData[]);
  const tableHeadings: ITableHeadings[] = [
    {
      heading: "TA ID",
    },
    {
      heading: "Course ID",
    },
    {
      heading: "Course Name",
    },
    {
      heading: "Instructor Name",
    },
    { heading: "Term Name" },
    {
      heading: "Actions",
    },
  ];
  const createFormLabels = [
    {
      label: "Course",
      valueName: "courseId",
      isSelect: true,
      fetchDataType: "courses",
    },
    {
      label: "Instructor",
      valueName: "instructorId",
      isSelect: true,
      fetchDataType: "instructors",
    },
    {
      label: "Terms",
      valueName: "termId",
      isSelect: true,
      fetchDataType: "studentTerms",
    },
  ];
  const setData = (data: any) => setCourseData(data as IData[]);
  function RowRenderer(): JSX.Element[] | JSX.Element {
    return courseData.length > 0 ? (
      courseData.map((data) => (
        <Tr key={data.id}>
          <Td>{data.id}</Td>
          <Td>{data.course.id}</Td>
          <Td>{data.course.name}</Td>
          <Td>
            {data.instructor?.firstName} {data.instructor?.lastName}
          </Td>
          <Td>{data.term.name}</Td>
          <Td>
            <Button
              color="blue.500"
              onClick={() => {
                childRef.current?.onEdit(data);
              }}
            >
              Edit
            </Button>
            &nbsp;|&nbsp;
            <Button color="blue.500">Delete</Button>
          </Td>
        </Tr>
      ))
    ) : (
      <Tr>
        <Td colSpan={6}>
          <Center>
            <Text>No Records Found</Text>
          </Center>
        </Td>
      </Tr>
    );
  }
  return (
    <IndexPage
      title="SIS - TA"
      ref={childRef}
      tableHeadings={tableHeadings}
      createButtonText="Create New TA"
      pageHeading="Teaching Assignments"
      rowRenderer={RowRenderer}
      formValues={createFormLabels}
      setTableData={setData}
      tableUrlEndpoint="teaching"
      formInitialValues={formInitialValues}
    />
  );
  //   const [searchKey, setSearchKey] = React.useState("");

  //   const [data, setData] = React.useState([] as IData[]);

  //   const fetchData = () => {
  //     setData([
  //       {
  //         id: "1",
  //         courseId: "COMP-2800",
  //         courseName: "Software Development",
  //         instructorName: "Adbelnassar",
  //         termName: "Winter",
  //       },
  //     ]);
  //   };
  //   const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
  //     setSearchKey(event.currentTarget.value);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   React.useEffect(() => {
  //     (() => {
  //       fetchData();
  //     })();
  //   }, []);
  //   const searchStudents = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     console.log("search clicked");
  //     console.log(searchKey);
  //   };
  //   return (
  //     <CustomLayout>
  //       <Stack w="90vw">
  //         <Heading>Teaching Assignments</Heading>
  //         <Link href="/teaching/create" color="blue.500">
  //           Create New
  //         </Link>
  //         <HStack>
  //           <Text>Find by Name: </Text>
  //           <Input placeholder="Enter name to Search" onChange={handleChange} />
  //           <Button onClick={searchStudents}>Search</Button>
  //         </HStack>
  //         <Table variant="simple">
  //           <Thead>
  //             <Tr>
  //               <Th>TA ID</Th>
  //               <Th>Course ID</Th>
  //               <Th>Course Name</Th>
  //               <Th>Instructor Name</Th>
  //               <Th>Term Name</Th>
  //               <Th>Actions</Th>
  //             </Tr>
  //           </Thead>
  //           <Tbody>
  //             {data.map((d) => (
  //               <Tr key={d.id}>
  //                 <Td>{d.id}</Td>
  //                 <Td>{d.courseId}</Td>
  //                 <Td>{d.courseName}</Td>
  //                 <Td>{d.instructorName}</Td>
  //                 <Td>{d.termName}</Td>
  //                 <Td>
  //                   <Link color="blue.500">Edit</Link>&nbsp;|&nbsp;
  //                   <Link color="blue.500">Delete</Link>
  //                 </Td>
  //               </Tr>
  //             ))}
  //           </Tbody>
  //         </Table>
  //       </Stack>
  //     </CustomLayout>
  //   );
}
