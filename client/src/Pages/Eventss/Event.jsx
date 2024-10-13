import React, { useState, useEffect } from "react";
import { apiurl } from "../../utils/config";
import { MdOutlineSecurity } from "react-icons/md";
import "./Event.css";

function Event() {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${apiurl}/api/plan/allevents/`);
        console.log(response);

        const data = await response.json();
        console.log(data);

        if (data.success === true) {
          setEvent(data.eventDetails);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="Event">
      <div className="EventHeader">
        <h1>Events</h1>
      </div>
      <div className="EventWrapper">
        {event.map((current) => (
          <div className="EventCard" key={current.id}>
            <div className="EventCard1">
              <p className="svg">
                <MdOutlineSecurity />
              </p>
              <p className="svg">
                <MdOutlineSecurity />
              </p>
            </div>
            <div className="EventCard2">
              <h2>{current.title}</h2>
            </div>
            <div className="EventCard3">
              <div className="detail">
                <p className="detailsvg">
                  <MdOutlineSecurity />
                </p>
                <p className="detailpara">{new Date(current.date).toLocaleDateString()}</p>
              </div>

              <div className="detail">
                <p className="detailsvg">
                  <MdOutlineSecurity />
                </p>
                <p className="detailpara">{current.trainer}</p>
              </div>
              <div className="detail">
                <p className="detailsvg">
                  <MdOutlineSecurity />
                </p>
                <p className="detailpara">{current.venue}</p>
              </div>
            </div>
            <div className="EventCard4">
              <p>{current.description}</p>
            </div>
            <div className="Eventcard5">
              <p className="Bottomsvg">
                <MdOutlineSecurity />
              </p>
              <a href="">Book a sit</a>
              <h5>{current.time}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
