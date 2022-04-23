import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const ContactCard = (props) => {
  const {
    id,
    mobileNumber = "",
    emailAddress = "",
    firstName = "",
    lastName = "",
    position = "",
    companyName = "",
  } = props.contact;
  const initialLetter = firstName.substring(0, 1);

  return (
    <Grid item xs={12} sm={4}>
      <Card
        id={`contact-${id}`}
        sx={{ maxWidth: 345 }}
        style={{ backgroundColor: "#FAF8F7" }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "black" }} aria-label="recipe">
              {initialLetter}
            </Avatar>
          }
          action={
            <IconButton aria-label="starred">
              <StarIcon />
            </IconButton>
          }
          title={`${firstName} ${lastName}`}
          titleTypographyProps={{
            variant: "h6",
          }}
          subheader={companyName}
        />
        <CardContent>
          <Typography variant="body2">
            <b>Position:</b> {position}
          </Typography>
          <Typography variant="body2">
            <b>Mobile Number:</b> {mobileNumber}
          </Typography>
          <Typography variant="body2">
            <b>Email Address:</b> {emailAddress}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="edit"
            onClick={props.onEditContact}
            id={`edit-${id}`}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={props.onDeleteContact}
            id={`delete-${id}`}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ContactCard;
