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
  student: {
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
export default function Registrations() {
  const childRef = React.useRef<any>();
  const formInitialValues = {
    courseId: "",
    studentId: "",
    termId: "",
  };
  const [courseData, setCourseData] = React.useState([] as IData[]);
  const tableHeadings: ITableHeadings[] = [
    {
      heading: "Registration ID",
    },
    {
      heading: "Course Name",
    },
    {
      heading: "Term Name",
    },
    {
      heading: "Student Name",
    },
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
      label: "Student Name",
      valueName: "studentId",
      isSelect: true,
      fetchDataType: "students",
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
          <Td>{data.course.name}</Td>
          <Td>{data.term.name}</Td>
          <Td>
            {data.student?.firstName} {data.student?.lastName}
          </Td>
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
      title="SIS - Registrations"
      ref={childRef}
      tableHeadings={tableHeadings}
      createButtonText="Create New Registration"
      pageHeading="Registrations"
      rowRenderer={RowRenderer}
      formValues={createFormLabels}
      setTableData={setData}
      tableUrlEndpoint="registrations"
      formInitialValues={formInitialValues}
    />
  );
}
