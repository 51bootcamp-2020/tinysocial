import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    margin: '5em auto 0',
    flexGrow: 1,
    maxWidth: '50%',
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>WELCOME</h3>
      <p>We're Tiny social, a team of creative engineers who love to read and write good code.</p>
      <h3>FAQ</h3>
      <TreeView>
        <TreeItem nodeId="1" label="How do I start a bookclub?">
          <TreeItem nodeId="2" label="Please feel free to inquire about Book Leader positions and opportunities by sending us an email" />
        </TreeItem>
        <TreeItem nodeId="3" label="How can i join the bookclub?">
          <TreeItem nodeId="4" label="All bookclub events are featured on the List Page, where you can browse and select the events you wish to attend." />
        </TreeItem>
        <TreeItem nodeId="5" label="Is there any cost involved?">
          <TreeItem nodeId="6" label="Each event varies in cost on a scale between $20-40. This small fee supports Book Leaders and allows Reinventing the Book Club to operate." />
        </TreeItem>
        <TreeItem nodeId="7" label="Is this bookclub only in the Bay Area?">
          <TreeItem nodeId="8" label="Tiny social is based in San Mateo, but as our reader-base grows, we hope to expand to other surrounding locations across the state. Stay tuned for more updates by following us on Instagram (@___)" />
        </TreeItem>
        <TreeItem nodeId="9" label="How many people are in a bookclub?">
          <TreeItem nodeId="10" label="The number of attendees is at the discretion of the Book Leader and typically ranges from 10 to 20." />
        </TreeItem>
        <TreeItem nodeId="11" label="What type of books are read in a bookclub?">
          <TreeItem nodeId="12" label="We aim to cover all categories of book genres and are working on diversifying our events. We are open to all suggestions, which can be made to hello@ty." />
        </TreeItem>
        <TreeItem nodeId="13" label="How can I cancel my purchase? Can I get a refund?">
          <TreeItem nodeId="14" label="Attendees can get a full refund up to three days prior to the event. For more details, please check our Refund Policy." />
        </TreeItem>
        <TreeItem nodeId="15" label="How long is each bookclub meeting?">
          <TreeItem nodeId="16" label="Event-specific details will be available on the event page." />
        </TreeItem>
      </TreeView>
    </div>
  );
}
