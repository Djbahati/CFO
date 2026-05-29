import './App.css';

function App() {
  return (
    <div className="App">
      <main className="dashboard">
        <header className="dashboard-header">
          <h1>CFO Command Center</h1>
          <p>Track revenue, manage refunds, and monitor financial health in real time.</p>
        </header>

        <section className="kpi-grid" aria-label="Key metrics">
          <article className="kpi-card">
            <p className="kpi-label">Total Revenue</p>
            <h2>$148,230</h2>
            <span className="kpi-change positive">+8.2% vs last month</span>
          </article>
          <article className="kpi-card">
            <p className="kpi-label">Net Profit</p>
            <h2>$41,770</h2>
            <span className="kpi-change positive">+4.5% vs last month</span>
          </article>
          <article className="kpi-card">
            <p className="kpi-label">Refund Volume</p>
            <h2>$6,120</h2>
            <span className="kpi-change negative">+1.1% vs last month</span>
          </article>
        </section>

        <section className="actions" aria-label="Quick actions">
          <button type="button" className="action-btn">Add Transaction</button>
          <button type="button" className="action-btn secondary">Create Refund</button>
          <button type="button" className="action-btn secondary">View Reports</button>
        </section>
      </main>
    </div>
  );
}

export default App;
