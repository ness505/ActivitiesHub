import { useEffect, useState } from "react"

function App() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/v1/events')
      .then(response => response.json())
      .then(data => setActivities(data));

    return () => { };
  }, []);

  return (
    <>
      <h3 style={{ color: 'red' }}>EventsHub</h3>
      <ul>
        {activities?.map((act) => (
          <li key={act.id}>{act.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
