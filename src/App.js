import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Login from './Login';
import EMOTIONS from './Emotions';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const USERS = [
  { 
    // id: 1,
    email: 'user1.one@email.com',
    password: "pass1",
    firstName: "User1",
    lastName: "One"
  }
];

const PRAYERSESSIONS = [
  {
    // id: 1,
    emotion: 'anxious',
    context: 'my presentation tomorrow',
    prayer: 'Lord, thank You for Your constant presence and guidance in my life. As I prepare for my project tomorrow, I seek Your wisdom and strength to face any challenges that may arise. Help me to trust in Your plans for me, knowing that You work all things together for my good. "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future." (Jeremiah 29:11) Grant me the courage to step out in faith and not be discouraged, for "I can do all things through Christ who strengthens me." (Philippians 4:13) May Your peace that surpasses all understanding guard my heart and mind, enabling me to focus on the task at hand. "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." (Joshua 1:9) In Jesus’ name, amen.',
    insight: 'Focus on preparing one section at a time.',
    task: 'Write first draft of only the intro before noon.',
    task_status: 'Incomplete',
    created: 'February 22, 2024',
    last_visited: 'February 22, 2024'
  }
];

const App = () => {
  const [users, setUsers] = useState(USERS);
  const [emotions, setEmotions] = useState(EMOTIONS);
  const [prayerSessions, setPrayerSessions] = useState(PRAYERSESSIONS);
  const [renderLogout, setRenderLogout] = useState(false);
//
  const [emotion, setEmotion] = useState('');
  const [context, setContext] = useState('');
  const [verses, setVerses] = useState('');
  const [prompt, setPrompt] = useState('');
  const [prayer, setPrayer] = useState('');
//
//
  console.log('emotion:', emotion);
  console.log('context:', context);
  console.log('verses:', verses);
  console.log('prompt:', prompt);
  console.log('prayer:', prayer);
//
  const [newPrayerSession, setNewPrayerSession] = useState({
    emotion: '',
    context: '',
    prayer: '',
    insight: '',
    task: '',
    task_status: '',
    created: '',
    last_visited: ''
  });
//
  console.log('newPrayerSession', newPrayerSession);
//
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const formattedDate = `${monthNames[monthIndex]} ${day}, ${year}`;

  useEffect(() => {
    getPrayerSessions();
  }, []);

  const getPrayerSessions = async () => {
    try {
      const response = await fetch('http://localhost:3000/prayer_sessions', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setPrayerSessions(data);
      } else {
        console.error('Failed to retrieve prayer sessions');
      }
    } catch (error) {
      console.error('Failed to retrieve prayer sessions:', error);
    }
  };


  const handleSignup = async (email, password, firstName, lastName) => {
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: { email, password, first_name: firstName, last_name: lastName },
      }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log('Signup successful', data);
    } else {
      console.error('Signup failed');
    }
  };  

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user: { email, password }}),
      });
      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        setRenderLogout(true);
        return true;
      } else {
        alert('Invalid email or password');
        return false;
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('An error occurred. Please try again.');
      return false;
    }
  };  

  const toggleLogout = () => {
    setRenderLogout(!renderLogout);
  };

  const handleBegin = () => {
    const currentDate = formattedDate;
    setNewPrayerSession({ ...newPrayerSession, created: currentDate, last_visited: currentDate });
  };

  const handleLastVisited = (id) => {
    const currentDate = formattedDate;
    const updatedSessions = prayerSessions.map(session => {
      if (session.id === id) {
        return { ...session, last_visited: currentDate };
      }
      return session;
    });
    setPrayerSessions(updatedSessions);
  };
  
  // const generatePrayerBasedOnEmotionAndContext = async (verses, context) => {
  //   const prompt = `Given these Bible verses: ${verses}. Create a comforting, growth-oriented, and action-oriented one-minute prayer in the 1st-person incorporating these verses, especially focusing on the aspect of ${context}. Please make sure at least 3 of the Bible verses are explicitly included in your response, and that your response is a minimum of 450 characters and a maximum of 500 characters. And since this is a prayer, please start your returned response with: 'Lord, '.`;
  //   console.log('prompt', prompt);
  //   const prayer = await generateText(prompt);

  //   const generatePrayerBasedOnEmotion = async (verses, emotion) => {
  //     const prompt = `Given these Bible verses: ${verses.join(', ')}. Create a comforting, growth-oriented and action-oriented one-minute prayer in the 1st-person incorporating these verses, especially focusing on the aspect of ${emotion}. Please make sure at least 3 of the Bible verses are explicitly included in your response, and that your response is a minimum of 450 characters and a maximum of 500 characters. And since this is a prayer, please start your returned response with: 'Lord, '.`;
      
  //     const data = await generateText(prompt);
  //     if (data && data.text) {
  //       setNewPrayerSession(prevSession => ({ ...prevSession, prayer: data.text }));
  //       setPrayer(data.text);
  //     }
    // };
    // if (prayer) {
    //   setNewPrayerSession(prevSession => ({ ...prevSession, prayer: prayer.text }));
    // }
  // };  

  const generateText = async (prompt, setPrayer) => {
    console.log('here');
  
    try {
      const response = await fetch('http://localhost:3000/api/v1/openai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ prompt: prompt }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const generatedPrayerData = await response.json();
      console.log('generatedPrayerData', generatedPrayerData);
  
      if (generatedPrayerData.choices && generatedPrayerData.choices.length > 0) {
        const prayerText = generatedPrayerData.choices[0].message.content;
        console.log('Prayer Text:', prayerText);
        setPrayer(prayerText); 
      } else {
        console.error('Unexpected response structure:', generatedPrayerData);
      }
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };  

  const updatePrayerSession = (object) => {
    setNewPrayerSession({ ...newPrayerSession, emotion: object.emotion, context: object.context});
    setEmotion(object.emotion);
    setContext(object.context);
    setVerses(object.verses);
    setPrompt(`Given these Bible verses: ${object.verses}. Create a comforting, growth-oriented and action-oriented one-minute prayer in the 1st-person incorporating these verses, especially focusing on the aspect of ${object.context}. Please make sure at least 3 of the Bible verses are explicitly included in your response, and that your response is a minimum of 450 characters and a maximum of 500 characters. And since this is a prayer, please start your returned response with: 'Lord, '.`);
  };

  useEffect(() => {
    if (prompt) {
      generateText(prompt, setPrayer);
    }
  }, [prompt]);

  const handlePrayer = (prayer) => {
    const newPrayer = prayer;
    setNewPrayerSession({ ...newPrayerSession, prayer: newPrayer });
  };

  const handleInsight = (insight) => {
    const newInsight = insight;
    setNewPrayerSession({ ...newPrayerSession, insight });
  };

  const handleTask = (task) => {
    setNewPrayerSession({ ...newPrayerSession, task });
  };

  const handleTaskStatus = (status) => {
    setNewPrayerSession({ ...newPrayerSession, task_status: status });
};

const handleTaskStatusChange = async (id) => {
  const session = prayerSessions.find(session => session.id === id);
  const newStatus = session.task_status === 'Incomplete' ? 'Complete' : 'Incomplete';
  const response = await fetch(`http://localhost:3000/prayer_sessions/${id}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({prayer_session: {task_status: newStatus}}),
  });
  if (response.ok) {
    const data = await response.json();
    console.log('data', data);
    const updatedSessions = prayerSessions.map(session => {
      if (session.id === id) {
        return data;
      }
      return session;
    });
    setPrayerSessions(updatedSessions);
  };
};

  const handleCompletePrayerSession = async () => {
    console.log('newPrayerSession', newPrayerSession);
  
    const response = await fetch('http://localhost:3000/prayer_sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({prayer_session: newPrayerSession}),
      })
    if (response.ok) {
      const data = await response.json();
      console.log('Prayer session creation successful', data);
      setPrayerSessions(prayerSessions => [...prayerSessions, data]);
    } else {
      console.error('Prayer session creation failed');
    }
};  

  const handleDeleteSession = async (id) => {
    const response = await fetch(`http://localhost:3000/prayer_sessions/${id}`, {
      method: 'DELETE',
      headers: { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    if (response.ok) {
      const updatedSessions = prayerSessions.filter(session => session.id !== id);
      setPrayerSessions(updatedSessions);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar renderLogout={renderLogout}/>
        <Routes>
          <Route path="/" element={<Home updatePrayerSession={ updatePrayerSession } handleBegin={handleBegin} handlePrayer={handlePrayer} prayer={prayer} handleInsight={handleInsight} handleTask={handleTask} handleTaskStatus={handleTaskStatus} handleCompletePrayerSession={handleCompletePrayerSession} />} />
          <Route path="/dashboard" element={<Dashboard users={users} prayer={prayer} prayerSessions={prayerSessions} newPrayerSession={newPrayerSession} handleLastVisited={handleLastVisited} handleTaskStatusChange={handleTaskStatusChange} handleDeleteSession={handleDeleteSession} />} />            
          <Route path="/signup" element={<Signup handleSignup={handleSignup} toggleLogout={toggleLogout}/>} />
          <Route path="/login" element={<Login handleLogin={handleLogin} toggleLogout={toggleLogout} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;