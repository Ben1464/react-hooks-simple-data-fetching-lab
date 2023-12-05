import React, { useState, useEffect } from 'react';

const App = () => {
  // State to store the dog image URL
  const [dogImage, setDogImage] = useState(null);
  // State to track loading status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch a random dog image
    const fetchDogImage = async () => {
      try {
        // Set loading to true while fetching data
        setLoading(true);

        // Fetch data from the API
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        // Update state with the received dog image URL
        setDogImage(data.message);
      } catch (error) {
        console.error('Error fetching dog image:', error);
      } finally {
        // Set loading to false when the fetch is complete (success or error)
        setLoading(false);
      }
    };

    // Call the fetchDogImage function when the component mounts
    fetchDogImage();
  }, []); // Empty dependency array ensures the effect runs only once, like componentDidMount

  return (
    <div>
      {/* Display loading message while fetching data */}
      {loading && <p>Loading...</p>}
      
      {/* Display dog image when available */}
      {!loading && dogImage && (
        <img src={dogImage} alt="A Random Dog" style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
};

export default App;