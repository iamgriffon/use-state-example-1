import React, { useState, useEffect } from 'react';

import Card from '../card/card.component';

const UseStateExample = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('Bret');

  useEffect(() => {
    console.log('Hiop');
    const fetchFunc = async() => {
     const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`);
     const resJson = await response.json();
     setUser(resJson[0]);
    };
    fetchFunc();
  }, [searchQuery]);

  return (
    <Card>
      <input 
      type="search"
      value={searchQuery}
      onChange={event => setSearchQuery(event.target.value)}
      />
    {user? ( 
      <div>
        <h1> {user.name} </h1>
        <h1> {user.username} </h1>
        <h1> {user.email} </h1>
      </div>
      ) : (
        <p>User not found</p>
      )}
      {/* <button onClick={() => setName('Andrei')}>Set Name to Andrei</button>
      <button onClick={() => setAddress('Canada')}>Set Address</button> */}
    </Card>
  );
};

export class StateClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Yihua',
      address: 'Canada'
    };
  }

  render() {
    return (
      <Card>
        <h1> {this.state.name} </h1>
        <button onClick={this.setState({ name: 'Andrei' })}>
          Set Name to Andrei
        </button>
        <button onClick={this.setState({ address: 'Amsterdam' })}>
          Set Address
        </button>
      </Card>
    );
  }
}

export default UseStateExample;
