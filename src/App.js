import React, { useState } from 'react';
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
    id: 1,
    email: 'user1.one@email.com',
    password: "pass1",
    firstName: "User1",
    lastName: "One"
  }
];

const PRAYERSESSIONS = [
  {
    id: 1,
    emotion: 'anxious',
    context: 'my presentation tomorrow',
    prayer: 'Lord, thank You for Your constant presence and guidance in my life. As I prepare for my project tomorrow, I seek Your wisdom and strength to face any challenges that may arise. Help me to trust in Your plans for me, knowing that You work all things together for my good. "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future." (Jeremiah 29:11) Grant me the courage to step out in faith and not be discouraged, for "I can do all things through Christ who strengthens me." (Philippians 4:13) May Your peace that surpasses all understanding guard my heart and mind, enabling me to focus on the task at hand. "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." (Joshua 1:9) In Jesus’ name, amen.',
    insight: 'Focus on preparing one section at a time.',
    task: 'Write first draft of only the intro before noon.',
    taskStatus: 'Incomplete',
    created: 'February 22, 2024',
    lastVisited: 'February 22, 2024'
  }
];

const App = () => {
  const [users, setUsers] = useState(USERS);
  const [emotions, setEmotions] = useState(EMOTIONS);
  const [renderLogout, setRenderLogout] = useState(false);
  const [prayerSessions, setPrayerSessions] = useState(PRAYERSESSIONS);
  const [newPrayerSession, setNewPrayerSession] = useState({
    id: null,
    emotion: '',
    context: '',
    prayer: '',
    insight: '',
    task: '',
    taskStatus: '',
    created: '',
    lastVisited: ''
  });
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const formattedDate = `${monthNames[monthIndex]} ${day}, ${year}`;

  console.log('users:', users);
  console.log('prayerSessions:', prayerSessions);
  console.log('newPrayerSession:', newPrayerSession);

  const handleSignup = (email, password, firstName, lastName) => {
    setUsers([...users, { email, password, firstName, lastName }]);
  };

  const handleLogin = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      return true;
    } else {
      return false;
    };
  };  

  const toggleLogout = () => {
    setRenderLogout(!renderLogout);
  };

  const handleBegin = () => {
    const currentDate = formattedDate;
    const newId = prayerSessions.length + 1;
    setNewPrayerSession({ ...newPrayerSession, id: newId, created: currentDate, lastVisited: currentDate });
  };

  const handleLastVisited = (id) => {
    const currentDate = formattedDate;
    const updatedSessions = prayerSessions.map(session => {
      if (session.id === id) {
        return { ...session, lastVisited: currentDate };
      }
      return session;
    });
    setPrayerSessions(updatedSessions);
  };

  const updatePrayerSession = (object) => {
    setNewPrayerSession({ ...newPrayerSession, emotion: object.emotion, context: object.context});
    console.log('newPrayerSession:', newPrayerSession);
  };

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
    console.log('status:', status);
    setNewPrayerSession({ ...newPrayerSession, taskStatus: status });
  };

  const handleTaskStatusChange = (id) => {
    console.log('handleTaskStatusChange_id:', id);
    const updatedSessions = prayerSessions.map(session => {
      if (session.id === id) {
        const newStatus = session.taskStatus === 'Incomplete' ? 'Complete' : 'Incomplete';
        return { ...session, taskStatus: newStatus };
      }
      return session;
    });
    setPrayerSessions(updatedSessions);
};

  const handleCompletePrayerSession = () => {
    setPrayerSessions([...prayerSessions, newPrayerSession]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar renderLogout={renderLogout}/>
        <Routes>
          <Route path="/" element={<Home updatePrayerSession={ updatePrayerSession } handleBegin={handleBegin} handlePrayer={handlePrayer} handleInsight={handleInsight} handleTask={handleTask} handleTaskStatus={handleTaskStatus} handleCompletePrayerSession={handleCompletePrayerSession} />} />
          <Route path="/dashboard" element={<Dashboard users={users} prayerSessions={prayerSessions} newPrayerSession={newPrayerSession} handleLastVisited={handleLastVisited} handleTaskStatusChange={handleTaskStatusChange}/>} />            
          <Route path="/signup" element={<Signup handleSignup={handleSignup} toggleLogout={toggleLogout}/>} />
          <Route path="/login" element={<Login handleLogin={handleLogin} toggleLogout={toggleLogout} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;