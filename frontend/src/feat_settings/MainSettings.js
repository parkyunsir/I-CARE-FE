import React from "react";
import { Container, Grid, Typography, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

function MainSettings() {
    const navigate = useNavigate();

    const handleNavigateToChangePassword = () => {
        navigate("/changepassword");
    };

    const handleNavigateToSelectChild = () => {
        navigate("/selectchild");
    };

    return (
        <div className="app-wrapper">
            <div className="app-container">

                <Header title="설정" type="back" />
                <Grid container direction="column" alignItems="stretch" spacing={1}  textAlign=  "left">
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            color="primary"
                            style={{ backgroundColor: "#FFFFFF", color: "#000000", textAlign: "left" , height: "56px" }}
                        >
                            icare@naver.com
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            color="primary"
                            style={{ backgroundColor: "#FFFFFF", color: "#000000", textAlign: "left" , height: "56px"}}
                            onClick={handleNavigateToChangePassword}
                        >
                            내 정보
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            color="primary"
                            style={{ backgroundColor: "#FFFFFF", color: "#000000", textAlign: "left" , height: "56px"}}
                            onClick={handleNavigateToSelectChild}
                        >
                            자녀 정보
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            color="primary"
                            style={{ backgroundColor: "#FFFFFF", color: "#000000", textAlign: "left" , height: "56px"}}
                        >
                            로그아웃
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            color="primary"
                            style={{ backgroundColor: "#FFFFFF", color: "#000000", textAlign: "left" , height: "56px"}}
                        >
                            회원탈퇴
                        </Button>
                    </Grid>
                </Grid>
                </div>
    </div>
    );
}

export default MainSettings;
