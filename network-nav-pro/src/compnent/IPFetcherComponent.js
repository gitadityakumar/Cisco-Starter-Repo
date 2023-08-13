// IPFetcherComponent.js

import React, { useState, useEffect } from 'react';
import './IPFetcherComponent.css';

const IPFetcherComponent = () => {
  const [ipv4Address, setIPv4Address] = useState('');
  const [ipv6Address, setIPv6Address] = useState('');

  useEffect(() => {
    fetch('https://api64.ipify.org?format=json&ipv4=true')
      .then((response) => response.json())
      .then((data) => setIPv4Address(data.ip))
      .catch((error) => console.error('Error fetching IPv4 address:', error));

    fetch('https://api64.ipify.org?format=json&ipv6=true')
      .then((response) => response.json())
      .then((data) => setIPv6Address(data.ip))
      .catch(() => setIPv6Address('IPv6 address not available')); // Set a fallback message
  }, []);

  return (
    <div className='ip-address-container'>
      <p className='ipv4'>IPv4 Address: {ipv4Address}</p>
      <p className='ipv6'>IPv6 Address: {ipv6Address}</p>
    </div>
  );
};

export default IPFetcherComponent;

