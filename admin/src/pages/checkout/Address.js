import Grid from "@mui/material/Grid2";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    TextField,
    Typography,
} from '@mui/material';

export const Address = () => {
    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel formControl animated required htmlFor="firstName">
                            First name
                        </InputLabel>
                        <TextField id="firstName" name="firstName" required fullWidth/>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel required htmlFor="lastName">
                            Last name
                        </InputLabel>
                        <TextField id="lastName" name="lastName" required fullWidth/>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel required htmlFor="address1">
                            Address line 1
                        </InputLabel>
                        <TextField id="address1" name="address1" required fullWidth/>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="address2">Address line 2</InputLabel>
                        <TextField id="address2" name="address2" fullWidth/>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel required htmlFor="city">
                            City
                        </InputLabel>
                        <TextField id="city" name="city" required fullWidth/>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="state">State/Province/Region</InputLabel>
                        <TextField id="state" name="state" fullWidth/>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel required htmlFor="zip">
                            Zip / Postal code
                        </InputLabel>
                        <TextField id="zip" name="zip" required fullWidth/>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel required htmlFor="country">
                            Country
                        </InputLabel>
                        <TextField id="country" name="country" required fullWidth/>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox name="saveAddress"/>}
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
        </div>
    )
}
