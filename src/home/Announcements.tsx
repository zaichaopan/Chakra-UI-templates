import React from "react";
import {
  Box,
  Button,
  Text,
  VStack,
  Heading,
  StackDivider,
  useColorModeValue
} from "@chakra-ui/react";

const announcementList = [
  {
    title: "Office closed on July 2nd",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus"
  },
  {
    title: " New password policy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus"
  },
  {
    title: "Office closed on July 2nd",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
      iusto tempore repudiandae, accusamus deleniti illum voluptas enim
      modi at velit.`
  }
];

export default function Announcements() {
  return (
    <VStack align="stretch" p="6" layerStyle="base" spacing={6}>
      <Heading variant="h2">Announcetments</Heading>
      <VStack
        divider={
          <StackDivider
            borderColor={useColorModeValue("gray.200", "gray.700")}
          />
        }
        spacing={5}
        align="stretch"
      >
        {announcementList.map((accouncement, index) => {
          return (
            <Box key={index}>
              <Heading variant="h3" as="h3" mb="1">
                {accouncement.title}
              </Heading>
              <Text noOfLines={2} textStyle="p">
                {accouncement.description}
              </Text>
            </Box>
          );
        })}
      </VStack>
      <Button variant="outline" color="gray.600" boxShadow="sm">
        View all
      </Button>
    </VStack>
  );
}
