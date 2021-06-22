import {
  Container,
  Grid,
  Box,
  Image,
  Icon,
  List,
  ListItem,
  Input,
  InputGroup,
  InputLeftElement,
  chakra,
  Avatar,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  HiOutlineBell,
  HiOutlineSearch,
  HiOutlineMoon,
  HiOutlineSun
} from "react-icons/hi";

const Nav = chakra("nav", {
  baseStyle: {
    display: "flex",
    overflowX: "auto",
    gridRow: ["2/3", null, "1/1"],
    gridColumn: [null, null, "1/3"],
    mx: ["2", null, "0"],
    "&::-webkit-scrollbar": {
      display: "none"
    }
  }
});

function HeaderDivider() {
  return (
    <Box
      h="1px"
      as="hr"
      border="0"
      bgGradient={useColorModeValue(
        "linear(to-r, gray.500, gray.400)",
        "linear(to-r, gray.700, gray.600)"
      )}
    ></Box>
  );
}

function SearchBox({ children }: { children: ReactNode }) {
  return (
    <Box
      pt={{
        base: "3",
        lg: "0"
      }}
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon mx="4" boxSize="4" as={HiOutlineSearch}></Icon>}
        />
        {children}
      </InputGroup>
    </Box>
  );
}

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      maxW="container.2xl"
      display="grid"
      gridTemplateRows="auto 1px 1fr auto"
      px={{
        base: "3",
        md: "10"
      }}
      color="gray.100"
    >
      <HStack justify="space-between" py="2">
        <Image
          boxSize="50"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="logo"
        />
        <HStack>
          <IconButton
            aria-label="Switch to night mode"
            variant="outline"
            colorScheme="white"
            border="0"
            icon={
              <Icon
                as={colorMode === "light" ? HiOutlineMoon : HiOutlineSun}
                mx="2"
                boxSize="6"
              ></Icon>
            }
            onClick={toggleColorMode}
          />

          <Icon as={HiOutlineBell} mx="4" boxSize="6"></Icon>
          <Avatar size="md" src="https://i.pravatar.cc/300" name="profile" />
        </HStack>
      </HStack>

      <HeaderDivider />

      <Grid
        as="section"
        py="3"
        alignItems="center"
        templateRows={["repeat(2,1fr)", null, "1fr"]}
        templateColumns={["1fr", null, "repeat(3, 1fr)"]}
        gap={[null, null, "8"]}
      >
        <Nav>
          <List
            display="grid"
            gridTemplateColumns="repeat(5, auto)"
            alignItems="center"
            whiteSpace="nowrap"
            gridGap={10}
          >
            <ListItem>Home</ListItem>
            <ListItem>Profile</ListItem>
            <ListItem>Resources</ListItem>
            <ListItem>Company Directory</ListItem>
            <ListItem>Opening</ListItem>
          </List>
        </Nav>
        <SearchBox>
          <Input
            bg={useColorModeValue("#589EB8", "gray.600")}
            placeholder="search"
            type="text"
            border="0px"
            color="gray.100"
            _placeholder={{ color: "gray.200" }}
          />
        </SearchBox>
      </Grid>
    </Container>
  );
}
