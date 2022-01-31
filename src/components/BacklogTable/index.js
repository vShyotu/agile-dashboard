import React from "react";
import styled from "styled-components";

const BacklogContainer = styled.div`
  padding: 1rem;
  background-color: #38405f;
  border-radius: 0.5rem;
`;

const BacklogItemContainer = styled.div`
  background-color: #8b939c;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const PrimaryButton = styled.button`
  background-color: #98ce00;
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem;
  cursor: pointer;
`;

const SecondaryButton = styled.button`
  background-color: #ff0035;
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
`;

const BacklogItem = ({ item }) => {
  return <BacklogItemContainer>{item.name}</BacklogItemContainer>;
};

const BacklogTable = ({ items }) => {
  return (
    <BacklogContainer>
      <PrimaryButton>Add Item</PrimaryButton>
      <SecondaryButton>Remove Item</SecondaryButton>
      <div>
        {items.map((item) => (
          <BacklogItem item={item} key={item.id} />
        ))}
      </div>
    </BacklogContainer>
  );
};

export default BacklogTable;
