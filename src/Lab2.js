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
