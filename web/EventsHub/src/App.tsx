import { useEffect, useState } from "react"

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
      <h3 style={{ color: 'red' }}>EventsHub</h3>
      <ul>
        {activities?.map((act: Activity) => (
          <li key={act.id}>{act.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
