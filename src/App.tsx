import "./App.css";

// Radix UI Components
import {
  Theme,
  Container,
  Box,
  Button,
  Grid,
  Card,
  DropdownMenu,
  Section,
} from "@radix-ui/themes";
import { PersonIcon, GearIcon } from "@radix-ui/react-icons";

function App() {
  return (
    <Theme accentColor="red" appearance="dark" scaling="100%" radius="medium">
      <Container
        maxWidth="500px"
        style={{
          alignContent: "center",
        }}
      >
        {/* Primary Card */}
        <Card style={{ alignSelf: "start", marginTop: "20%" }}>
          <Grid columns="2">
            {/* Logo */}
            <Box style={{ alignContent: "center" }}>
              <img
                src="./src/assets/clore_light.svg"
                alt="Clore.AI Logo"
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "30px",
                  height: "100%",
                }}
              />
            </Box>

            {/* Menu/Back Button */}
            <Box
              style={{
                alignContent: "center",
                paddingRight: "10px",
                textAlign: "end",
              }}
            >
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft">
                    <GearIcon />
                  </Button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content size="1" sideOffset={4} side="left">
                  {/* Languages */}
                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger>Language</DropdownMenu.SubTrigger>
                    <DropdownMenu.SubContent>
                      <DropdownMenu.Item>EN</DropdownMenu.Item>
                      <DropdownMenu.Item>ES</DropdownMenu.Item>
                      <DropdownMenu.Item>RU</DropdownMenu.Item>
                      <DropdownMenu.Item>CH</DropdownMenu.Item>
                      <DropdownMenu.Item>TUR</DropdownMenu.Item>
                    </DropdownMenu.SubContent>
                  </DropdownMenu.Sub>

                  {/* Currency */}
                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger>Currency</DropdownMenu.SubTrigger>
                    <DropdownMenu.SubContent>
                      <DropdownMenu.Item>USD</DropdownMenu.Item>
                      <DropdownMenu.Item>EUR</DropdownMenu.Item>
                      <DropdownMenu.Item>BTC</DropdownMenu.Item>
                    </DropdownMenu.SubContent>
                  </DropdownMenu.Sub>

                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>
                    Contacts
                    <Box style={{ alignSelf: "end", marginLeft: "12px" }}>
                      <PersonIcon />
                    </Box>
                  </DropdownMenu.Item>

                  <DropdownMenu.Separator />
                  <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                    Lock
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </Box>
          </Grid>
          <Section size="2">test</Section>
        </Card>
      </Container>
    </Theme>
  );
}

export default App;
