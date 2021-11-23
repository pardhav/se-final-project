import React from "react";
import IndexPage from "./components/IndexPage";
import { ITableHeadings } from "./interface";
import { Text, Tr, Td, Center, Button } from "@chakra-ui/react";


interface IData {
  id: string;
  name: string;
}
export default function Departments() {
 const childRef = React.useRef<any>();
  const formInitialValues = {
    name: "",
  };
  const tableHeadings: ITableHeadings[] = [
    {
      heading: "Department ID",
    },
    {
      heading: "Department Name",
    },
  ];

  const createFormLabels = [
    {label:"Department",valueName:"name"}
  ];
  const [deptData, setDeptData] = React.useState(
    [] as IData[]
  );

  const setData = (data: any) => setDeptData(data as IData[]);
    function RowRenderer(): JSX.Element[] | JSX.Element {
    return deptData.length > 0 ? (
      deptData.map((data) => (
        <Tr key={data.id}>
          <Td>{data.id}</Td>
          <Td>{data.name}</Td>
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
      title="SIS - Departments"
      ref={childRef}
      tableHeadings={tableHeadings}
      createButtonText="Create New Department"
      pageHeading="Departments"
      rowRenderer={RowRenderer}
      formValues={createFormLabels}
      setTableData={setData}
      tableUrlEndpoint="departments"
      formInitialValues={formInitialValues}
    />
  );
}
