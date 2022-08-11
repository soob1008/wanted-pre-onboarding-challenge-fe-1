import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

interface FormTypes {
  email: string | undefined;
  password: string | undefined;
}

const LoginForm = () => {
  const [form, setForm] = useState<FormTypes>({
    email: "",
    password: "",
  });

  const [isDisable, setIsDisable] = useState(true);
  const emailRegx = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const keyupHandler = () => {
    if (!form.email) return false;

    if (
      form.email !== "" &&
      form.password !== "" &&
      emailRegx.test(form.email)
    ) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        onSubmit={onSubmitHandler}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          //label="Email Address"
          name="email"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          onKeyUp={keyupHandler}
          value={form.email || ""}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="off"
          onKeyUp={keyupHandler}
          value={form.password || ""}
          onChange={handleChange}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, height: 45 }}
          disabled={isDisable ? true : false}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
