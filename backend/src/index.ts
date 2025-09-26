import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface GPSTrackerData {
  device_id: string;
  timestamp: string; // ISO 8601 datetime string
  lat: number;       // latitude
  lon: number;       // longitude
  speed_kmh: number; // speed in kilometers per hour
  heading_deg: number; // heading in degrees (0-360)
  altitude_m: number;  // altitude in meters
  fix: "2D" | "3D" | "DGPS" | "No Fix"; // GPS fix type
}

wss.on('connection', (ws) => {
  ws.on('error', console.error);

  ws.on('message', (data) => {
    console.log("received: %s", data);
  });

  // ws.send("this is GPS tracking signal 001");
  function randomPositionRecent(): GPSTrackerData {
    const now = new Date();
    const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000); // 2 hours in ms
    const randomTime = new Date(twoHoursAgo.getTime() + Math.random() * (now.getTime() - twoHoursAgo.getTime()));

    // Generate device ID: tracker000 to tracker999
    const deviceNumber = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
    const deviceId = `tracker${deviceNumber}`;
    
    return {
      device_id: deviceId,
      timestamp: randomTime.toISOString(),
      lat: +(Math.random() * 180 - 90).toFixed(6),      // -90 to 90
      lon: +(Math.random() * 360 - 180).toFixed(6),    // -180 to 180
      heading_deg: Math.floor(Math.random() * 360),       // 0 to 359
      speed_kmh: +(Math.random() * 300).toFixed(2),             // 0 to 300 m/s
      altitude_m: +(Math.random() * 20000).toFixed(2),       // 0 to 20000 m
      fix: "3D",
    };
  }

  const clockSender = setInterval(() => {
    const rawData: GPSTrackerData = randomPositionRecent();
    ws.send(JSON.stringify(rawData));
  }, 1750);
})
