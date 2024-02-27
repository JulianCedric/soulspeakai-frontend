import React, { useState } from 'react';
import { Button, Form, Grid, GridColumn, Search } from 'semantic-ui-react';
import EMOTIONS from './Emotions';
import './App.css';

const Emotion = ({ emotion, setEmotion }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState(emotion);

  const handleResultSelect = (e, { result }) => {
    setEmotion(result.title);
    setValue(result.title);
  };

  const handleSearchChange = (e, { value }) => {
    setIsLoading(true);
    setValue(value);

    setTimeout(() => {
      if (value.length < 1) {
        setIsLoading(false);
        setResults([]);
        return;
      }

      const filteredResults = EMOTIONS
        .filter(emotion => emotion.emotion.toLowerCase().includes(value.toLowerCase()))
        .map(match => ({
          title: match.emotion,
          description: `Verses: ${match.verses.join(', ')}`,
        }));

      setIsLoading(false);
      setResults(filteredResults);
    }, 300);
  };

  return (
    <Grid>
      <GridColumn width={16}>
        <Form>
        <Search
          loading={isLoading}
          onResultSelect={handleResultSelect}
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
          minCharacters={1}
          icon={false}
          placeholder="emotion"
          className='custom-search'
        />
        </Form>
      </GridColumn>
    </Grid>
  );  
};

export default Emotion;