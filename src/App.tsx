import {
  Shield,
  Database,
  TrendingUp,
  Activity,
  AlertTriangle,
  ArrowDown,
  ArrowUpRight,
  Code2,
  Layers,
  BarChart3,
  Target,
  FileSearch,
  Lightbulb,
  CheckCircle2,
  Globe,
  Cpu,
  Search,
} from "lucide-react";

const annualData = [
  { year: "2016", count: 10646 },
  { year: "2017", count: 17104 },
  { year: "2018", count: 17817 },
  { year: "2019", count: 17619 },
  { year: "2020", count: 21060 },
  { year: "2021", count: 23437 },
  { year: "2022", count: 27525 },
  { year: "2023", count: 31237 },
  { year: "2024", count: 39216 },
  { year: "2025", count: 45095 },
];

const severityData = [
  { name: "Critical", value: 34435, color: "#ef4444" },
  { name: "High", value: 140435, color: "#f97316" },
  { name: "Medium", value: 163418, color: "#eab308" },
  { name: "Low", value: 15507, color: "#22c55e" },
  { name: "Unscored", value: 21533, color: "#64748b" },
];

const weaknessData = [
  { name: "Cross-Site Scripting (CWE-79)", value: 45974 },
  { name: "SQL Injection (CWE-89)", value: 20123 },
  { name: "Out-of-bounds Write (CWE-787)", value: 14447 },
  { name: "Buffer Overflow (CWE-119)", value: 14096 },
  { name: "Improper Input Validation (CWE-20)", value: 12913 },
  { name: "Information Exposure (CWE-200)", value: 10584 },
  { name: "Path Traversal (CWE-22)", value: 9701 },
  { name: "CSRF (CWE-352)", value: 9524 },
];

function formatNumber(value: number) {
  return value.toLocaleString("en-US");
}

function GrowthChart() {
  const max = Math.max(...annualData.map((d) => d.count));

  return (
    <div className="chart-container">
      <div style={{ display: "flex", gap: 15, flexWrap: "wrap", marginBottom: 20 }}>
        <div>
          <div className="visual-label">2016</div>
          <strong style={{ fontSize: 22 }}>10,646</strong>
        </div>
        <div style={{ color: "#64748b", alignSelf: "center" }}>→</div>
        <div>
          <div className="visual-label">2025</div>
          <strong style={{ fontSize: 22, color: "#38bdf8" }}>45,095</strong>
        </div>
        <div style={{ marginLeft: "auto", color: "#38bdf8", fontSize: 13 }}>
          <TrendingUp size={16} style={{ display: "inline", marginRight: 5 }} />
          ~4.2× growth
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 280 }}>
        {annualData.map((item) => (
          <div
            key={item.year}
            title={`${item.year}: ${formatNumber(item.count)}`}
            style={{
              flex: 1,
              height: `${(item.count / max) * 100}%`,
              minHeight: 20,
              background:
                item.year === "2025"
                  ? "linear-gradient(180deg,#38bdf8,#2563eb)"
                  : "linear-gradient(180deg,#2563eb,#1e40af)",
              borderRadius: "5px 5px 0 0",
              position: "relative",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              opacity: item.year === "2025" ? 1 : 0.8,
            }}
          >
            <span
              style={{
                position: "absolute",
                top: -24,
                fontSize: 10,
                color: "#94a3b8",
                whiteSpace: "nowrap",
              }}
            >
              {item.count >= 40000
                ? "45K"
                : item.count >= 30000
                  ? "39K"
                  : item.count >= 20000
                    ? `${Math.round(item.count / 1000)}K`
                    : item.count >= 10000
                      ? `${Math.round(item.count / 1000)}K`
                      : ""}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 12,
          borderTop: "1px solid #263c5c",
          paddingTop: 12,
        }}
      >
        {annualData.map((item) => (
          <div
            key={item.year}
            style={{
              flex: 1,
              textAlign: "center",
              color: "#64748b",
              fontSize: 10,
            }}
          >
            {item.year.slice(2)}
          </div>
        ))}
      </div>
    </div>
  );
}

function SeverityChart() {
  const total = severityData.reduce((sum, item) => sum + item.value, 0);
  const max = Math.max(...severityData.map((d) => d.value));

  return (
    <div className="severity-layout">
      <div>
        <div
          style={{
            fontFamily: "Space Grotesk",
            fontSize: 34,
            fontWeight: 700,
            color: "#e5edf9",
          }}
        >
          {formatNumber(total)}
        </div>
        <div className="visual-label">VULNERABILITY RECORDS</div>

        <div style={{ marginTop: 30 }}>
          {severityData.map((item) => (
            <div key={item.name} style={{ marginBottom: 20 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 12,
                  marginBottom: 8,
                }}
              >
                <span>{item.name}</span>
                <span style={{ color: "#94a3b8" }}>
                  {formatNumber(item.value)}
                </span>
              </div>
              <div
                style={{
                  height: 9,
                  background: "#172438",
                  borderRadius: 20,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${(item.value / max) * 100}%`,
                    height: "100%",
                    background: item.color,
                    borderRadius: 20,
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#64748b",
                  marginTop: 5,
                }}
              >
                {((item.value / total) * 100).toFixed(1)}%
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="severity-legend">
        {severityData.map((item) => (
          <div className="legend-item" key={item.name}>
            <div
              className="legend-color"
              style={{ background: item.color }}
            />
            <div className="legend-info">
              <strong>{item.name}</strong>
              <span>
                {((item.value / total) * 100).toFixed(1)}% of records
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WeaknessChart() {
  const max = Math.max(...weaknessData.map((d) => d.value));

  return (
    <div className="chart-container">
      {weaknessData.map((item, index) => (
        <div key={item.name} style={{ marginBottom: 18 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 15,
              fontSize: 12,
              marginBottom: 7,
            }}
          >
            <span>{index + 1}. {item.name}</span>
            <strong style={{ color: "#94a3b8" }}>
              {formatNumber(item.value)}
            </strong>
          </div>

          <div
            style={{
              height: 12,
              background: "#172438",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${(item.value / max) * 100}%`,
                height: "100%",
                borderRadius: 20,
                background:
                  index === 0
                    ? "linear-gradient(90deg,#38bdf8,#818cf8)"
                    : "linear-gradient(90deg,#2563eb,#38bdf8)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  description,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-label">{label}</div>
      <h3>{value}</h3>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="website">
      <nav className="navbar">
        <div className="brand">
          <Shield size={22} />
          <span>VULN<span className="accent">.INSIGHT</span></span>
        </div>

        <div className="nav-links">
          <a href="#overview">Overview</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#analytics">Analytics</a>
          <a href="#insights">Insights</a>
        </div>

        <div className="nav-tag">BIG DATA PROJECT</div>
      </nav>

      <header className="hero" id="overview">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">
              <span className="pulse" />
              BIG DATA MANAGEMENT & DATA VISUALIZATION
            </div>

            <h1>
              Mapping the
              <br />
              <span className="gradient-text">Vulnerability</span>
              <br />
              Landscape
            </h1>

            <p className="hero-description">
              Exploring the global cybersecurity vulnerability landscape
              through large-scale data processing, analysis and visualization
              to uncover patterns, trends and security priorities.
            </p>

            <div className="hero-buttons">
              <a href="#analytics" className="primary-btn">
                Explore Analytics <ArrowUpRight size={16} />
              </a>
              <a href="#pipeline" className="secondary-btn">
                <Database size={16} /> Project Pipeline
              </a>
            </div>

            <div className="hero-meta">
              <span><Database size={15} /> 375K+ CVE records</span>
              <span><Activity size={15} /> Data-driven analysis</span>
              <span><Shield size={15} /> Cybersecurity</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-one" />
            <div className="orb orb-two" />

            <div className="hero-card">
              <div className="card-top">
                <span className="live-dot" />
                SECURITY DATA OVERVIEW
              </div>

              <div className="shield-visual">
                <div className="shield-ring" />
                <Shield size={120} strokeWidth={1.2} />
              </div>

              <div className="visual-stats">
                <div>
                  <span className="visual-label">DATA ANALYSIS</span>
                  <strong>375K+</strong>
                </div>
                <div>
                  <span className="visual-label">CVE RECORDS</span>
                  <strong style={{ color: "#38bdf8" }}>Insights</strong>
                </div>
              </div>

              <div className="visual-bars">
                {[32, 45, 38, 58, 50, 70, 64, 78, 90, 100].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="visual-bar"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <ArrowDown size={14} /> SCROLL TO EXPLORE
        </div>
      </header>

      <section className="section">
        <div className="section-heading">
          <div className="section-label">01 / PROJECT OVERVIEW</div>
          <h2>Understanding the <span className="gradient-text">Challenge</span></h2>
          <p className="section-intro">
            As the digital ecosystem expands, the number of publicly reported
            software vulnerabilities continues to grow. Understanding this
            landscape requires structured analysis of large and diverse datasets.
          </p>
        </div>

        <div className="stats-grid">
          <StatCard
            icon={<Database size={20} />}
            label="DATA VOLUME"
            value="375K+"
            description="CVE records explored in the project"
          />
          <StatCard
            icon={<TrendingUp size={20} />}
            label="GROWTH"
            value="~4.2×"
            description="Increase in annual CVE records from 2016 to 2025"
          />
          <StatCard
            icon={<AlertTriangle size={20} />}
            label="SEVERITY"
            value="~47%"
            description="Records classified as High or Critical"
          />
          <StatCard
            icon={<Search size={20} />}
            label="WEAKNESSES"
            value="CWE"
            description="Exploring recurring vulnerability weakness patterns"
          />
        </div>

        <div className="objective-box">
          <div className="objective-icon">
            <Target size={28} />
          </div>
          <div>
            <h3>Project Objective</h3>
            <p>
              To analyse large-scale vulnerability data and identify patterns
              in vulnerability growth, severity distribution, and common
              weakness types. The project aims to transform raw cybersecurity
              data into meaningful insights that can support security
              prioritisation and informed decision-making.
            </p>
          </div>
        </div>
      </section>

      <section className="section pipeline-section" id="pipeline">
        <div className="section-heading">
          <div className="section-label">02 / DATA ARCHITECTURE</div>
          <h2>The <span className="gradient-text">Big Data Pipeline</span></h2>
          <p className="section-intro">
            A structured workflow that transforms raw vulnerability information
            into analysis-ready data and visual insights.
          </p>
        </div>

        <div className="pipeline">
          {[
            {
              icon: <Globe size={22} />,
              title: "Data Ingestion",
              desc: "Collect vulnerability information from multiple cybersecurity data sources.",
            },
            {
              icon: <Database size={22} />,
              title: "Storage",
              desc: "Organise raw datasets and prepare structured data for processing.",
            },
            {
              icon: <Cpu size={22} />,
              title: "PySpark Processing",
              desc: "Clean, transform, combine and process large-scale vulnerability datasets.",
            },
            {
              icon: <Layers size={22} />,
              title: "Modelling",
              desc: "Structure data into analytical categories and meaningful attributes.",
            },
            {
              icon: <BarChart3 size={22} />,
              title: "Visualisation",
              desc: "Explore trends, severity and vulnerability weakness patterns.",
            },
          ].map((step, index) => (
            <div className="pipeline-step" key={step.title}>
              <div className="pipeline-number">STEP 0{index + 1}</div>
              <div className="stat-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="sources">
          <div className="sources-label">DATA SOURCES</div>
          <div className="source-tags">
            <span>NVD</span>
            <span>CISA KEV</span>
            <span>FIRST EPSS</span>
            <span>MITRE CWE</span>
          </div>
        </div>
      </section>

      <section className="section analytics-section" id="analytics">
        <div className="section-heading">
          <div className="section-label">03 / DATA ANALYSIS</div>
          <h2>Exploring the <span className="gradient-text">Data</span></h2>
          <p className="section-intro">
            Three analytical views examine the growth of reported vulnerabilities,
            their severity distribution, and the weakness categories frequently
            associated with reported CVEs.
          </p>
        </div>

        <div className="chart-section">
          <div className="chart-title-row">
            <div>
              <div className="chart-number">ANALYSIS 01</div>
              <h3>Growth of CVEs Over Time</h3>
            </div>
            <div className="chart-badge">2016 — 2025</div>
          </div>

          <p className="chart-description">
            Annual CVE records show a substantial increase over the period
            analysed, reflecting the expanding volume of reported software
            vulnerabilities.
          </p>

          <GrowthChart />

          <div className="chart-insight">
            <div className="insight-icon"><Lightbulb size={20} /></div>
            <div>
              <strong>Key Insight</strong>
              <p>
                Annual CVE records increased from 10,646 in 2016 to 45,095
                in 2025 — approximately 4.2 times the 2016 volume. The
                2025 count was approximately 15% higher than 2024.
              </p>
            </div>
          </div>
        </div>

        <div className="chart-section">
          <div className="chart-title-row">
            <div>
              <div className="chart-number">ANALYSIS 02</div>
              <h3>CVE Severity Distribution</h3>
            </div>
            <div className="chart-badge">SEVERITY ANALYSIS</div>
          </div>

          <p className="chart-description">
            Severity classification provides a view of the distribution of
            vulnerability records across Critical, High, Medium, Low and
            Unscored categories.
          </p>

          <SeverityChart />

          <div className="chart-insight">
            <div className="insight-icon"><AlertTriangle size={20} /></div>
            <div>
              <strong>Key Insight</strong>
              <p>
                High and Critical vulnerabilities together account for
                approximately 47% of the dataset. These categories represent
                a substantial portion of the records and warrant attention
                when considering vulnerability prioritisation.
              </p>
            </div>
          </div>
        </div>

        <div className="chart-section">
          <div className="chart-title-row">
            <div>
              <div className="chart-number">ANALYSIS 03</div>
              <h3>Common Vulnerability Weaknesses</h3>
            </div>
            <div className="chart-badge">CWE ANALYSIS</div>
          </div>

          <p className="chart-description">
            The following chart compares the counts of selected weakness
            categories identified in the analysis.
          </p>

          <WeaknessChart />

          <div className="chart-insight">
            <div className="insight-icon"><Code2 size={20} /></div>
            <div>
              <strong>Key Insight</strong>
              <p>
                Cross-Site Scripting (CWE-79) leads the displayed weakness
                categories, followed by SQL Injection (CWE-89). The
                distribution highlights the importance of secure input
                handling and application-level security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section insights-section" id="insights">
        <div className="section-heading">
          <div className="section-label">04 / KEY FINDINGS</div>
          <h2>What the Data <span className="gradient-text">Reveals</span></h2>
          <p className="section-intro">
            The analysis highlights patterns that can help organisations
            understand the scale and nature of the vulnerability landscape.
          </p>
        </div>

        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-index">INSIGHT 01</div>
            <h3>Growing Vulnerability Landscape</h3>
            <p>
              The annual volume of reported CVEs has increased considerably
              over the analysed period, making vulnerability monitoring
              increasingly important.
            </p>
          </div>

          <div className="insight-card">
            <div className="insight-index">INSIGHT 02</div>
            <h3>Severity Matters</h3>
            <p>
              A significant proportion of records are classified as High or
              Critical, demonstrating the importance of risk-based
              vulnerability management.
            </p>
          </div>

          <div className="insight-card">
            <div className="insight-index">INSIGHT 03</div>
            <h3>Recurring Weakness Patterns</h3>
            <p>
              Certain weakness categories appear frequently in the data,
              providing insight into areas where secure development and
              security testing practices can be strengthened.
            </p>
          </div>
        </div>
      </section>

      <section className="section recommendations-section">
        <div className="section-heading">
          <div className="section-label">05 / PRACTICAL IMPLICATIONS</div>
          <h2>From Data to <span className="gradient-text">Action</span></h2>
          <p className="section-intro">
            The findings can inform security monitoring and remediation
            approaches when combined with contextual risk information.
          </p>
        </div>

        <div className="recommendation-list">
          {[
            {
              title: "Prioritise Risk, Not Just Volume",
              desc: "Use severity, exploitability, asset criticality and threat context together when prioritising remediation.",
            },
            {
              title: "Monitor Vulnerability Trends",
              desc: "Track new vulnerability disclosures and changing patterns to support proactive security planning.",
            },
            {
              title: "Strengthen Application Security",
              desc: "Address recurring weakness patterns through secure coding, code reviews, validation and testing.",
            },
            {
              title: "Use Data-Driven Decisions",
              desc: "Transform large-scale vulnerability datasets into structured insights that support security teams.",
            },
          ].map((item, index) => (
            <div className="recommendation" key={item.title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section conclusion">
        <div className="conclusion-box">
          <div className="conclusion-icon">
            <Shield size={44} />
          </div>

          <div className="section-label">PROJECT CONCLUSION</div>

          <h2>
            Turning Vulnerability Data
            <br />
            Into <span className="gradient-text">Security Insights</span>
          </h2>

          <p>
            Big Data technologies enable the processing and exploration of
            large-scale cybersecurity datasets. By analysing vulnerability
            growth, severity and weakness patterns, this project demonstrates
            how data analytics can provide a structured perspective on the
            vulnerability landscape and support informed security decisions.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="brand">
          <Shield size={20} />
          <span>VULN<span className="accent">.INSIGHT</span></span>
        </div>

        <p className="footer-credit">
          Praveen | Big Data Management & Data Visualization
        </p>

        <p>Mapping the Vulnerability Landscape</p>
      </footer>
    </div>
  );
}

export default App;