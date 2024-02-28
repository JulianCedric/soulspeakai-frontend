import React, { useState } from 'react';
import { Button, Form, Grid, GridColumn, Search } from 'semantic-ui-react';
import EMOTIONS from './Emotions';
import './App.css';

const Emotion = ({ emotion, setEmotion, verses, setVerses }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState(emotion);
  const [value2, setValue2] = useState(verses);

  const handleResultSelect = (e, { result }) => {
    setEmotion(result.title);
    setValue(result.title);
    setVerses(result.description);
  };

  const handleSearchChange = (e, { value }) => {
    setIsLoading(true);
    setValue(value);
    const verses = EMOTIONS.find(emotion => emotion.emotion === value)?.verses.join('\n');

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
          description: `${match.verses.join(', ')}`,
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
      {/* <GridColumn width={16}>
        <pre style={{ overflowX: 'auto' }}>
        {EMOTIONS.find(emotion => emotion.emotion === value)?.verses.join('\n')}
        </pre>
      </GridColumn> */}
    </Grid>
  );  
};

export default Emotion;