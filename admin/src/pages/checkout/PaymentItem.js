import {Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

export const PaymentItem = () => {
    return (
        <>
            <Typography variant="h6"
                        gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>

                <Grid item xs={12} sm={6}>
                    <TextField variant="standard"
                               required
                               label='Name on card'
                               fullWidth>
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField variant="standard"
                               required
                               label='Card number'
                               fullWidth>
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField variant="standard"
                               required
                               label='Expiry date'
                               fullWidth>
                    </TextField>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField variant="standard"
                               required
                               label='CVV'
                               fullWidth>
                    </TextField>
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel control={<Checkbox name="savePayment"/>}
                                      label='Remember credit
                                     card details
                                     for next time'/>
                </Grid>
            </Grid>
        </>
    )
}
