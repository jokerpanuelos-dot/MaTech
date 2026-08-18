export default function Test() {
  return (
    <div className="test-page">
      <h1>🧪 Test Page</h1>
      <p>This is a simple test page to verify GitHub push is working!</p>
      <p>Created at: {new Date().toLocaleString()}</p>
      <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
        <p>✅ If you can see this page, the deployment is successful!</p>
      </div>
    </div>
  );
}
