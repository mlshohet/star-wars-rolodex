import React, { useEffect, useState } from 'react';

const Card = ({ 
	name,
	birth,
	homeworld,
	mass,
	gender,
	starships,
	vehicles,
}) => {

  const [isFetchingData, setIsFetchingData] = useState(true);
  const [home, setHomeworld] = useState();
  const [ship, setShip] = useState();
  const [car, setCar] = useState();

  useEffect(() => {
   let unmounted = false;
   setIsFetchingData(true);
      fetch(homeworld)
        .then(res => res.json())
        .then(data => {
            if(!unmounted) {
              setHomeworld(data);
              setIsFetchingData(false); 
            }
          }
        )
        .catch(err => console.log);
        return () => {
          unmounted = true;
        }
  }, [homeworld]);

  useEffect(() => {
    let unmounted = false;
    if (starships) {
        setIsFetchingData(true);
          fetch(starships[0])
            .then(res => res.json())
            .then(data => {
                if (!unmounted) {
                  setShip(data.name);
                  setIsFetchingData(false);
                }
              }
            )
            .catch(err => console.log);
      return () => {
        unmounted = true;
      }
    }
  }, [starships]);
    
  useEffect(() => {
    let unmounted = false;
    if (vehicles) {
      setIsFetchingData(true);
      fetch(vehicles[0])
            .then(res => res.json())
            .then(data => {
                if (!unmounted) {
                  setCar(data.name);
                  setIsFetchingData(false);
                }
              }
            )
            .catch(err => console.log);
    }
     return () => {
        unmounted = true;
    }
  }, [vehicles]);

  if (isFetchingData) {
      return <div><h1>Loading</h1></div>
  }

  if (starships.length > 0 && !ship) {
      return <div><h1>Loading</h1></div>
  }

  if (vehicles.length > 0 && !car) {
     return <div><h1>Loading</h1></div>
  }

  return (
    <div className='tc grow bg-light-gray br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='icon' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToBqeXykFGvyBbfeJIZnNbzGJUEq5FBfgsAg&usqp=CAU?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>Born in year {birth}</p>
        {
          home && <p>Home planet: {home.name}</p>
        }
        <p>Weight: {mass}</p>
        {
          gender !== 'n/a' && <p>Gender: {gender}</p>
        }
        {
          starships.length > 0 &&
          <div>
            Ship: { <div>{ship}</div> }
            <br></br>
          </div>
         }
         {
          vehicles.length > 0 &&
          <div>
            Vehicle: <div>{car}</div>
          </div>
         }
      </div>
    </div>
  );
}

export default Card;
