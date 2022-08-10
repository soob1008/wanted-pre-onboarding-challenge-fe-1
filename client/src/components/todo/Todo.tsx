import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  styled,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const Todo = () => {
  return (
    <Box>
      <Typography variant="h2" sx={{ fontSize: 18 }}>
        TODO INPUT
      </Typography>
      <FormControl sx={{ mt: 2, width: "100%" }}>
        <Box sx={{ display: "flex" }}>
          <TextField
            id="outlined-basic"
            label="todolist"
            variant="outlined"
            fullWidth
          />
          <Button variant="outlined" sx={{ ml: 1 }}>
            ADD
          </Button>
        </Box>
      </FormControl>
      <Grid item xs={12} md={6}>
        <Typography
          sx={{ mt: 4, mb: 2, fontSize: 18 }}
          variant="h2"
          component="div"
        >
          TODO LIST
        </Typography>
        <Box>
          <List>
            <StyledListItem
              secondaryAction={
                <>
                  <IconButton edge="end" aria-label="update" sx={{ mr: 0.2 }}>
                    <ModeEditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText primary="Single-line item" />
              {/* <Input type="text" sx={{ border: "none" }} /> */}
            </StyledListItem>
            <StyledListItem
              secondaryAction={
                <>
                  <IconButton edge="end" aria-label="update" sx={{ mr: 0.2 }}>
                    <ModeEditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText primary="Single-line item" />
            </StyledListItem>
          </List>
        </Box>
      </Grid>
    </Box>
  );
};

export default Todo;

const StyledListItem = styled(ListItem)(({ theme }) => ({
  background: theme.palette.primary.light,
  marginBottom: 8,
}));
