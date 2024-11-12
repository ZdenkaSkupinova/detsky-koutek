import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const CenterDetail = () => {
  const { id } = useParams();
 
  const [center, setCenter] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/api/centers/${id}`)
      .then(response => response.json())
      .then(data => setCenter(data))
  }, [id]);

  if (!center) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section>
        <h3 className="h3-nadpis">Detail pobočky</h3>
        
        {data.map( (center) => {
        <div key={center.id}>
        <h3 className="h3-nadpis" >{center.name}: {center.address}</h3>
      <br/>
      <p>Kapacita: {center.capacity}</p>
      <p>{center.info}</p>
      <h4 className="h4-nadpis">Otevírací hodiny:</h4>
  
      <p>{center.open}</p>
        </div>
      } )}
       </section>
    </>
  );
};

