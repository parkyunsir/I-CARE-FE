import React, { useEffect } from "react";
import { Container, Grid, Typography, TextField, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "./api/api-login";


const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      if (localStorage.getItem("childId")) {
        navigate("/chatbot");
      } else {
        navigate("/addchild");
      }
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get("email");
    const password = data.get("password");

    await signin({ email: email, password: password }).then((response) => {
      if (response) {
        localStorage.setItem("ACCESS_TOKEN", response.token);
        navigate("/addchild");
        // navigate("/chatbot"); // /chatbot으로 위치 변경하기
      }
    });
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box mt={8}>
            <Typography component="h2" variant="h5" style={{ fontWeight: "bold" }}>
              <div>안녕하세요!</div>
              <div>부모클래스입니다</div>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box mt={4}>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                이메일
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                placeholder="이메일을 입력하세요"
                name="email"
                autoComplete="username"
                sx={{ backgroundColor: "white", fontSize: "1rem" }}
                InputProps={{ style: { fontSize: "1rem" } }} // Ensures input text size
              />
            </Grid>
            <Grid item xs={12}>
              <Box mt={3}>
                <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                  비밀번호
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="password"
                  placeholder="비밀번호를 입력하세요"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{ backgroundColor: "white", fontSize: "1rem" }}
                  InputProps={{ style: { fontSize: "1rem" } }} // Ensures input text size
                  InputLabelProps={{ style: { fontSize: "1rem" } }} // Ensures label text size
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mt={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ fontWeight: "bold" }}
                  sx={{ height: "56px", fontSize: "1rem", backgroundColor: "#6271F5", color: "white", boxShadow: 'none' }}
                >
                  로그인
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                style={{ fontWeight: "bold" }}
                sx={{ height: "56px", fontSize: "1rem", backgroundColor: "#FEE500", color: "black", boxShadow: 'none' }}
                startIcon={<img src={`${process.env.PUBLIC_URL}/kakaoicon.png`} alt="kakao icon" style={{ width: "24px", height: "20px", marginRight: "8px" }} />}
              >
                카카오톡으로 계속하기
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Box textAlign="center" mt={1}>
                <Link
                  to="/signup"
                  style={{
                    fontSize: "0.875rem", // Small font size
                    color: "gray", // Gray color
                    textDecoration: "none", // No underline
                  }}
                >
                  아이디 · 비밀번호 찾기ㅣ 회원가입
                </Link>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
