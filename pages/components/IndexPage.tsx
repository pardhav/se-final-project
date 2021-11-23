import React from "react";
import CustomLayout from "../components/layout";
import {
  Heading,
  Flex,
  Stack,
  HStack,
  Text,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Head from "next/head";
import { useFormik, Form } from "formik";
import { FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";
import { IndexPageProps } from "../interface";
import Select from "react-select";

interface IOptions {}
const IndexPage = React.forwardRef((props: IndexPageProps, ref) => {
  const [searchKey, setSearchKey] = React.useState("");
  const [optionsState, setOptionsState] = React.useState(new Map());
  const { isOpen, onOpen, onClose } = useDisclosure();
  let optionsMap = new Map();
  const [formValues, setFormValues] = React.useState({});
  const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
    setSearchKey(event.currentTarget.value);

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: async (values) => {
      console.log({ values });
      const data = await axios.post(
        `http://localhost:8080/api/create?type=${props.tableUrlEndpoint}`,
        values
      );

      console.log(data);
      onClose();
      await fetchData();
      setSearchKey("");
    },
    enableReinitialize: true,
  });

  const fetchData = async () => {
    const data = await axios.get(
      `http://localhost:8080/api/all?type=${props.tableUrlEndpoint}`
    );
    props.formValues.forEach(async (item) => {
      if (item.isSelect) {
        const optionsResponse = await axios.get(
          `http://localhost:8080/api/all?type=${item.fetchDataType}`
        );
        const options = optionsResponse.data.map((d: any) => {
          console.log({ d });
          return {
            label:
              item.fetchDataType === "students" ||
              item.fetchDataType === "instructors"
                ? `${d.firstName} ${d.lastName}`
                : d.name,
            value: d.id,
          };
        });
        optionsMap.set(item.fetchDataType, options);
        console.log(optionsMap);
      }
    });

    console.log(data.data);
    props.setTableData(data.data);
    setOptionsState(optionsMap);
    setFormValues(props.formInitialValues);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    (() => {
      fetchData();
    })();
  }, []);
  const onSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    (async () => {
      const data = await axios.get(
        `http://localhost:8080/api/search?type=${props.tableUrlEndpoint}&searchKey=${searchKey}`
      );
      props.setTableData(data.data);
    })();
  };
  React.useImperativeHandle(ref, () => ({
    onEdit(values: any) {
      onOpen();
      setFormValues(values);
    },
  }));

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CustomLayout>
        <Stack w="90vw">
          <Flex p={2}>
            <Heading flex={1}>{props.pageHeading}</Heading>
            <Button
              onClick={() => {
                setFormValues({});
                onOpen();
              }}
            >
              {props.createButtonText}
            </Button>
          </Flex>
          <HStack>
            <Text>Find by Name: </Text>
            <Input
              placeholder="Enter name to Search"
              onChange={handleChange}
              type="search"
            />
            <Button onClick={onSearch}>Search</Button>
          </HStack>
          <Table variant="simple">
            <Thead>
              <Tr>
                {props.tableHeadings.map((heading) => {
                  return (
                    <Th {...heading.props} key={heading.heading}>
                      {heading.heading}
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>{props.rowRenderer()}</Tbody>
          </Table>
        </Stack>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Fill out below details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={formik.handleSubmit}>
                {props.formValues.map((f) => {
                  console.log(f.fetchDataType);
                  console.log(optionsState.get(f.fetchDataType));
                  return (
                    <FormControl key={f.valueName} id={f.valueName} mt="4">
                      <FormLabel>{f.label}</FormLabel>
                      {f.isSelect ? (
                        <Select
                          isClearable
                          isSearchable
                          options={optionsState?.get(f.fetchDataType)}
                          // value={(formik.values as any)[f.valueName]}
                          onChange={(value: any) => {
                            formik.setFieldValue(f.valueName, value?.value);
                            formik.setFieldValue(
                              (formik.values as any)[f.valueName],
                              value?.value
                            );
                          }}
                        />
                      ) : (
                        <Input
                          type={f.type ?? "text"}
                          onChange={formik.handleChange}
                          value={(formik.values as any)[f.valueName]}
                          required
                          pattern={f.pattern}
                        />
                      )}
                    </FormControl>
                  );
                })}
                <FormControl></FormControl>

                <Center>
                  <Button mt="4" mb="4" type="submit">
                    Submit
                  </Button>
                </Center>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </CustomLayout>
    </>
  );
});

export default IndexPage;
