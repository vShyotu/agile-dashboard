import React, { useState, useEffect } from 'react';
import BacklogTable from '../../components/BacklogTable';

const Backlog = () => {
  const [backlog, setBacklog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      setIsLoading(true);
      const response = await fetch('/stories/1');
      const parsedResponse = await response.json();
      setBacklog(parsedResponse);
      setIsLoading(false);
    };

    fetchStories();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Backlog</h1>
      <BacklogTable items={backlog} />
    </>
  );
};

export default Backlog;
