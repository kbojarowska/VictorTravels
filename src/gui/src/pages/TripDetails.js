import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function TripDetails() {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:18000/api/v1/trips/trip/${id}`)
      .then((response) => {
        setTrip(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  return (
    <div>
      {trip && (
        <div>
          {' '}
          <div className="flex justify-center mt-20">
            <div className="flex items-center mr-20">
              <img
                className="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
                src={trip.hotel.image}
                alt="image description"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-5xl font-extrabold dark:text-white">
                {trip.localisation.country}
              </h1>
              <h2 className="text-5xl font-extrabold dark:text-white">
                {trip.localisation.region}
              </h2>
              <div className="tracking-wide text-gray-500 md:text-lg dark:text-gray-400">
                {trip.hotel.name}
              </div>
              <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <h3 className="text-xl font-bold dark:text-white">Hotel description:</h3>
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                {trip.hotel.description.map((value) => (
                  <li className="ml-5">{value}</li>
                ))}
              </ul>
              <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <h3 className="text-xl font-bold dark:text-white">Diets:</h3>
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                {Object.keys(trip.hotel.diet).map((diet) => (
                  <li key={diet} className="ml-5">
                    {diet} - {trip.hotel.diet[diet]}zł
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-96 m-auto mt-5">
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="text-xl font-regular dark:text-white">LOG IN TO BOOK</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TripDetails;
