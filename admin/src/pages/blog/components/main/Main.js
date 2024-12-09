import React from "react";
import Grid from "@mui/material/Grid2";
import {Link, Typography} from "@mui/material";
import Divider from '@mui/material/Divider';
import {
    GlobalTypography,
    GridContainer,
    GridMain,
    ParagraphTypography,
    TitleTypography
} from "../article/Article.styles";
import About from "../about/About";
import Item from "../../Item";
import Article from "../article/Article";

// or


function Main() {
    return (
        <GridContainer container spacing={5}>
            <Article/>
            <Item/>
        </GridContainer>
    )


//     <Grid container spacing='5'
//        sx={{
//            display: 'flex',
//            flexWrap: 'wrap',
//            boxSizing: 'border-box',
//            // width: 'calc(100% + 40px)',
//            marginTop: '24px'
//        }}>
// <Grid xs='12' md='8'
//       sx={{
//           padding: '20px'
//       }}>
//     <Typography
//       variant="h6">
//         From the firehose
// </Typography>
//     <Divider/>
//     <Typography sx={{
//         padding: '24px 0px;'
//     }}>
//         <Typography
//             sx={{
//                 marginBottom: '0.35em'
//             }}
//             gutterBottom variant="h5">
//             Sample blog post
//         </Typography>
//         <Typography paragraph caption gutterBottom >
//             April 1, 2020 by
//                  <Link href='' underline='hover' color='primary'>
//                     Olivier
//                 </Link>
//         </Typography>
//         <Typography
//             sx={{
//                 marginBottom: '16px'
//             }}
//             variant="body1">
//             This blog post shows a few different types of content that are supported and styled with
//             Material styles. Basic typography, images, and code are all supported.
//             You can extend these by modifying
//         </Typography>
//         <Typography
//             sx={{
//                 marginBottom: '16px'
//             }}
//             variant="body1">
//             Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
//             Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
//             Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
//         </Typography>
//         <Typography
//             sx={{
//                 marginBottom: '16px'
//             }}
//             variant="body1">
//             Curabitur blandit tempus porttitor.<strong> Nullam quis risus eget urna mollis</strong> ornare vel eu leo.
//             Nullam id dolor id nibh ultricies vehicula ut id elit.
//         </Typography>
//     </Typography>
//
// </Grid>
//        </Grid>


}

export default Main;
