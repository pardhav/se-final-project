import React from "react";
import IndexPage from "./components/IndexPage";
import { ITableHeadings, StudentData } from "./interface";
import { Link, Text, Tr, Td, Center, Button } from "@chakra-ui/react";

export default function Students() {
  const childRef = React.useRef<any>();
  const pageHeading: string = "Students";
  const createButtonText: string = "Create New Student";
  const formInitialValues = {
    studentId: "",
    firstName: "",
    lastName: "",
    phone: "",
    enrollDate: "",
  };
  const tableHeadings: ITableHeadings[] = [
    {
      heading: "Student ID",
    },
    {
      heading: "First Name",
    },
    {
      heading: "Last Name",
    },
    {
      heading: "Phone Number",
      props: {
        isNumeric: true,
      },
    },
    {
      heading: "Enrollment Date",
    },
    {
      heading: "Actions",
    },
  ];

  const createFormLabels = [
    { label: "First Name", valueName: "firstName" },
    { label: "Last Name", valueName: "lastName" },
    { label: "Phone", valueName: "phone", type: "tel"},
    { label: "Enrollment Date", valueName: "enrollDate", type: "date" },
  ];
  const [studentData, setStudentData] = React.useState([] as StudentData[]);

  const setData = (data: any) => setStudentData(data as StudentData[]);

  function RowRenderer(): JSX.Element[] | JSX.Element {
    return studentData.length > 0 ? (
      studentData.map((data) => (
        <Tr key={data.id}>
          <Td>{data.id}</Td>
          <Td>{data.firstName}</Td>
          <Td>{data.lastName}</Td>
          <Td isNumeric>{data.phone}</Td>
          <Td>{data.enrollDate}</Td>
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
            <Link color="blue.500">Delete</Link>
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
      title="SIS-Students"
      ref={childRef}
      tableHeadings={tableHeadings}
      createButtonText={createButtonText}
      pageHeading={pageHeading}
      rowRenderer={RowRenderer}
      formValues={createFormLabels}
      setTableData={setData}
      tableUrlEndpoint="students"
      formInitialValues={formInitialValues}
    />
  );
}
