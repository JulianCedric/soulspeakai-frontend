import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const USERS = [
  { 
    email: 'user1.One@email.com',
    password: "pass1",
    firstName: "User1",
    lastName: "One"
  }
];

const PRAYERSESSIONS = [
  {
  emotion: 'anxious',
  context: 'my presentation tomorrow',
  generatedPrayer: 'Lord, thank You for Your constant presence and guidance in my life. As I prepare for my project tomorrow, I seek Your wisdom and strength to face any challenges that may arise. Help me to trust in Your plans for me, knowing that You work all things together for my good. "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future." (Jeremiah 29:11) Grant me the courage to step out in faith and not be discouraged, for "I can do all things through Christ who strengthens me." (Philippians 4:13) May Your peace that surpasses all understanding guard my heart and mind, enabling me to focus on the task at hand. "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." (Joshua 1:9) In Jesus’ name, amen.',
  insight: 'Focus on preparing one section at a time.',
  task: 'Write first draft of only the intro before noon.',
  taskStatus: 'Incomplete',
  created: 'February 22, 2024',
  lastVisited: null
  }
];

const App = () => {
  const [users, setUsers] = useState(USERS);
  const [prayerSessions, setPrayerSessions] = useState(PRAYERSESSIONS);
  const [newPrayerSession, setNewPrayerSession] = useState({
    emotion: '',
    context: '',
    generatedPrayer: '',
    insight: '',
    task: '',
    taskStatus: '',
    created: null,
    lastVisited: null
  });
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const formattedDate = `${monthNames[monthIndex]} ${day}, ${year}`;

  console.log('users:', users);
  console.log('prayerSessions:', prayerSessions);
  console.log('prayerSessions.emotion:', prayerSessions.emotion);
  console.log('prayerSessions.context:', prayerSessions.context);
  console.log('prayerSessions.generatedPrayer:', prayerSessions.generatedPrayer);
  console.log('prayerSessions.insight:', prayerSessions.insight);
  console.log('prayerSessions.task:', prayerSessions.task);
  console.log('prayerSessions.taskStatus:', prayerSessions.taskStatus);
  console.log('prayerSessions.created:', prayerSessions.created);
  console.log('prayerSessions.lastVisited:', prayerSessions.lastVisited);

  const handleSignup = (email, password, firstName, lastName) => {
    setUsers([...users, { email, password, firstName, lastName }]);
  };

  const handleLogin = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      console.log('Logged in:', user);
    } else {
      console.log('Invalid email or password');
      alert('Invalid email or password');
    }
  };

  const handleBegin = () => {
    setNewPrayerSession({ ...newPrayerSession, created: formattedDate });
  };

  const handleEmotion = (emotion) => {
    setNewPrayerSession({ ...newPrayerSession, emotion });
  };

  const handleContext = (context) => {
    setNewPrayerSession({ ...newPrayerSession, context });
  };

  const handleGeneratedPrayer = (generatedPrayer) => {
    setNewPrayerSession({ ...newPrayerSession, generatedPrayer });
  };

  const handleInsight = (insight) => {
    console.log('Insight:', insight);
    const newInsight = insight;
    setNewPrayerSession({ ...newPrayerSession, insight });
  };

  const handleTask = (task) => {
    console.log('Task:', task);
    setNewPrayerSession({ ...newPrayerSession, task });
  };

  const handleTaskStatus = () => {
    const taskCompleted = 'Complete';
    setNewPrayerSession({ ...newPrayerSession, taskCompleted });
  };

  const handleCompletePrayerSession = () => {
    setNewPrayerSession({ ...newPrayerSession, lastVisited: formattedDate });
    setPrayerSessions([...prayerSessions, newPrayerSession]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home handleBegin={handleBegin} handleEmotion={handleEmotion} handleContext={handleContext} handleGeneratedPrayer={handleGeneratedPrayer} handleInsight={handleInsight} handleTask={handleTask} handleTaskStatus={handleTaskStatus} handleCompletePrayerSession={handleCompletePrayerSession} />} />
          <Route path="/dashboard" element={<Dashboard users={users} prayerSessions={prayerSessions} />} />            
          <Route path="/signup" element={<Signup handleSignup={handleSignup} />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;