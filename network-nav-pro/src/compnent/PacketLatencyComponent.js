import React, { useEffect, useState } from 'react';
import { w3cwebsocket as WebSocket } from 'websocket';
import './PacketLatencyComponent.css'; 

function PacketLatencyComponent() {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    // Create a WebSocket instance
    const ws = new WebSocket('ws://localhost:55455');

    // Set up the message handler
    ws.onmessage = (event) => {
      const packetTimestamp = parseInt(event.data, 10);
      const currentTimestamp = new Date().getTime();
      const currentLatency = currentTimestamp - packetTimestamp;
      setLatency(currentLatency);
    };

    // Clean up the WebSocket connection on unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="packet-latency-container">
      <h2 className="header">Packet Latency</h2>
      {latency !== null ? (
        <p className="latency-text">Latency: {latency} ms</p>
      ) : (
        <p className="waiting-text">Waiting for data...</p>
      )}
    </div>
  );
}

export default PacketLatencyComponent;
