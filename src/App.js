import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Login from './Login';

const USERS = [
  { 
    email: 'user1.One@email.com',
    password: "pass1",
    firstName: "User1",
    lastName: "One"
  }
];

const PRAYERSESSIONS = {
  emotion: 'anxious',
  context: 'my presentation tomorrow',
  generatedPrayer: 'Lord, thank You for Your constant presence and guidance in my life. As I prepare for my project tomorrow, I seek Your wisdom and strength to face any challenges that may arise. Help me to trust in Your plans for me, knowing that You work all things together for my good. "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future." (Jeremiah 29:11) Grant me the courage to step out in faith and not be discouraged, for "I can do all things through Christ who strengthens me." (Philippians 4:13) May Your peace that surpasses all understanding guard my heart and mind, enabling me to focus on the task at hand. "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." (Joshua 1:9) In Jesus’ name, amen.',
  insight: 'Focus on preparing one section at a time.',
  task: 'Write first draft of only the intro before noon.'
};

const App = () => {
  const [users, setUsers] = useState(USERS);
  const [prayerSessions, setPrayerSessions] = useState(PRAYERSESSIONS);
  console.log('users:', users);
  console.log('prayerSessions:', prayerSessions);

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

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Dashboard />
      <Signup handleSignup={handleSignup}/>
      <Login handleLogin={handleLogin}/>
    </div>
  );
};

export default App;