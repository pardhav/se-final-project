import { TableColumnHeaderProps } from "@chakra-ui/table";

export interface StudentData {
  id: string;
  firstName: string;
  lastName: string;
  phone: number;
  enrollDate: string;
}
export interface InstructorData {
  id: string;
  firstName: string;
  lastName: string;
  phone: number;
  hireDate: string;
}
export interface ITableHeadings {
  heading: string;
  props?: TableColumnHeaderProps;
}
export interface IndexPageProps {
  title: string;
  pageHeading: string;
  createButtonText: string;
  tableHeadings: ITableHeadings[];
  rowRenderer: () => JSX.Element[] | JSX.Element;
  formValues: IFormValues[];
  setTableData: (tableData: any) => void;
  tableUrlEndpoint: string;
  formInitialValues: {};
}

interface IFormValues{
  label: string;
  valueName: string;
  isSelect?: boolean;
  fetchDataType?: string;
  type?:string;
  pattern?:string;
}
