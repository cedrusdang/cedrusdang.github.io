// This file contains the project data for the portfolio website.
// Each project includes a title, subheader, image url, description, tech stack, and an expanded description.
// Add new projects by following the same structure, after comma.
// Add images to the public/images folder and update the image paths accordingly.

const projects = [
  {
    title: "Graph Database Project: Australian Road Fatality 2024",
    subheader: "UWA | Apr–May 2025 | Awarded: High Distinction",
    image: "./projectImages/graphwarehouse.png",
    description: "Graph-based analytical pipeline using Neo4j for national road crash fatality analysis, adopting dimensional snowflake schema and Cypher queries.",
    techStack: "Neo4j | Python | Cypher",
    expandDescription: "Designed property graph schema, built ETL pipeline in Python, implemented relationship loading and Cypher querying. Delivered a full technical report with schema visuals and Graph Data Science analytics. Skills: Graph Databases, Data Engineering, Data Warehousing, GDS.",
    githubURL: "https://github.com/cedrusdang/graph-db-query"
  },
  {
    title: "Data Warehouse Project: Australian Road Fatality 2024",
    subheader: "UWA | Mar–Apr 2025 | Awarded: High Distinction",
    image: "./projectImages/datawarehouse.png",
    description: "Scalable data warehouse using Kimball’s dimensional modelling to support OLAP and advanced analytics on 2024 road fatality data.",
    techStack: "PostgreSQL | Python | Power BI",
    expandDescription: "Integrated historical crash and population data into a Star Schema. Built OLAP cube for complex queries, developed Power BI dashboards, and applied association rule mining for behavioural pattern discovery. Skills: Data Warehousing, ETL, OLAP, BI, Data Mining.",
    githubURL: "https://github.com/cedrusdang/DataWarehouse_project"
  },
  {
    title: "NovelForger - AI Agent Novelist",
    subheader: "Google x Kaggle GenAI Bootcamp Capstone | UWA | Apr 2025",
    image: "./projectImages/novelforger.png",
    description: "Open-source AI novelist agent using Gemini+LangGraph for multi-chapter story generation, multilingual support, and modular AI supervision.",
    techStack: "Gemini API | LangGraph | LangChain | Python | Jupyter",
    expandDescription: "8-node agent system generates multi-chapter stories (1500+ words/chapter) using 10 frameworks, supports English/Vietnamese, revision loops, and Markdown export. Features human-in-the-loop, 10-point rubric QA, and LLM classifier input validation. Built/tested for scalable content generation. Skills: AI Agents, GenAI, LangChain, Deep Learning.",
    githubURL: "https://github.com/cedrusdang/NovelForger"
  },
  {
    title: "Queensland Traffic Accidents Analysis (2001–2021)",
    subheader: "UWA | Jul–Nov 2024 | Awarded: High Distinction",
    image: "./projectImages/datastorytelling.png",
    description: "Comprehensive analysis of Queensland traffic accident data (2001–2021) for trend discovery, underreporting, and actionable safety insights.",
    techStack: "Python | Jupyter | Pandas | Plotly",
    expandDescription: "Analyzed 20 years of accident data, identified critical patterns, population-growth effects, and underreported fatigue-related incidents. Recommended AI-driven models and public awareness campaigns for policy impact and operational adjustment. Skills: Data Analysis, Data Storytelling, Business Analysis, Policy Analytics.",
    githubURL: "https://github.com/cedrusdang/DataStoryTelling"
  },
  {
    title: "Smart Livestock Tracking System - IoT",
    subheader: "UWA | Jul–Nov 2024 | Awarded: High Distinction",
    image: "./projectImages/iotproject.png",
    description: "IoT-based livestock tracking with GPS, LoRaWAN, AWS, geofencing, and embedded systems for precision agriculture and real-time alerts.",
    techStack: "LoRaWAN | MQTT | AWS | Python | GPS | ESP32 | Geofencing | Web Apps",
    expandDescription: "Designed and field-tested GPS+LoRaWAN devices with geofencing, real-time alerting, 50-day battery, 1km range, 99% accuracy. Scalable and cost-effective solution for farm security and operations. Skills: IoT, Embedded, Cloud, Web, Agriculture Tech.",
    githubURL: "https://github.com/cedrusdang/IoT_UWA_Project_G22"
  },
  {
    title: "Classification and Clustering of Low Birth Weight Mortality",
    subheader: "UWA | Sep–Oct 2024 | Awarded: High Distinction",
    image: "./projectImages/cdaproject.png",
    description: "Machine learning classification and clustering on global low birth weight mortality using health and economic data.",
    techStack: "R | Machine Learning | Shiny",
    expandDescription: "Conducted EDA and feature selection, built classification models (Decision Tree 96%, Naive Bayes 94%), used RFE and cross-validation, and implemented hierarchical clustering to reveal risk and socioeconomic patterns. Skills: ML, Data Science, Public Health Analytics.",
    githubURL: "https://github.com/cedrusdang/CDA_Project"
  },
  // Add more projects here following the same structure
];

export default projects;

