import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import FormInputField from "../core/FormInputField/FormInputField";
import FormRadioGroupField from "../core/FormRadioGroupField/FormRadioGroupField";
import * as Yup from "yup";

import { contactService } from "../services";

const useStyles = makeStyles((theme) => ({
  controls: {
    justifyContent: "flex-end",
    margin: "1rem 0 2rem 0",
  },
  primaryTitle: {
    marginTop: "0.5rem",
  },
  secondaryTitle: {
    margin: "0.5rem 0 0.5rem 0",
  },
  form: {
    border: "1px solid rgb(234 224 220)",
    borderRadius: "3px",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    [theme.breakpoints.up("md")]: {
      marginTop: "2rem",
    },
  },
  formRadioGroup: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
}));

const AddEditContact = ({ history, match }) => {
  const { id } = match.params;
  const classes = useStyles();
  const [contact, setContact] = useState(null);
  const isNew = !id;

  useEffect(() => {
    if (!isNew) {
      contactService.getById(id).then((contact) => {
        setContact(contact);
      });
    }
  }, [id, isNew]);

  const initialValues = {
    title: contact != null ? contact.title : "",
    firstName: contact != null ? contact.firstName : "",
    lastName: contact != null ? contact.lastName : "",
    gender: contact != null ? contact.gender : "",
    emailAddress: contact != null ? contact.emailAddress : "",
    mobileNumber: contact != null ? contact.mobileNumber : "",
    address: contact != null ? contact.address : "",
    companyName: contact != null ? contact.companyName : "",
    position: contact != null ? contact.position : "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    emailAddress: Yup.string().required("Role is required"),
    mobileNumber: Yup.string().required("Mobile Number is required"),
    companyName: Yup.string().required("Company Name is required"),
    position: Yup.string().required("Position is required"),
  });

  const handleSubmit = (fields, { setStatus, setSubmitting }) => {
    setStatus();
    if (isNew) {
      createContact(fields, setSubmitting);
    } else {
      updateContact(id, fields, setSubmitting);
    }
  };

  const createContact = (fields, setSubmitting) => {
    contactService
      .create(fields)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setSubmitting(false);
      });
  };

  const updateContact = (id, fields, setSubmitting) => {
    contactService
      .update(id, fields)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => {
        return (
          <Form className={classes.form}>
            <Container>
              <Typography
                variant="h4"
                component="h2"
                className={classes.primaryTitle}
              >
                Add Contact
              </Typography>
              <hr />
              <Typography
                variant="h6"
                component="h5"
                className={classes.secondaryTitle}
              >
                Primary Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Field
                    component={FormInputField}
                    name="title"
                    label="Title"
                    fullWidth
                    variant="outlined"
                    maxLength="3"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Field
                    component={FormInputField}
                    name="firstName"
                    label="First Name"
                    fullWidth
                    variant="outlined"
                    error={errors.firstName}
                    helperText={errors.firstName}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    component={FormInputField}
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    variant="outlined"
                    error={errors.lastName}
                    helperText={errors.lastName}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <Field
                    component={FormRadioGroupField}
                    name="gender"
                    label="Gender"
                    variant="outlined"
                    className={classes.formRadioGroup}
                  >
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                    />
                  </Field>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Field
                    component={FormInputField}
                    name="mobileNumber"
                    label="Mobile Number"
                    fullWidth
                    variant="outlined"
                    error={errors.mobileNumber}
                    helperText={errors.mobileNumber}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    component={FormInputField}
                    name="emailAddress"
                    label="Email Address"
                    fullWidth
                    variant="outlined"
                    type="email"
                    error={errors.emailAddress}
                    helperText={errors.emailAddress}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <Field
                    component={FormInputField}
                    name="address"
                    label="Address"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    component={FormInputField}
                    name="companyName"
                    label="Company Name"
                    fullWidth
                    variant="outlined"
                    error={errors.companyName}
                    helperText={errors.companyName}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Field
                    component={FormInputField}
                    name="position"
                    label="Position"
                    fullWidth
                    variant="outlined"
                    error={errors.position}
                    helperText={errors.position}
                  />
                </Grid>
              </Grid>
              <Grid className={classes.controls} container spacing={0}>
                <Button
                  color="primary"
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                  Save
                </Button>
                <Link to="/" className="btn btn-link">
                  Cancel
                </Link>
              </Grid>
            </Container>
            <Container></Container>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddEditContact;
