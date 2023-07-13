import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(3),
    border: '1px solid #ddd',
    boxShadow: '0 4px 8px grey',
    width: 'fit-content', 
    margin: '0 auto', 
  },
  title: {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  paragraph: {
    marginBottom: theme.spacing(2),
    textAlign: 'justify',
  },
}));

const HomeContent = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" component="h1" className={classes.title}>
        Welcome to Help Desk
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        Greetings User,
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        We welcome you to our new query portal named "Help Desk". This will allow you to ask questions that will be routed to the appropriate person  who will provide you the right response in a timely manner.
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        To raise a query, please follow the steps below:
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        1. Click on "Raise a Ticket" on the top left of the screen.
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        2. Click on "Create Ticket" to create a request or "View My Ticket" to check your incidents.
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        3. Please choose the appropriate "Question category" of your query.
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        4. Customers/Users can post their queries under different query categories:
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        - Health & Household Products
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        - Accessories
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        - Beauty & Personal Care 
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        - Boy's Fashion
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        - Computers
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        - Electronics
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        - Girl's Fashion 
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        - Home & Kitchen
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        - Industrial & Scientific 
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        - Sports & Outdoors
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        5. Submit your query in detail in the field provided under "Description".
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        6. You may also choose to upload any necessary documents in the "Attachment" field.
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        7. Finally, click on the "Submit your Query" button to submit your query.
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        Our Help-Desk support team will resolve your queries shortly within the next 24 business hours.
      </Typography>
      <Typography variant="body1" className={classes.paragraph}>
        In case you have not received any response or there is a delay in resolving your queries, you will be able to escalate your query accordingly.
      </Typography>
      <Typography variant="body1">
        Thank You
        <br />
       Help Desk 
      </Typography>
    </Container>
  );
};

export default HomeContent;

