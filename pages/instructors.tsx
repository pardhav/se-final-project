import React from "react";
import IndexPage from "./components/IndexPage";
import { ITableHeadings, InstructorData } from "./interface";
import { Text, Tr, Td, Center, Button } from "@chakra-ui/react";

export default function Instructors() {
  const childRef = React.useRef<any>();
  const formInitialValues = {
    studentId: "",
    firstName: "",
    lastName: "",
    phone: "",
    enrollDate: "",
  };
  const tableHeadings: ITableHeadings[] = [
    {
      heading: "Instructor ID",
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
      heading: "Hire Date",
    },
    {
      heading: "Actions",
    },
  ];

  const createFormLabels = [
    { label: "First Name", valueName: "firstName" },
    { label: "Last Name", valueName: "lastName" },
    { label: "Phone", valueName: "phone", type: "tel" },
    {
      label: "Hire Date",
      valueName: "hireDate",
      type: "date",
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    },
  ];
  const [instructorData, setInstructorData] = React.useState(
    [] as InstructorData[]
  );

  const setData = (data: any) => setInstructorData(data as InstructorData[]);

  function RowRenderer(): JSX.Element[] | JSX.Element {
    return instructorData.length > 0 ? (
      instructorData.map((data) => (
        <Tr key={data.id}>
          <Td>{data.id}</Td>
          <Td>{data.firstName}</Td>
          <Td>{data.lastName}</Td>
          <Td isNumeric>{data.phone}</Td>
          <Td>{data.hireDate}</Td>
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
      title="SIS - Instructor"
      ref={childRef}
      tableHeadings={tableHeadings}
      createButtonText="Create New Instructor"
      pageHeading="Instructors"
      rowRenderer={RowRenderer}
      formValues={createFormLabels}
      setTableData={setData}
      tableUrlEndpoint="instructors"
      formInitialValues={formInitialValues}
    />
  );
}
