
import React from "react";
import {GlobalTypography, GridMain, ParagraphTypography, TitleTypography} from "./Article.styles";
import {Link, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";

export const Article= ()=>{
    return(
        <GridMain item xs={12} md={8}>
            <Typography variant="h6">
                From the firehose
            </Typography>
            <Divider/>
            <GlobalTypography>
                <TitleTypography
                    gutterBottom variant="h5">
                    Sample blog post
                </TitleTypography>
                <Typography paragraph caption gutterBottom >
                    April 1, 2020 by
                    <Link href='' underline='hover' color='primary'>
                        Olivier
                    </Link>
                </Typography>
                <ParagraphTypography
                    variant="body1">
                    This blog post shows a few different types of content that are supported and styled with
                    Material styles. Basic typography, images, and code are all supported.
                    You can extend these by modifying
                </ParagraphTypography>
                <ParagraphTypography
                    variant="body1">
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                </ParagraphTypography>
                <ParagraphTypography
                    variant="body1">
                    Curabitur blandit tempus porttitor.<strong> Nullam quis risus eget urna mollis</strong> ornare vel eu leo.
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                </ParagraphTypography>
                <Typography
                    variant="h6">
                    Heading
                </Typography>
                <ParagraphTypography
                    variant="body1">
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </ParagraphTypography>
                <Typography gutterBottom subtitle1>
                    Sub-heading
                </Typography>
                <ParagraphTypography
                    variant="body1">
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </ParagraphTypography>
                <Typography gutterBottom subtitle1>
                    Sub-heading
                </Typography>
                <Typography variant="body1" >
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                </Typography>
                <ul>
                    <li>   <Typography variant="body1" >
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    </Typography></li>
                    <li>   <Typography variant="body1" >
                        Donec id elit non mi porta gravida at eget metus.
                    </Typography></li>
                    <li>   <Typography variant="body1" >
                        Nulla vitae elit libero, a pharetra augue.
                    </Typography></li>
                </ul>
                <ParagraphTypography
                    variant="body1">
                    Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
                </ParagraphTypography>
                <ol>
                    <li> <Typography variant="body1" >
                        Vestibulum id ligula porta felis euismod semper.
                    </Typography></li>
                    <li> <Typography variant="body1" >
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Typography></li>
                    <li> <Typography variant="body1" >
                        Maecenas sed diam eget risus varius blandit sit amet non magna.
                    </Typography></li>
                </ol>
                <ParagraphTypography
                    variant="body1">
                    Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.
                </ParagraphTypography>
            </GlobalTypography>
            <GlobalTypography>
                <TitleTypography
                    gutterBottom variant="h5">
                    Another blog post
                </TitleTypography>
                <Typography paragraph caption gutterBottom >
                    March 23, 2020 by
                    <Link href='' underline='hover' color='primary'>
                        Matt
                    </Link>
                </Typography>
                <ParagraphTypography
                    variant="body1">
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                </ParagraphTypography>
                <ParagraphTypography
                    variant="body1">
                    Curabitur blandit tempus porttitor. <strong>
                    Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </ParagraphTypography>
                <ParagraphTypography
                    variant="body1">
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </ParagraphTypography>
                <ParagraphTypography
                    variant="body1">
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </ParagraphTypography>
            </GlobalTypography>
            <GlobalTypography>
                <TitleTypography
                    gutterBottom variant="h5">
                    New feature
                </TitleTypography>
                <Typography paragraph caption gutterBottom >
                    March 14, 2020 by
                    <Link href='' underline='hover' color='primary'>
                        Tom
                    </Link>
                </Typography>
                <ParagraphTypography
                    variant="body1">
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                </ParagraphTypography>
                <ul>
                    <li><Typography variant="body1" >
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    </Typography>
                    </li> <li><Typography variant="body1" >
                    Donec id elit non mi porta gravida at eget metus.
                </Typography>
                </li> <li><Typography variant="body1" >
                    Nulla vitae elit libero, a pharetra augue.
                </Typography></li>
                </ul>
                <ParagraphTypography
                    variant="body1">
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </ParagraphTypography>
                <ParagraphTypography
                    variant="body1">
                    Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
                </ParagraphTypography>
            </GlobalTypography>
        </GridMain>

    )
}

