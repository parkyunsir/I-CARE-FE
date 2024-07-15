import React, { useState } from "react";
import { Container, Grid, Typography, TextField, Button, Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
// 추후 회원가입 버튼 누르면 자녀를 등록할 수 있도록 수정

function PasswordChange() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

    };
    const handleNavigateToVerifyPassword = () => {
        navigate("/verifypassword");
    };

    return (
        <div className="app-wrapper">
            <div className="app-container">
                <Header title="내 정보" type="back"> </Header>
                <Box mt={2}>
                <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                        현재 비밀번호
                        </Typography>
                        <TextField
                        variant="outlined"
                        fullWidth
                        id="email"
                        placeholder="현재 비밀번호를 입력하세요"
                        name="email"
                        autoComplete="username"
                        sx={{ backgroundColor: "white", fontSize: "1rem" }}
                        InputProps={{ style: { fontSize: "1rem" } }} // Ensures input text size
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt={6}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={handleNavigateToVerifyPassword}
                            style={{ fontWeight: "bold" }}
                            sx={{ height: "56px", fontSize: "1rem", backgroundColor: "#6271F5", color: "white", boxShadow: 'none' }}
                        >
                            비밀번호 확인
                        </Button>
                        </Box>
                    </Grid>
                    </Grid>
                </form>
                </Box>
            </div>
      </div>
    );
};

export default PasswordChange;
