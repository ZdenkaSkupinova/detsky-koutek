import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./CenterDetail.css"

export const CenterDetail = () => {
  const { id } = useParams();
 
  const [center, setCenter] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:4000/api/centers/${id}`)
      .then(response => response.json())
      .then(data => setCenter(data.data))
  }, [id]);

  if (!center) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section>
        <h3 className="h3-nadpis">Detail pobočky</h3>
        <h3 className="h4-nadpis" >{center.name}: {center.address}</h3>
          <p>Kapacita centra je {center.capacity} dětí.</p>
          <p>{center.info}</p>
            <h4 className="h4-nadpis">Otevírací hodiny:</h4>
              <ul>
                  {Object.keys(center.open).map(day => (
                <li key={day}><strong>{day}</strong>: {center.open[day] || 'zavřeno' }</li>
                ))}
              </ul>
       </section>
    </>
  );
};


