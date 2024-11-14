import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./CentersPage.css"

export const CentersPage = () => {
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/centers')
      .then(response => response.json())
      .then(data => setCenters(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
        <main>
        <h2 className="h2-nadpis">Seznam poboček</h2>
        <ul>
            {centers.map(center => (
            <li key={center.id}>
                <NavLink to={`/pobocky/${center.id}`} className={ ({isActive}) =>  
                isActive ? "activeLink link" : "nonactiveLink link"
                }>{center.name}: {center.address}</NavLink>
            </li>
            ))}
        </ul>
        </main>
        <section>
            <Outlet />
        </section>
        </div>
    );
    };



/*
export const CentersPage = () => {

    const [center, setCenter] = useState("")

    useEffect(() => {
        const fetchCenter = async () => {
                const response = await fetch(`http://localhost:4000/api/centers`);
                const data = await response.json();
                setCenter(data);
            };        
            fetchCenter();
          }, []);

    return (
        <div>
            <main>
                <h2>Pobočky</h2>
                <Link to="/pobocky">Pobočky</Link>
                    <nav className='centers_links'>
                        {centers.map(center =>
                        <Link key={center.id} to={`/pobocky/id-pobocky${center.id}`}>{center.name}: {center.address}</Link>)}
                    </nav>
            </main>
        </div>
    )    
}


<nav className='centers_links'>
  {centers.map(center =>
        <Link key={center.id} to={`/pobocky/id-pobocky${center.id}`}>{center.name}: {center.address}</Link>)}
</nav>
*/