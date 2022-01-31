import React from "react";
import BacklogTable from "../../components/BacklogTable";

const Backlog = () => {
  return (
    <>
      <h1>Backlog</h1>
      <BacklogTable
        items={[
          { id: "1", name: "Task 1" },
          { id: "2", name: "Task 2" },
        ]}
      />
    </>
  );
};

export default Backlog;
