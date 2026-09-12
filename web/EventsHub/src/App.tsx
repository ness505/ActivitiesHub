import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react"

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/v1/events')
      .then(response => response.json())
      .then(data => setActivities(data));

    return () => { };
  }, []);

  return (
    <>
      <Fragment>
        <Typography variant="h3">EventsHub</Typography>
        <List>
          {activities?.map((act: Activity) => (
            <ListItem key={act.id}>
              <ListItemText primary={act.title} secondary={act.description} />
            </ListItem>
          ))}
        </List>
      </Fragment>

    </>
  )
}

export default App
