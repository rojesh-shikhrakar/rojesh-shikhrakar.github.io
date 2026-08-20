---
title: 'KU-AIAC557 Data Acquisition Management System'
description: 'An intensive academic curriculum covering the Data Acquisition , Engineering and Scaled Data Applications Development as precursor to AI systems.'
category: 'courses'
tagline: 'Academic Program'
image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgfEiB6G4_qsC3t_DsTin71gThHdINMtL4Y5fO9TvkOeOZaDW3p9s86GEdcd1LMeJm65SJxXTor8mZUfAA8pLlizGG7OclPLk5YzVTtRXoI6-D4rHYV_xqdLDnrY66eOWqgqD7x5VnIwc2nCxm8VnmlqWw00pAgbudquploW0flyN-iwSxyw9Z9Uk8TzQ6GtzsEmxK_X1nbKi_U3N30E2heks4s8t8vxIQSk1WAIk_EBMLg72nqtlh'
duration: 'Full semester - 3 Credit Hour'
location: 'Kathmandu University'
level: 'M.Tech in AI'
capacity: 'Academic cohort'
tags: ['Data Engineering', 'Data Management', 'Orchestration', 'System Design']
audience:
  - 'Graduate students in Artificial Intelligence'
  - 'Data Engineering Enthusiast'
pre-requisites:
  - Python Programming, Numpy, Pandas, Matplotlib, REST API, Web Scraping,
  - Linux and Shell Scripting
  - Git and Github
  - Basic Data Science ideas
  - Docker

content:
  This course connects industrial data management practices and engineering discipline required to build useful Data–AI systems.  Students move from foundational data management and engineering skills to modern architectures, cloud and system engineering.

  Project-based assignments (**40%**), a midterm implementation milestone (**20%**), and a capstone research project with written report and defense (**40%**). Every module ends with something built and running.

modules:
  - title: 'Introduction Data Science, Engineering and Management'
    body:
      - Introduction to Data Science, Data Engineering and Data Management
      - DIKW Pyramid and its issues
      - Big Data and Big Data Ecosystem
      - Data Lifecycle
      - Data Management Principles and Challenges
      - Data Management Strategy and Frameworks
      - Data Engineering in Data Science (or ML) Lifecycle

  - title: 'Data Handling'
    body:
      - Data Acquisition and Ingestion
      - Data Formats
      - 'Web Scraping: Scrapy and BeautifulSoap'
      - Data Quality
      - Data Wrangling and Cleaning
      - Data Handling Ethics & Governance
      - Data Processing
      - Hadoop and MapReduce
      - 'Apache Spark: RDDs, DAtaFrames, SQL, MLLib, Streaming, GraphX'
      - Data Streams
      - 'Apache Kafka: Topics, Parititions, Producer,Consumer, Kafka Connects'
      - Apache Flume
      - YARN and Zookeeper
      - Cloud Services provided by AWS, GCP, Azure
      - AWS EC2, AMI, EVS, S3,RDS, Athena, Redshift, Lambda, CloudWatch, Glue for ETL jobs and EMR
      - GCP Cloudstorage, DataFusion, BigQuery, Data-proc and Data Flow
      - Azure data factory, SQL DB, Blob Storage, HDInsight, Databricks
  - title: 'Data Modelling, Design and Storage '
    body:
      - Data Storage
      - Distributed Storage GFS & HDFS
      - Database Schema and Notations
      - Relational Database Management System (RDMS)
        - Relationship and Entity Relationship Diagram
        - ORM and UML Notations
      - Document Database (MongoDB)
      - Columnar Database (Cassandra)
      - Key-Value Pair DB (Redis)
      - Graph Database (Neo4J)
      - Multi-support, multi-paradigm database
      - Cloud Data Warehouse
      - Data Lake and Data Mesh
      - SnowFlake Star schema and Snowflake Schema
      - ETL and ELT pipeline
  - title: Data Architecture and Orchestration
    body:
      - Importance of Data Architecture
      - Data Engineering Architectures, Pipelines and Best Practices
      - Lambda and Kappa Architectures
      - Orchestration with Apache Airflow
      - Streaming Pipelines
      - Model Deployment
      - Model Monitoring
  - title: Data Management Concepts
    body:
      - Data Governance
      - Data Security
      - Data Integration and Interoperability
      - Context Management
      - Meta-data Management
      - Data Management Maturity
      - Organizational Change Management
  - title: '(Optional): System Design'
    body:
      - Data System Design
      - System Design System Components
      - Scaling Data Systems
      - Distributed System Design
      - System Design Patterns for distributed systems
      - Case Studies

outcomes:
  - title: 'Data Acquistion'
    body: 'acquire data from various sources and ingest them to a data store( data lake, eDW ,data mart, delta lakes)'
  - title: 'ETL/ ELT Pipelines'
    body: 'Create ETL and ELT pipelines through various data processing (in SQL, DBT, DataFoam (part of bigquery), Spark) for different applications including data visualization and reporting (understand BI concepts)'
  - title: 'Cloud Computing'
    body: 'Work on Cloud Ecosystem either AWS, Google, Azure, or others. Most Platform provides free tiers for students'
  - title: 'Orchestration'
    body: 'Orchestration (airflow) and creation of pipeline and be able to handover the pipeline to the operation team taking care of data management aspect such as incident management'
  - title: 'Data Governance'
    body: 'creating data catalogue, lineage of data, identifying personal information from data, standard data models, using Open APIs.'

testimonials:
  - quote: 'The course connected data engineering concepts with the practical systems we need to build and operate.'
    author: 'Course participant'
    role: 'M.Tech in AI'
  - quote: 'The project-based structure made the cloud and pipeline topics concrete, useful, and easier to retain.'
    author: 'Course participant'
    role: 'M.Tech in AIM.Tech in AI'

# Add the registration URL when enrollment opens. The CTA is hidden while link is empty.
signup:
  label: 'Sign up for this course'
  link: ''

# Add the course contents URL when it is available. The button is hidden while link is empty.
courseContents:
  label: 'View Course Contents'
  link: 'https://rojesh-shikhrakar.github.io/KU-AIAC557-DataAcquisitionManagementSystem/'
---

### References

- DAMA-DMBOK2 Data Management Book of Knowledge
- Fundamentals of Data Engineering by Joe Reis, Matt Housley
- Data Pipelines Pocket Reference by James Densmore
- Streaming Systems The What, Where, When, and How of Large-Scale Data Processing. by Akidau, Tyler Chernyak, Slava Lax, Reuven
- Designing Data-Intensive Applications The Big Ideas Behind Reliable, Scalable, and Maintainable Systems by Martin Kleppmann
