import React, { useState, useEffect } from "react";

// Custom hook for fetching character information
const useCharacterInfo = (region, realm, characterName, fields) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCharacterInfo = async () => {
      const apiUrl = `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${characterName}&fields=${fields}`;

      try {
        
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        setData(result);
        setLoading(false);
      } catch (error) {
        // Do nothing if an error occurs
      }
    };

    fetchCharacterInfo();
  }, [region, realm, characterName, fields]);

  return { loading, error, data };
};
export default useCharacterInfo