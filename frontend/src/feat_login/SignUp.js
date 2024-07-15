import React from "react";
import {Container, Grid, Typography, TextField, Button, Box} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {signup} from "./api/api-login";

function SignUp() {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        // 오브젝트에서 form에 저장된 데이터를 맵의 형태로 바꿔줌.
        const data = new FormData(event.target);
        const email = data.get("email");
        const password = data.get("password");
        const nickname = data.get("nickname");

        await signup({email: email, password: password, nickname: nickname}).then(
            (response) => {
                // 계정 생성 성공시 login 페이지로 리다이렉트?? 자녀추가 페이지로 이동해야 하는 것아닌가?
                navigate("/login");
                //window.location.href = "/addchild";
            }
        );
    };

    return (
        <Container component="main" maxWidth="xs" style={{marginTop: "8%"}} >
            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box mt={7}>
                            <Typography component="h2" variant="h5" style= {{ fontWeight: "bold"}}>
                                <div> 반갑습니다 :) </div> 
                                <div> 부모클래스입니다 </div>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt = {2}>
                        <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                            이메일
                        </Typography>
                        <TextField
                            autoComplete="fname"
                            name="email"
                            variant="outlined"
                            fullWidth
                            id="email"
                            placeholder="이메일을 입력하세요"
                            autoFocus
                        />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt = {2}>
                        <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                            비밀번호 입력
                        </Typography>
                        <TextField 
                            variant="outlined"
                            fullWidth
                            name = "password"
                            placeholder="비밀번호을 입력하세요"
                            autoFocus
                            id="password"
                            autoComplete="current-password"
                        />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt = {2}>
                            <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                                비밀번호 확인
                            </Typography>
                            <TextField 
                                variant="outlined"
                                fullWidth
                                name = "passwordverify"
                                placeholder="비밀번호를 입력하세요"
                                autoFocus
                                id="passwordverify"
                                autoComplete="current-password"
                        />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt = {2}>
                            <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                                닉네임
                            </Typography>
                        <TextField 
                            variant="outlined"
                            fullWidth
                            name = "nickname"
                            placeholder="닉네임을 입력하세요"
                            autoFocus
                            id="nickname"
                            autoComplete="current-password"
                        />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt = {2}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                style={{ fontWeight: "bold" }}
                                sx={{ height: "56px", fontSize: "1rem", backgroundColor: "#D9D9D9", color: "white", boxShadow: 'none' }}
                                color="primary">
                                회원가입
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};
export default SignUp;