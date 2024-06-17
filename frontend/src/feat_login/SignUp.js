import React from "react";
import {Container, Grid, Typography, TextField, Button} from "@mui/material";
import {Link} from "react-router-dom";
import {signup} from "./api/api-login";

function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // 오브젝트에서 form에 저장된 데이터를 맵의 형태로 바꿔줌.
        const data = new FormData(event.target);
        const email = data.get("email");
        const password = data.get("password");
        const passwordverify = data.get("passwordverify");
        const nickname = data.get("nickname");

        signup({email: email, password: password, passwordverify: passwordverify, nickname: nickname}).then(
            (response) => {
                // 계정 생성 성공시 login 페이지로 리다이렉트
                window.location.href = "/addchild";
            }
        );
    };

    return (
        <Container component="main" maxWidth="xs" style={{marginTop: "8%"}} >
            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5">
                            <div> 반갑습니다 ^_^ </div> 
                            <div> 부모클래스입니다 </div>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="fname"
                            name="username"
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="아이디"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            variant="outlined"
                            required
                            fullWidth
                            name = "password"
                            label="패스워드"
                            autoFocus
                            id="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            variant="outlined"
                            required
                            fullWidth
                            name = "passwordverify"
                            label="패스워드 확인"
                            autoFocus
                            id="passwordverify"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            variant="outlined"
                            required
                            fullWidth
                            name = "nickname"
                            label="닉네임"
                            autoFocus
                            id="nickname"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary">
                            회원가입
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link to="/login" variant="body2">
                            이미 계정이 있습니까? 로그인하세요.
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};
export default SignUp;