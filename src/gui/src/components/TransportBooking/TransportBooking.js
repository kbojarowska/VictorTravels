import React, {useEffect, useState} from 'react';
const TransportBooking = props => {
  const locations = props.locations;
  const disable = props.disable;

  const [selectedLocation, setSelectedLocation] = useState (
    '--Select a location--'
  );
  const [selectedTransport, setSelectedTransport] = useState (
    '--Select a transport option--'
  );

  const handleLocationChange = event => {
    setSelectedLocation (event.target.value);
    setSelectedTransport ('--Select a transport option--'); // reset selected transport
    props.getCost (null);
  };

  const handleTransportChange = event => {
    setSelectedTransport (event.target.value);
    props.getCost (
      locations[selectedLocation][event.target.value].cost,
      locations[selectedLocation][event.target.value].id
    );
  };

  useEffect (
    () => {
      setSelectedLocation ('--Select a location--');
      setSelectedTransport ('--Select a transport option--');
    },
    [disable]
  );

  return (
    <div>
      <label className="mt-2 text-l font-bold dark:text-white">
        Choose a location:
      </label>
      <select
        className="ml-10"
        value={selectedLocation}
        disabled={disable}
        onChange={handleLocationChange}
      >
        <option value="--Select a location--" disabled>
          Select a location
        </option>
        {Object.keys (locations).map (location => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
      <br />
      <label className="mt-2 text-l font-bold dark:text-white">
        Transport options:
      </label>
      <select
        className="ml-10"
        value={selectedTransport}
        onChange={handleTransportChange}
        disabled={selectedLocation === '--Select a location--'}
      >
        <option value="--Select a transport option--" disabled>
          Select a transport option
        </option>
        {selectedLocation !== '--Select a location--' &&
          Object.keys (locations[selectedLocation]).map (
            transport =>
              locations[selectedLocation][transport] &&
              <option
                key={locations[selectedLocation][transport].id}
                value={transport}
              >
                {transport} - {locations[selectedLocation][transport].cost} zł
              </option>
          )}
      </select>
    </div>
  );
};

export default TransportBooking;
