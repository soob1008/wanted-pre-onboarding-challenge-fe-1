import { Container, Box } from "@mui/material";
import Header from "./Header";

type LayoutTypes = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutTypes) => {
  return (
    <Box>
      <Header />
      <Container maxWidth="sm">{children}</Container>
    </Box>
  );
};

export default Layout;
