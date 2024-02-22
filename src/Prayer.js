import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const Prayer = ({ handlePrayer }) => {
    const [prayer, setPrayer] = useState('');

    const handlePrayerChange = (value) => {
        setPrayer(value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!prayer.trim()) {
            alert("Please fill in this field.");
            return;
        };
        handlePrayer(prayer);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Input 
                    placeholder='GPT-3.5-Turbo-generated prayer will go here'
                    width={16}
                    value={prayer}
                    onChange={e => handlePrayerChange(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Button primary>Next</Button>
            </Form.Group>
        </Form>
    );
};

export default Prayer;