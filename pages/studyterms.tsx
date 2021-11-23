import React from "react";
import IndexPage from "./components/IndexPage";
import { ITableHeadings } from "./interface";
import { Tr, Td, Center, Text, Button, Link } from "@chakra-ui/react";

interface IData {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  termYear: string;
  termSemester: string;
}
export default function Terms() {
  const [termData, setTermData] = React.useState([] as IData[]);
  const childRef = React.useRef<any>();
  const pageHeading: string = "Study Terms";
  const createButtonText: string = "Create New Study Terms";
  const formInitialValues = {
    id: "",
    name: "",
    startDate: "",
    endDate: "",
    termYear: "",
    termSemester: "",
  };
  const tableHeadings: ITableHeadings[] = [
    {
      heading: "Term ID",
    },
    {
      heading: "Term Name",
    },
    {
      heading: "Term Start Date",
    },
    {
      heading: "Term End Date",
    },
    {
      heading: "Term Season",
    },
    {
      heading: "Term Year",
    },
    {
      heading: "Actions",
    },
  ];
  const createFormLabels = [
    { label: "Name", valueName: "name" },
    { label: "Start Date", valueName: "startDate",type:"date" },
    { label: "End Date", valueName: "endDate",type:"date" },
    { label: "Year", valueName: "termYear",type:"number" },
    { label: "Semester", valueName: "termSemester" },
  ];
  const setData = (data: any) => setTermData(data as IData[]);
  function RowRenderer(): JSX.Element[] | JSX.Element {
    return termData.length > 0 ? (
      termData.map((data) => (
        <Tr key={data.id}>
          <Td>{data.id}</Td>
          <Td>{data.name}</Td>
          <Td>{data.startDate}</Td>
          <Td>{data.endDate}</Td>
          <Td>{data.termSemester}</Td>
          <Td>{data.termYear}</Td>
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
      title="SIS - Terms"
      ref={childRef}
      tableHeadings={tableHeadings}
      createButtonText={createButtonText}
      pageHeading={pageHeading}
      rowRenderer={RowRenderer}
      formValues={createFormLabels}
      setTableData={setData}
      tableUrlEndpoint="studentTerms"
      formInitialValues={formInitialValues}
    />
  );
}
