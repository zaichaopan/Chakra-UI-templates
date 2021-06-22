import React from "react";
import {
  Box,
  Button,
  Avatar,
  Text,
  VStack,
  HStack,
  Heading,
  StackDivider,
  useColorModeValue
} from "@chakra-ui/react";

const recentHires = [
  { fullName: "lenoardkrasner", username: "@lenoardkrasner" },
  { fullName: "lenoardkrasner", username: "@lenoardkrasner" },
  { fullName: "lenoardkrasner", username: "@lenoardkrasner" },
  { fullName: "lenoardkrasner", username: "@lenoardkrasner" }
];

export default function RecentHires() {
  return (
    <VStack mt="6" align="stretch" p="6" spacing={6} layerStyle="base">
      <Heading variant="h2">Recent Hires</Heading>
      <VStack
        divider={
          <StackDivider
            borderColor={useColorModeValue("gray.200", "gray.800")}
          />
        }
        spacing={5}
        align="stretch"
      >
        {recentHires.map((hire) => (
          <HStack justify="space-between">
            <HStack spacing={6}>
              <Avatar
                size="sm"
                src="https://i.pravatar.cc/300"
                name="profile"
              />
              <Box>
                <Text fontSize="sm" fontWeight="medium">
                  {hire.fullName}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {hire.username}
                </Text>
              </Box>
            </HStack>
            <Button
              size="sm"
              variant="outline"
              color="gray.600"
              boxShadow="sm"
              rounded="full"
            >
              View
            </Button>
          </HStack>
        ))}
      </VStack>
      <Button variant="outline" color="gray.600" boxShadow="sm">
        View all
      </Button>
    </VStack>
  );
}
