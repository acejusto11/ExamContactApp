import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import { contactService } from "../services/contactService";
import ContactList from "../components/ContactList/ContactList";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "1rem 0rem 1rem 0rem",
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: theme.spacing(2),
  },
  searchInput: {
    width: "100%",
    "& input": {
      padding: "0.75rem 0 0.75rem 0",
    },
  },
  controlContainer: {
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1rem",
    },
  },
}));

const ContactListContainer = () => {
  const classes = useStyles();
  const history = useHistory();
  const [contacts, setContacts] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    contactService
      .getAll()
      .then((c) => setContacts(c))
      .catch((error) => {});
  }, []);

  const handleDeleteContact = (id) => {
    contactService.delete(id).then(() => {
      contactService.getAll().then((c) => setContacts(c));
    });
  };

  const handleEditContact = (id) => {
    history.push(`/contact/${id}`);
  };

  const search = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = contacts?.filter((contact) => {
        return (
          contact.firstName.toLowerCase().includes(keyword.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(keyword.toLowerCase())
        );
      });
      setContacts(results);
    } else {
      contactService
        .getAll()
        .then((c) => setContacts(c))
        .catch((error) => {});
    }
    setSearchText(keyword);
  };

  const handleAddContactClick = () => history.push({ pathname: "/contact" });

  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <Grid container className={classes.controlContainer}>
        <Grid item xs={12} md={6}>
          <Button
            id="addContactBtn"
            color="primary"
            className={classes.button}
            variant="contained"
            size="large"
            onClick={handleAddContactClick}
          >
            Add a contact
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <OutlinedInput
            id="searchInput"
            value={searchText}
            onChange={search}
            className={classes.searchInput}
            placeholder="Search by Name"
            startAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} alignItems="stretch">
        <ContactList
          contacts={contacts}
          onEditContact={handleEditContact}
          onDeleteContact={handleDeleteContact}
        />
      </Grid>
    </Container>
  );
};

export default ContactListContainer;
