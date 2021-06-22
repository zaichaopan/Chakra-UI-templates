import {
  Container,
  Grid,
  Box,
  chakra,
  SimpleGrid,
  Divider,
  useColorModeValue
} from "@chakra-ui/react";
import ProfileCard from "./ProfileCard";
import Announcements from "./Announcements";
import RecentHires from "./RecentHires";
import ActionCards from "./ActionCards";
import Header from "./Header";

const Content = chakra("div", {
  baseStyle: {
    display: "grid",
    mt: "-100px",
    gridTemplateColumns: {
      base: "1fr",
      lg: "repeat(3,1fr)"
    },
    gridTemplateRows: {
      base: "repeat(3, auto)",
      lg: "repeat(2,auto)"
    },
    gridGap: "8"
  }
});

export default function Home() {
  return (
    <Grid
      minH="100vh"
      templateRows={["280px 1fr"]}
      bg={useColorModeValue("gray.50", "gray.900")}
    >
      <Box
        bgGradient={useColorModeValue(
          "linear(to-r, #285982, #3F8EAD)",
          "linear(to-r, gray.800, gray.700)"
        )}
      >
        <Header />
      </Box>
      <Container
        maxW="container.2xl"
        px={{
          base: "3",
          md: "10"
        }}
      >
        <Content>
          <Grid
            layerStyle="base"
            overflow="hidden"
            row={{
              sm: "1/2"
            }}
            column={{
              base: "1/2",
              lg: "1/3"
            }}
          >
            <ProfileCard />
          </Grid>

          <Box
            gridColumn={{
              base: "1/2",
              lg: "3/4"
            }}
            gridRow={{
              sm: "2/3",
              lg: "1/3"
            }}
          >
            <Announcements />
            <RecentHires />
          </Box>

          <SimpleGrid
            row={{
              sm: "3/4",
              lg: "2/3"
            }}
            column={{
              sm: "1/2",
              lg: "1/3"
            }}
            columns={{
              base: 0,
              md: 2
            }}
            layerStyle="base"
          >
            <ActionCards></ActionCards>
          </SimpleGrid>
        </Content>

        <Box py="6">
          <Divider borderColor={useColorModeValue("gray.300", "gray.700")} />
        </Box>
      </Container>
    </Grid>
  );
}
