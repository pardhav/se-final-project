import React from "react";
import IndexPage from "./components/IndexPage";
import { ITableHeadings } from "./interface";
import { Text, Tr, Td, Center, Button } from "@chakra-ui/react";

interface IData {
  id: string;
  name: string;
  department: {
    id: string;
    name: string;
  };
}
export default function Courses() {
  const childRef = React.useRef<any>();
  const formInitialValues = {
    name: "",
    departmentId: "",
  };
  const [courseData, setCourseData] = React.useState([] as IData[]);
  const tableHeadings: ITableHeadings[] = [
    {
      heading: "Course ID",
    },
    {
      heading: "Course Name",
    },
    {
      heading: "Department Name",
    },
    {
      heading: "Actions",
    },
  ];
  const createFormLabels = [
    { label: "Course Name", valueName: "name" },
    {
      label: "Department Name",
      valueName: "departmentId",
      isSelect: true,
      fetchDataType:"departments"
    },
  ];
  const setData = (data: any) => setCourseData(data as IData[]);
  function RowRenderer(): JSX.Element[] | JSX.Element {
    return courseData.length > 0 ? (
      courseData.map((data) => (
        <Tr key={data.id}>
          <Td>{data.id}</Td>
          <Td>{data.name}</Td>
          <Td>{data.department.name}</Td>
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
      title="SIS - Courses"
      ref={childRef}
      tableHeadings={tableHeadings}
      createButtonText="Create New Course"
      pageHeading="Courses"
      rowRenderer={RowRenderer}
      formValues={createFormLabels}
      setTableData={setData}
      tableUrlEndpoint="courses"
      formInitialValues={formInitialValues}
    />
  );
}
