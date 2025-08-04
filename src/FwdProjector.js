import React, { useEffect, useState } from "react";

function FwdProjector() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/fwd_projector")
      .then((response) => response.json())
      .then((json) => {
        console.log("Fetched data:", json);
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🔭 FWD Projector</h1>
      {loading ? (
        <p>Loading...</p>
      ) : data && data.results ? (
        <>
          <h2>📈 Match Results</h2>
          <table border="1" cellPadding="8" cellSpacing="0">
            <thead>
              <tr>
                <th>Match Date</th>
                <th>1M Return</th>
                <th>3M Return</th>
                <th>6M Return</th>
                <th>12M Return</th>
              </tr>
            </thead>
            <tbody>
              {data.results.map((item, index) => (
                <tr key={index}>
                  <td>{item["Match Date"]}</td>
                  <td>{item["1M Forward Return"]}%</td>
                  <td>{item["3M Forward Return"]}%</td>
                  <td>{item["6M Forward Return"]}%</td>
                  <td>{item["12M Forward Return"]}%</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>📊 Summary Stats</h2>
          <pre style={{ textAlign: "left", background: "#f5f5f5", padding: "10px" }}>
            {JSON.stringify(data.summary, null, 2)}
          </pre>
        </>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
}

export default FwdProjector;
