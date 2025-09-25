import { useState } from "react";

export default function SingleGPS() {
  const [gpsConnection, setGpsConnection] = useState(false);
  const [webSocket, setWebSocket] = useState();
  const [gpsData, setGpsData] = useState([]);
  
  function connectGPS() {
    const socket = new WebSocket("ws://localhost:8080");
    setGpsConnection(true)
    setWebSocket(socket);

    socket.onmessage = (event) => {
      setGpsData((currentData) => [JSON.parse(event.data), ...currentData]);
    }
  }

  function closeConnection() {
    webSocket.close(1000, "Normal Closure");
    setGpsConnection(false);
  }

  function clearData() {
    setGpsData([]);
  }

  return (
    <div>
      <button type="button" className="m-2 p-4 text-xl bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition-all" onClick={connectGPS}>
        {gpsConnection ? "GPS Connected..." : "Click to Connect to GPS Tracker"}
      </button>
      {gpsConnection && <button type="button" onClick={closeConnection} className="m-2 p-4 text-xl bg-red-600 text-white rounded-lg hover:bg-red-800 transition-all">
        Close GPS Connection
      </button>}
      {gpsData.length > 0 && <button onClick={clearData} className="m-2 p-4 text-xl bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-all" >
        Clear Table Entries
      </button>}
      <GPSDataTable gpsData={gpsData} />
    </div>
  );
}
const GPSDataTable = ({ gpsData }) => {
  // Sample data with one row
  const sampleData = [
    {
      device_id: "GPS-001-ABC",
      timestamp: "2025-09-25T14:30:45.123Z",
      lat: 18.5204,
      lon: 73.8567,
      speed_kmh: 45.3,
      heading_deg: 235,
      altitude_m: 560.8,
      fix: "3D"
    }
  ];

  // Function to format coordinates to show more decimal places
  const formatCoordinate = (coord) => {
    return coord.toFixed(6);
  };

  // Function to format timestamp to more readable format
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  // Function to get fix status badge color
  const getFixBadgeColor = (fix) => {
    const colors = {
      "3D": "bg-green-100 text-green-800",
      "2D": "bg-yellow-100 text-yellow-800", 
      "DGPS": "bg-blue-100 text-blue-800",
      "No Fix": "bg-red-100 text-red-800"
    };
    return colors[fix] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">GPS Device Data</h2>
      
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Device ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Timestamp
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Latitude
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Longitude
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Speed (km/h)
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Heading (°)
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Altitude (m)
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                GPS Fix
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {gpsData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row.device_id}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                  <div>
                    <div className="font-medium">{formatTimestamp(row.timestamp)}</div>
                    <div className="text-xs text-gray-500">{row.timestamp}</div>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 font-mono">
                  {formatCoordinate(row.lat)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 font-mono">
                  {formatCoordinate(row.lon)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                  <span className="font-semibold">{row.speed_kmh}</span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                  <div className="flex items-center">
                    <span className="mr-2">{row.heading_deg}°</span>
                    <div 
                      className="w-4 h-4 border-2 border-blue-500"
                      style={{
                        transform: `rotate(${row.heading_deg}deg)`,
                        borderTop: '2px solid #ef4444',
                        borderRadius: '2px'
                      }}
                      title={`Heading: ${row.heading_deg}°`}
                    />
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                  <span className="font-semibold">{row.altitude_m}</span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getFixBadgeColor(row.fix)}`}>
                    {row.fix}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Info */}
      <div className="mt-4 text-sm text-gray-600">
        <p className="mb-2">
          <strong>Sample Data:</strong> This table shows GPS tracking data with one sample row.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-1">GPS Fix Types:</h4>
            <ul className="text-xs space-y-1">
              <li><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 mr-2">3D</span>Best accuracy with satellites</li>
              <li><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 mr-2">2D</span>Basic position fix</li>
              <li><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 mr-2">DGPS</span>Differential GPS (high accuracy)</li>
              <li><span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 mr-2">No Fix</span>No GPS signal</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Column Details:</h4>
            <ul className="text-xs space-y-1">
              <li><strong>Timestamp:</strong> Shows both formatted and ISO string</li>
              <li><strong>Coordinates:</strong> Displayed with 6 decimal precision</li>
              <li><strong>Heading:</strong> Includes visual direction indicator</li>
              <li><strong>Location:</strong> Sample coordinates are for Pune, Maharashtra</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
