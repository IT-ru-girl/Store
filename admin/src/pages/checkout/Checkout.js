import React, {Component, useState} from 'react';
import {
    AppBar,
    Box, Checkbox, FormControl, FormControlLabel,

    InputLabel, ListItem, ListItemText, Paper,
    Step,
    StepLabel,
    Stepper, SvgIcon,
    TextField, Toolbar,
    Typography, useMediaQuery,
} from '@mui/material';
import {styled, ThemeProvider} from "@mui/material/styles";
import {
    StyledAppBar,
    StyledStepIcon,
    StyledButton,
    ContainerMain,
    CheckoutItem,
    StepperRow, CheckoutStepper, StyledButtonBack
} from './Checkout.styles.js';
import {Address} from './Address';

import {PaymentItem} from "./PaymentItem";
import {Order} from "./Order";
import {Payment} from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid2";


function Checkout() {
    const steps = [
        'Shipping address',
        'Payment details',
        'Review your order',
    ]

    const [currentStep,setCurrentStep ] = useState(1)

    const buttonHandleNext = () => {
        setCurrentStep((prevCurrentStep) => prevCurrentStep + 1)
    }
    const buttonHandleBack = () => {
        setCurrentStep((prevCurrentStep) => prevCurrentStep - 1);
    };
    const activeCurrentStep = (step) => {

        switch (step) {
            case 1:

                return <Address/>;
            case 2:
                return <PaymentItem />;
            case 3:
                return <Order/>;
            case 4:
                return (
                    <>
                        <Typography variant="h5" gutterBottom>
                            Thank you for your order.
                        </Typography>
                        <Typography variant="subtitle1">
                            Your order number is #2001539.
                            We have emailed your order confirmation, and will send you an update when your order has
                            shipped.
                        </Typography>
                    </>
                );
            default:
                return null;
        }
    };


    return (
        <>
            <CssBaseline/>
            <Paper elevation={4}>
                {/* App Bar */}
                <StyledAppBar color="default">
                    <Toolbar regular gutters>
                        <Typography variant="h6" noWrap color='inherit'>
                            Company name
                        </Typography>
                    </Toolbar>
                </StyledAppBar>
            </Paper>
            <ContainerMain>
                <CheckoutItem elevation={1} rounded>
                    <Typography variant="h4" align="center" gutterBottom>
                        Checkout
                    </Typography>

                    <CheckoutStepper activeStep={currentStep-1} orientaion='horizontal'>
                        <Step>
                            <StepLabel>
                                'Shipping address',
                            </StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>
                                'Payment details',
                            </StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>
                                'Review your order',
                            </StepLabel>
                        </Step>
                    </CheckoutStepper>


                    {activeCurrentStep(currentStep)}


                    {/* Next Button */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        {currentStep > 1 && currentStep < 4?
                            <StyledButtonBack onClick={buttonHandleBack}>
                                Back
                            </StyledButtonBack> : <></>
                        }
                        <
                            StyledButton onClick={buttonHandleNext}
                                         variant="contained"
                                         color="secondary">
                            {currentStep < 4 && currentStep === 3  ? 'PLACE ORDER' : 'NEXT'}
                        </StyledButton>


                    </div>
                    {/*</Box>*/}

                    {/* Footer */}
                    <Box mt={4} textAlign="center">
                        <Typography variant="body2" color="textSecondary">
                            Copyright ©{' '}
                            <a href="https://mui.com/" style={{color: 'inherit'}}>
                                Your Website
                            </a>{' '}
                            2024.
                        </Typography>
                    </Box>
                </CheckoutItem>

            </ContainerMain>
        </>


    );
}

export default Checkout;

