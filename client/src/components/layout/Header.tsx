import { AppBar, Toolbar, Typography, styled } from "@mui/material";

const Header = () => {
  return (
    <HeaderAppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          TODOLIST
        </Typography>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.primary.main,
}));
