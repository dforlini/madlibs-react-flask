import React, { useState } from 'react';

function MadlibForm({ onGenerate }) {
  const [inputs, setInputs] = useState({
    noun: '',
    verb: '',
    adjective: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="noun" placeholder="Noun" value={inputs.noun} onChange={handleChange} />
      <input type="text" name="verb" placeholder="Verb" value={inputs.verb} onChange={handleChange} />
      <input type="text" name="adjective" placeholder="Adjective" value={inputs.adjective} onChange={handleChange} />
      <button type="submit">Generate Story</button>
    </form>
  );
}

export default MadlibForm;