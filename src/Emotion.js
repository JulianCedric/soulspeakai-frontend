import React, { useState } from 'react';
import { Grid, GridColumn, Search, Header, Segment } from 'semantic-ui-react';
import EMOTIONS from './Emotions';

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
      <GridColumn width={8}>
        <Search
          loading={isLoading}
          onResultSelect={handleResultSelect}
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
          minCharacters={1}
        />
      </GridColumn>
      <GridColumn width={8}>
        <Segment>
          <Header>State</Header>
          <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify({ isLoading, value, results }, null, 2)}
          </pre>
          <Header>Selected Emotion</Header>
          <pre style={{ overflowX: 'auto' }}>
            {emotion}
          </pre>
          <Header>Verses</Header>
          <pre style={{ overflowX: 'auto' }}>
            {EMOTIONS.find(emotion => emotion.emotion === value)?.verses.join('\n')}
          </pre>
        </Segment>
      </GridColumn>
    </Grid>
  );  
};

export default Emotion;