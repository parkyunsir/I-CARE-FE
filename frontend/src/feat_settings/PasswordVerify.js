import React, { useState } from "react";
import { Container, Grid, Typography, TextField, Button, Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
// 추후 회원가입 버튼 누르면 자녀를 등록할 수 있도록 수정

function MainSettings() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <div className="app-wrapper">
            <div className="app-container">
                <Header title="내 정보" type="back"> </Header>
                <Grid container spacing={2}>
                </Grid>
                <Box mt={4}>
                <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                        새 비밀번호
                        </Typography>
                        <TextField
                        variant="outlined"
                        fullWidth
                        id="email"
                        placeholder="새 비밀번호를 입력하세요."
                        name="email"
                        autoComplete="username"
                        sx={{ backgroundColor: "white", fontSize: "1rem" }}
                        InputProps={{ style: { fontSize: "1rem" } }} // Ensures input text size
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt={3}>
                        <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                            새 비밀번호 확인
                        </Typography>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="password"
                            placeholder="새 비밀번호를 입력하세요."
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
                        <Box mt={3}>
                        <Typography component="label" variant="body2" style={{ marginBottom: "10px" }}>
                        닉네임
                        </Typography>
                        <TextField
                        variant="outlined"
                        fullWidth
                        id="email"
                        placeholder="변경할 닉네임을 입력하세요."
                        name="email"
                        autoComplete="username"
                        sx={{ backgroundColor: "white", fontSize: "1rem" }}
                        InputProps={{ style: { fontSize: "1rem" } }} // Ensures input text size
                        />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mt={22}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ fontWeight: "bold" }}
                            sx={{ height: "56px", fontSize: "1rem", backgroundColor: "#6271F5", color: "white", boxShadow: 'none' }}
                        >
                            내 정보 수정하기
                        </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box textAlign="center" mt={1}>
                        </Box>
                    </Grid>
                    </Grid>
          </form>
        </Box>
        </div>
        </div>
    );
};

export default MainSettings;
