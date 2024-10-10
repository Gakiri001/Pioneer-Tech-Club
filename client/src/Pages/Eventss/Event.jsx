import React,{useState, useEffect} from 'react'
import { apiurl } from '../../utils/config'
import { MdOutlineSecurity } from "react-icons/md";

function Event() {
  const [event, setEvent] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${apiurl}/api/plan/allevents/`)
        console.log(response)

        const data = await response.json();
        console.log(data)

        if(data.success === true){
          setEvent(data.eventDetails)
        }
        else{
          setError(data.message)
        }
      } catch (error) {
        setError(error.message)
      } finally{
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])

  if(loading) return <h2>Loading...</h2>
  if(error) return <h2>Error: {error}</h2>

  return (
    <div className='Event'>
      <div><h1>Events</h1></div>
      <div className='EventWrapper'>
        {event.map((current)=> (
          <div className='EventCard' key={current.id}>
            <div className='TopEventCard'>
              <p className='svg'>
                <MdOutlineSecurity/>
              </p>
              <h3>{current.date}</h3>
            </div>
            <div className='BottomEventCard'>
              <h2>{current.title}</h2>
              <h4>{current.description}</h4>
              <hr />
              <p>{current.trainer}</p>
              <p>{current.venue}</p>
            </div>
            <div className='FooterEventcard'>
              <p className='svg'>
                <MdOutlineSecurity/>
              </p>
              <a href="">Book a sit</a>
              <h5>{current.time}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Event