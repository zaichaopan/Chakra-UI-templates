import {
  Box,
  Flex,
  Button,
  Avatar,
  Text,
  Stack,
  VStack,
  HStack,
  StackDivider,
  useColorModeValue
} from "@chakra-ui/react";

export default function ProfileCard() {
  return (
    <>
      <Flex
        p="6"
        justify="space-between"
        align="center"
        direction={{
          base: "column",
          md: "row"
        }}
      >
        <Flex direction={["column", "row"]}>
          <Avatar name="profle" src="https://i.pravatar.cc/300" size="xl" />

          <VStack px="5" align={{ base: "center", md: "start" }} spacing="0">
            <Box color="gray.500">Welcome back,</Box>
            <Box fontWeight="bold" fontSize="2xl" whiteSpace="nowrap">
              Rebecca Nicholas
            </Box>
            <Box color="gray.500">Product Designer</Box>
          </VStack>
        </Flex>
        <Box mt={{ base: "4", lg: "0" }}>
          <Button variant="outline" color="gray.600" boxShadow="sm">
            View profile
          </Button>
        </Box>
      </Flex>
      <Stack
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("gray.50", "gray.800")}
        borderTop="1px"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        divider={
          <StackDivider
            borderColor={useColorModeValue("gray.200", "gray.700")}
          />
        }
      >
        <HStack flex="1" py="2" justify="center">
          <Text>14</Text>
          <Text color="gray.500">Vacations left</Text>
        </HStack>
        <HStack flex="1" justify="center" py="2">
          <Text>4</Text>
          <Text color="gray.500"> Sick days left</Text>
        </HStack>
        <HStack flex="1" py="2" border="0" justify="center">
          <Text>2</Text>
          <Text color="gray.500"> Personal days left</Text>
        </HStack>
      </Stack>
    </>
  );
}
