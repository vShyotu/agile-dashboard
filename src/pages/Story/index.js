import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Story = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [acceptanceCriteria, setAcceptanceCriteria] = useState(['']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onAcceptanceCriterionChange = (e, indexToChange) => {
    setAcceptanceCriteria((previousState) => {
      const nextState = [...previousState];
      nextState[indexToChange] = e.target.value;
      return nextState;
    });
  };

  const onAddAcceptanceCriteria = (e) => {
    e.preventDefault();
    setAcceptanceCriteria((previousState) => [...previousState, '']);
  };

  const onRemoveAcceptanceCriteria = (e, index) => {
    console.log('REMOVING');
    e.preventDefault();
    setAcceptanceCriteria((previousState) => {
      const newArray = [...previousState];
      newArray.splice(index, 1);
      return newArray;
    });
  };

  const onCancelClick = (e) => {
    e.preventDefault();
    navigate('/backlog');
  };

  const onSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();

    const response = await fetch('/stories/create', {
      method: 'POST',
      body: JSON.stringify({ title, description, acceptanceCriteria }),
    });

    if (response.status >= 400) {
      navigate('/error');
      return;
    }

    navigate('/backlog');
  };

  if (isSubmitting) {
    return <h1>Creating story...</h1>;
  }

  return (
    <form>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {acceptanceCriteria.map((criterion, index) => (
        <>
          <label
            htmlFor={`acceptance-criterion-${index}`}
            key={`acceptance-criterion-${index}`}
          >{`AC ${index}:`}</label>
          <textarea
            id={`acceptance-criterion-${index}`}
            name={`acceptance-criterion-${index}`}
            key={`acceptance-criterion-${index}-text-area`}
            value={criterion}
            onChange={(e) => onAcceptanceCriterionChange(e, index)}
          />
          <button
            onClick={(e) => onRemoveAcceptanceCriteria(e, index)}
            key={`acceptance-criterion-${index}-delete-button`}
          >
            Delete
          </button>
        </>
      ))}
      <button onClick={(e) => onAddAcceptanceCriteria(e)}>
        Add Acceptance Criterion
      </button>
      <button onClick={onCancelClick} disabled={isSubmitting}>
        Cancel
      </button>
      <button onClick={onSubmit} disabled={isSubmitting}>
        Create
      </button>
    </form>
  );
};

export default Story;
