import {
  Box,
  Icon,
  Center,
  Text,
  Stack,
  HStack,
  Heading,
  useColorModeValue
} from "@chakra-ui/react";
import {
  HiOutlineArrowUp,
  HiOutlineClock,
  HiOutlineGift,
  HiOutlineUsers,
  HiOutlineBriefcase,
  HiOutlineTrendingUp,
  HiOutlineBookOpen
} from "react-icons/hi";

const actions = [
  {
    title: "Request time off",
    icon: HiOutlineClock,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quasi eaque sequi sint, ratione laudantium nobis a culpa pariatur architecto!"
  },
  {
    title: "Benefit",
    icon: HiOutlineGift,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quasi eaque sequi sint, ratione laudantium nobis a culpa pariatur architecto!"
  },
  {
    title: "Schedule a one-on-one",
    icon: HiOutlineUsers,

    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quasi eaque sequi sint, ratione laudantium nobis a culpa pariatur architecto!"
  },
  {
    title: "PayRoll",
    icon: HiOutlineBriefcase,

    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quasi eaque sequi sint, ratione laudantium nobis a culpa pariatur architecto!"
  },
  {
    title: "Submit an expensive",
    icon: HiOutlineTrendingUp,

    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quasi eaque sequi sint, ratione laudantium nobis a culpa pariatur architecto!"
  },
  {
    title: "Training",
    icon: HiOutlineBookOpen,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quasi eaque sequi sint, ratione laudantium nobis a culpa pariatur architecto!"
  }
];

export default function ActionCards() {
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <>
      {actions.map((action) => (
        <Box
          borderBottom="1px"
          borderColor={borderColor}
          _odd={{
            sm: {
              borderEnd: "1px",
              borderColor
            }
          }}
        >
          <Box p="6">
            <HStack pb="10" justify="space-between">
              <Center bg="purple.50" h="10" w="10" rounded="lg">
                <Icon boxSize="6" as={action.icon} color="purple.500"></Icon>
              </Center>
              <Icon
                boxSize="7"
                as={HiOutlineArrowUp}
                color="gray.300"
                transform="rotate(45deg)"
              ></Icon>
            </HStack>
            <Stack>
              <Heading variant="h2">{action.title}</Heading>
              <Text>{action.description}</Text>
            </Stack>
          </Box>
        </Box>
      ))}
    </>
  );
}
