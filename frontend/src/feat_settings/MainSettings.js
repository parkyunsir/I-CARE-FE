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
            <Header title="설정" type="back" />
            <div>
                <Grid container direction="column" alignItems="stretch" textAlign=  "left">
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{ backgroundColor: "#FFFFFF", color: "#000000", border: '1px solid gray', textAlign: "left" , height: "56px" ,
                                '&:hover': { backgroundColor: "#ddd", border: '1px solid gray' }
                            }}
                        >
                            icare@naver.com
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{ backgroundColor: "#FFFFFF", color: "#000000", border: '1px solid gray', textAlign: "left" , height: "56px" ,
                                '&:hover': { backgroundColor: "#ddd", border: '1px solid gray' }
                            }}
                            onClick={handleNavigateToChangePassword}
                        >
                            내 정보
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{ backgroundColor: "#FFFFFF", color: "#000000", border: '1px solid gray', textAlign: "left" , height: "56px" ,
                                '&:hover': { backgroundColor: "#ddd", border: '1px solid gray' }
                            }}
                            onClick={handleNavigateToSelectChild}
                        >
                            자녀 정보
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{ backgroundColor: "#FFFFFF", color: "#000000", border: '1px solid gray', textAlign: "left" , height: "56px" ,
                                '&:hover': { backgroundColor: "#ddd", border: '1px solid gray' }
                            }}
                        >
                            로그아웃
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{ backgroundColor: "#FFFFFF", color: "#000000", border: '1px solid gray', textAlign: "left" , height: "56px" ,
                                '&:hover': { backgroundColor: "#ddd", border: '1px solid gray' }
                            }}
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
