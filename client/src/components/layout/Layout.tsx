import { Container, Box, styled } from "@mui/material";
import Header from "./Header";

type LayoutTypes = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutTypes) => {
  return (
    <Box>
      <Header />
      <StyledWrap maxWidth="sm">{children}</StyledWrap>
    </Box>
  );
};

export default Layout;

const StyledWrap = styled(Container)({
  paddingTop: 60,
});
