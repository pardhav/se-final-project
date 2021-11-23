import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Input,
} from "@chakra-ui/react";
export default function Lookup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalHeading = "Select from below";
const options = [
    {label:"Computer Science",value:"1"},{label:"Computer Engineering",value:"2"}
];
  const onOptionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event?.currentTarget?.attributes.getNamedItem("data-name").value);
  };
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalHeading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody height="100px">
            <Input type="Search" placeholder="Type to filter" />
            <Box m="3">
{options.map((item)=><Box
key={item.value}
              p="2"
              m="1"
              borderWidth="1px"
              borderRadius="lg"
              onClick={onOptionClick}
              data-id={item.value}
              data-name={item.label}
              cursor="pointer"
            >
              {item.label}
            </Box>)}
            </Box>
            
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
