import {ListItem, ListItemText, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {ORDERLIST} from "./const/Checkout.const";

export const Order = () => {
    return (
        <>
            <Typography variant="h6"
                        gutterBottom>Order summary</Typography>
            {ORDERLIST.map((item) => (
                <ListItem>
                    <ListItemText
                        primary={<Typography variant="body1">
                            {item.product}
                        </Typography>}
                        secondary={<Typography variant="body2" color="text.secondary">
                            {item.quality}
                        </Typography>}/>
                    <Typography variant="body2">{item.price}</Typography>
                </ListItem>))}
            <Grid container spacing={2}>
                {/* Shipping details */}
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Shipping
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        John Smith
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        1 Material-UI Drive, Reactville, Anytown, 99999, USA
                    </Typography>
                </Grid>

                {/* Payment details */}
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Payment details
                    </Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="body1" gutterBottom>Card type</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" gutterBottom>Visa</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" gutterBottom>Card holder</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" gutterBottom>Mr John Smith</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" gutterBottom>Card number</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" gutterBottom>xxxx-xxxx-xxxx-1234</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" gutterBottom>Expiry date</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" gutterBottom>04/2024</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
