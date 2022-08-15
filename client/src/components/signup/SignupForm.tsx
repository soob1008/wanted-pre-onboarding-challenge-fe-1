import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLogin } from "../../api/httpRequest";
import { UserTypes } from "../../types/user";

const SignupForm = () => {
  const queryClient = useQueryClient();

  const [form, setForm] = useState<UserTypes>({
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
    if (!form.email || !form.password) return false;

    if (
      form.email !== "" &&
      form.password !== "" &&
      form.password.length >= 8 &&
      emailRegx.test(form.email)
    ) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };

  // const { mutate } = useMutation(createLogin, {
  //   onSuccess: (response) => {
  //     queryClient.invalidateQueries(["users"]);
  //     console.log(response);
  //   },
  //   onError: (e: any) => {
  //     // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
  //     // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
  //     console.log(e.message);
  //   },
  // });

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
        Sign Up
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

export default SignupForm;
