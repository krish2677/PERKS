// This data is structured based on the University of Mumbai engineering curriculum,
// including detailed guidance on Minors, DLOCs, and Honours subjects.

module.exports = [
  {
    slug: 'computer-engineering-mu',
    name: 'Computer Engineering (Mumbai University)',
    description: 'Computer Engineering at Mumbai University focuses on the principles of computer science, electrical engineering, and software design to develop computer hardware and software.',
    roadmap: [
      {
        year: 'First Year',
        semesters: [
          {
            semester: 'Semester 1',
            subjects: [
              { name: 'Engineering Mathematics-I', keyConcepts: ['Complex Numbers', 'Matrices', 'Partial Differentiation'], notes: 'Builds the mathematical foundation for all engineering subjects. Master matrices and calculus.' },
              { name: 'Engineering Physics-I', keyConcepts: ['Quantum Mechanics', 'Crystallography', 'Semiconductor Physics'], notes: 'Focus on the physics behind electronic components, which is crucial for hardware understanding.' },
              { name: 'Engineering Chemistry-I', keyConcepts: ['Polymers', 'Water Technology', 'Corrosion'], notes: 'Provides insights into materials used in engineering applications.' },
              { name: 'Engineering Mechanics', keyConcepts: ['Statics', 'Friction', 'Kinematics of Particles'], notes: 'The fundamental principles of forces and motion, essential for robotics and system design.' },
              { name: 'Basic Electrical Engineering', keyConcepts: ['DC Circuits (KCL, KVL)', 'AC Circuits', 'Transformers'], notes: 'Your first introduction to circuits. Practice circuit analysis problems relentlessly.' }
            ]
          },
          {
            semester: 'Semester 2',
            subjects: [
              { name: 'Engineering Mathematics-II', keyConcepts: ['Differential Equations', 'Vector Calculus', 'Laplace Transform'], notes: 'Laplace transforms are vital for signal processing and control systems. Focus on solving differential equations.' },
              { name: 'Engineering Physics-II', keyConcepts: ['Optics', 'Lasers', 'Electrodynamics'], notes: 'Explores wave phenomena and their applications in communication and technology.' },
              { name: 'Engineering Chemistry-II', keyConcepts: ['Electrochemistry', 'Fuels', 'Green Chemistry'], notes: 'Focuses on energy sources and sustainable chemical processes.' },
              { name: 'Engineering Drawing', keyConcepts: ['Orthographic Projections', 'Isometric Views', 'CAD basics'], notes: 'The language of engineers. Get comfortable with visualization and drafting, both manually and using software.' },
              { name: 'C Programming', keyConcepts: ['Pointers', 'Structures', 'File Handling', 'Dynamic Memory Allocation'], notes: 'This is your foundation for all future programming. Master pointers and memory management concepts.' }
            ]
          }
        ],
        skillGuidance: 'The first year is common for all branches. Focus on building strong fundamentals in math, physics, and programming. Learn Git and GitHub early. Start solving basic problems on platforms like CodeChef.',
        courses: [
            { platform: 'Coursera', title: 'Programming for Everybody (Getting Started with Python)', description: 'While the curriculum uses C, learning Python on the side is highly beneficial for its simplicity and use in modern tech.', link: 'https://www.coursera.org/learn/python' },
            { platform: 'Udemy', title: 'C Programming For Beginners - Master the C Language', description: 'A comprehensive course to master the fundamentals and advanced topics in C programming.', link: 'https://www.udemy.com/course/c-programming-for-beginners-/' }
        ]
      },
      {
        year: 'Second Year',
        semesters: [
          {
            semester: 'Semester 3',
            subjects: [
              { name: 'Engineering Mathematics-III', keyConcepts: ['Fourier Series', 'Complex Variables', 'Probability'], notes: 'Probability and statistics are extremely important for data science and machine learning. Fourier series are key to signal processing.' },
              { name: 'Discrete Structures and Graph Theory', keyConcepts: ['Set Theory', 'Relations & Functions', 'Graph Algorithms', 'Combinatorics'], notes: 'The mathematical backbone of computer science. This subject is crucial for algorithm design and analysis.' },
              { name: 'Data Structures', keyConcepts: ['Arrays, Stacks, Queues', 'Linked Lists', 'Trees, Graphs', 'Hashing'], notes: 'The most important subject for software development interviews. Focus on implementation and time/space complexity (Big O).' },
              { name: 'Digital Logic Design & Analysis', keyConcepts: ['Logic Gates', 'Boolean Algebra', 'Combinational & Sequential Circuits'], notes: 'Understand how digital circuits are built from the ground up.' },
              { name: 'Computer Graphics', keyConcepts: ['Scan Conversion', '2D/3D Transformations', 'Clipping Algorithms'], notes: 'An introduction to the algorithms that power computer visuals and gaming.' }
            ]
          },
          {
            semester: 'Semester 4',
            subjects: [
              { name: 'Engineering Mathematics-IV', keyConcepts: ['Linear Algebra', 'Numerical Methods', 'Optimization'], notes: 'Linear Algebra (vectors, matrices) is the language of machine learning. Pay close attention.' },
              { name: 'Analysis of Algorithms', keyConcepts: ['Divide and Conquer', 'Greedy Method', 'Dynamic Programming', 'Backtracking'], notes: 'Builds upon Data Structures. Focus on algorithm design patterns and solving complex problems.' },
              { name: 'Operating Systems', keyConcepts: ['Processes & Threads', 'CPU Scheduling', 'Deadlocks', 'Memory Management'], notes: 'Learn how a computer manages its resources. Crucial for system design and backend development.' },
              { name: 'Computer Organization and Architecture', keyConcepts: ['Instruction Sets', 'Pipelining', 'Memory Hierarchy', 'I/O Organization'], notes: 'Understand what happens inside a CPU and how software interacts with hardware.' },
              { name: 'Database Management System', keyConcepts: ['SQL', 'Normalization', 'ER Diagrams', 'Transaction Management'], notes: 'Every application needs a database. Master SQL queries, especially JOINs, and database design principles.' }
            ]
          }
        ],
        electivesGuidance: {
          title: 'Choosing Your Minor Subject',
          description: 'Starting in your second year, you can choose a Minor to gain interdisciplinary skills. This choice complements your core degree and can open up unique career paths by combining your technical knowledge with other domains.',
          options: [
            { name: 'Innovation and Entrepreneurship (I&E)', reason: 'Perfect for students who dream of starting their own tech company. You will learn about business models, startup finance, and product management. This Minor helps you think like a founder, not just an engineer.' },
            { name: 'IoT and Cloud Computing', reason: 'A highly technical and in-demand choice. You will gain deep knowledge of building connected devices and managing them on cloud platforms like AWS or Azure. This is ideal for roles in cloud engineering, DevOps, and embedded systems.' },
            { name: 'VLSI Design', reason: 'A great choice for Computer Engineers interested in hardware. This will give you an edge in roles at semiconductor companies, focusing on the design of processors and other chips.' },
            { name: 'Biotechnology', reason: 'An interdisciplinary choice for those interested in computational biology and bioinformatics. You can apply your programming skills to analyze genetic data and contribute to medical research.' },
            { name: 'GIS (Geo-informatics)', reason: 'A niche but powerful field that combines mapping with data science. For a Computer Engineer, this can lead to careers in urban planning tech, environmental modeling, or location-based services.' }
          ]
        },
        skillGuidance: 'This is the year to build strong core CS fundamentals. Start competitive programming seriously. Build a full-stack web application with a frontend (React), backend (Node.js), and a database (MongoDB/SQL). This project will be the centerpiece of your resume.',
        courses: [
            { platform: 'Coursera', title: 'Algorithms Specialization by Stanford University', description: 'A deep dive into algorithms, covering sorting, searching, graph algorithms, and more.', link: 'https://www.coursera.org/specializations/algorithms' },
            { platform: 'NeetCode', title: 'NeetCode 150', description: 'A curated list of LeetCode problems that cover all essential patterns for technical interviews.', link: 'https://neetcode.io/' },
            { platform: 'Udemy', title: 'The Web Developer Bootcamp by Colt Steele', description: 'A comprehensive course on full-stack web development with Node.js, Express, and MongoDB.', link: 'https://www.udemy.com/course/the-web-developer-bootcamp/' }
        ]
      },
      {
        year: 'Third Year',
        semesters: [
          {
            semester: 'Semester 5',
            subjects: [
              { name: 'Theory of Computer Science', keyConcepts: ['Automata Theory', 'Regular Languages', 'Turing Machines'], notes: 'Explores the fundamental capabilities and limitations of computation.' },
              { name: 'Computer Networks', keyConcepts: ['OSI & TCP/IP models', 'Routing Protocols', 'HTTP, DNS'], notes: 'Learn how the internet works. Essential for web, cloud, and cybersecurity roles.' },
              { name: 'Software Engineering', keyConcepts: ['SDLC Models (Agile)', 'Design Patterns', 'Testing'], notes: 'Learn the professional way to build software in a team. Focus on Agile.' }
            ]
          },
          {
            semester: 'Semester 6',
            subjects: [
              { name: 'System Programming & Compiler Construction', keyConcepts: ['Assemblers, Linkers', 'Lexical Analysis, Parsing'], notes: 'Explains how high-level code is translated into machine code.' },
              { name: 'Cryptography & System Security', keyConcepts: ['Symmetric & Asymmetric Cryptography', 'Web Security'], notes: 'A crucial introduction to the world of cybersecurity.' },
              { name: 'Mobile Computing', keyConcepts: ['Android/iOS Architecture', 'Mobile App Development'], notes: 'Learn the principles behind building applications for mobile devices.' },
              { name: 'Artificial Intelligence', keyConcepts: ['Search Algorithms', 'Knowledge Representation', 'ML Basics'], notes: 'A foundational course for the vast field of AI and ML.' }
            ]
          }
        ],
        electivesGuidance: {
            title: 'Choosing DLOC & Honours Subjects',
            description: 'In your third year, you make critical choices that define your specialization. DLOCs allow you to explore specific advanced topics, while an Honours track provides a deep, multi-subject specialization in a high-demand field.',
            dlocOptions: [
              { name: 'Explainable Data Science (EDS)', reason: 'For students interested in AI/ML ethics and transparency. This field focuses on making complex models (like neural networks) understandable to humans. It is a crucial skill for roles in regulated industries like finance and healthcare.' },
              { name: 'Computer Vision (CV)', reason: 'A subfield of AI focused on enabling computers to "see" and interpret visual information. Choose this if you are passionate about image recognition, self-driving cars, or augmented reality. Requires strong math and programming skills.' },
              { name: 'Advanced Software Engineering & Project Management (ASEPM)', reason: 'Ideal for students aiming for leadership roles like Project Manager or Tech Lead. This subject goes beyond coding to teach you about software architecture, team management, and delivering complex projects on time.' },
              { name: 'Agricultural Technology', reason: 'An interdisciplinary choice applying tech to agriculture. For a computer engineer, this involves creating software for smart farming, crop monitoring drones, and supply chain management.' }
            ],
            honoursOptions: [
              { name: 'Data Science', reason: 'A broad and highly employable track. You will learn everything from data collection and cleaning to building predictive models and creating data visualizations. Perfect for aspiring Data Analysts and Data Scientists.' },
              { name: 'AIML (Artificial Intelligence & Machine Learning)', reason: 'A more specialized and math-intensive track than Data Science. It focuses on the core algorithms and theory behind AI. Choose this for roles like ML Engineer or for pursuing higher studies (Masters/PhD) in AI.' },
              { name: 'Cyber Security', reason: 'A high-growth field focused on protecting systems and data. This track will cover topics from network security and ethical hacking to digital forensics. Ideal for roles like Security Analyst or Penetration Tester.' },
              { name: 'Blockchain', reason: 'A niche but cutting-edge field. You will learn about cryptocurrencies, smart contracts, and decentralized applications (DApps). Choose this if you are interested in Web3, DeFi, and the future of the internet.' },
              { name: 'Augmented and Virtual Reality (AR/VR)', reason: 'A creative and technical track focused on building immersive experiences. This is a great choice for those interested in gaming, 3D simulation, or the future of user interfaces (the "metaverse").' },
              { name: 'IoT (Internet of Things)', reason: 'This track combines hardware and software to build smart, connected devices. It covers everything from sensor networks and communication protocols to cloud platforms for managing IoT data.' }
            ]
        },
        skillGuidance: 'Focus on your specialization. Build projects in your chosen DLOC subjects. This is the prime time for a summer internship, which often converts to a full-time job offer (PPO). Start practicing for interviews, including both coding and system design rounds.',
        courses: [
            { platform: 'Coursera', title: 'Google Cybersecurity Certificate', description: 'Gain job-ready skills in cybersecurity, learning about security frameworks and tools.', link: 'https://www.coursera.org/professional-certificates/google-cybersecurity' },
            { platform: 'Udemy', title: 'Docker and Kubernetes: The Complete Guide', description: 'Master containerization and microservices, a crucial skill for modern backend development.', link: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/' }
        ]
      },
      {
        year: 'Final Year',
        semesters: [
          {
            semester: 'Semester 7',
            subjects: [
              { name: 'Digital Signal & Image Processing', keyConcepts: ['DFT, FFT', 'Image Enhancement', 'Image Segmentation'], notes: 'Learn how to computationally process signals like audio and images. Key for multimedia and computer vision.' },
              { name: 'Machine Learning', keyConcepts: ['Supervised & Unsupervised Learning', 'Regression, Classification', 'Neural Networks', 'Ensemble Methods'], notes: 'The most in-demand skill in the industry. Focus on both the theory and practical implementation using Python libraries (Scikit-learn, TensorFlow/PyTorch).' },
              { name: 'Department Level Optional Course-III (DLOC)', keyConcepts: ['Varies'], notes: 'Deepen your expertise. Options often include Big Data Analytics, Robotics, etc.' },
              { name: 'Institute Level Optional Course-I (ILOC)', keyConcepts: ['Varies'], notes: 'Choose a subject from another department to gain interdisciplinary knowledge (e.g., Project Management, Finance).' }
            ]
          },
          {
            semester: 'Semester 8',
            subjects: [
              { name: 'Human Machine Interaction', keyConcepts: ['UI/UX Principles', 'Usability Testing', 'Interaction Design'], notes: 'Focuses on making technology intuitive and user-friendly. Important for frontend and product roles.' },
              { name: 'Distributed Computing', keyConcepts: ['Cloud Architecture', 'Microservices', 'CAP Theorem', 'Distributed Databases'], notes: 'Learn how to build large-scale, fault-tolerant systems. Crucial for cloud and backend roles.' },
              { name: 'Department Level Optional Course-IV (DLOC)', keyConcepts: ['Varies'], notes: 'Final specialization course. Options could include Blockchain, Deep Learning, etc.' },
              { name: 'Institute Level Optional Course-II (ILOC)', keyConcepts: ['Varies'], notes: 'Your final interdisciplinary subject.' }
            ]
          }
        ],
        skillGuidance: 'Your Final Year Project is your most important academic work. Choose a challenging problem and build a complete, well-documented solution. This will be a major talking point in your interviews. Simultaneously, focus intensely on placement preparation.',
        courses: [
            { platform: 'Coursera', title: 'Machine Learning Specialization by Andrew Ng', description: 'The definitive introductory course on machine learning, taught by a Stanford professor.', link: 'https://www.coursera.org/specializations/machine-learning-introduction' },
            { platform: 'Udemy', title: 'System Design Interview Guide', description: 'Learn how to approach system design questions, a key part of interviews at major tech companies.', link: 'https://www.udemy.com/course/system-design-interview-guide-for-software-architecture/' }
        ]
      }
    ],
    internshipGuidance: {
        whenToStart: 'Start applying for internships from your second year onwards. The internship at the end of your third year is the most critical for securing a Pre-Placement Offer (PPO).',
        typesOfRoles: [
            { name: 'Software Development Engineer (SDE) Intern', description: 'The most common role. Involves writing and testing code for a company\'s products.' },
            { name: 'Data Science / ML Intern', description: 'Focuses on data analysis, building predictive models, and working with large datasets.' },
            { name: 'Cybersecurity Intern', description: 'Involves security analysis, penetration testing, and monitoring systems for threats.' }
        ],
        howToApply: 'Use your college\'s placement cell, LinkedIn, and online job portals. A strong resume with good projects and a high CGPA is key. For top companies, proficiency in Data Structures and Algorithms is non-negotiable.'
    }
  },
  {
    slug: 'it-engineering-mu',
    name: 'Information Technology (Mumbai University)',
    description: 'Information Technology at Mumbai University is a specialized branch of Computer Engineering that focuses more on software systems, networking, and information security.',
    roadmap: [
        {
            year: 'First Year',
            semesters: [
                {
                    semester: 'Semester 1',
                    subjects: [
                        { name: 'Engineering Mathematics-I', keyConcepts: ['Complex Numbers', 'Matrices', 'Partial Differentiation'], notes: 'Builds the mathematical foundation for all engineering subjects. Master matrices and calculus.' },
                        { name: 'Engineering Physics-I', keyConcepts: ['Quantum Mechanics', 'Crystallography', 'Semiconductor Physics'], notes: 'Focus on the physics behind electronic components, which is crucial for hardware understanding.' },
                        { name: 'Engineering Chemistry-I', keyConcepts: ['Polymers', 'Water Technology', 'Corrosion'], notes: 'Provides insights into materials used in engineering applications.' },
                        { name: 'Engineering Mechanics', keyConcepts: ['Statics', 'Friction', 'Kinematics of Particles'], notes: 'The fundamental principles of forces and motion, essential for robotics and system design.' },
                        { name: 'Basic Electrical Engineering', keyConcepts: ['DC Circuits (KCL, KVL)', 'AC Circuits', 'Transformers'], notes: 'Your first introduction to circuits. Practice circuit analysis problems relentlessly.' }
                    ]
                },
                {
                    semester: 'Semester 2',
                    subjects: [
                        { name: 'Engineering Mathematics-II', keyConcepts: ['Differential Equations', 'Vector Calculus', 'Laplace Transform'], notes: 'Laplace transforms are vital for signal processing and control systems. Focus on solving differential equations.' },
                        { name: 'Engineering Physics-II', keyConcepts: ['Optics', 'Lasers', 'Electrodynamics'], notes: 'Explores wave phenomena and their applications in communication and technology.' },
                        { name: 'Engineering Chemistry-II', keyConcepts: ['Electrochemistry', 'Fuels', 'Green Chemistry'], notes: 'Focuses on energy sources and sustainable chemical processes.' },
                        { name: 'Engineering Drawing', keyConcepts: ['Orthographic Projections', 'Isometric Views', 'CAD basics'], notes: 'The language of engineers. Get comfortable with visualization and drafting, both manually and using software.' },
                        { name: 'C Programming', keyConcepts: ['Pointers', 'Structures', 'File Handling', 'Dynamic Memory Allocation'], notes: 'This is your foundation for all future programming. Master pointers and memory management concepts.' }
                    ]
                }
            ],
            skillGuidance: 'The first year is common for all branches. Focus on building strong fundamentals in math, physics, and programming. Master C programming as it forms the basis for subjects like Data Structures.',
            courses: [
                { platform: 'Udemy', title: 'C Programming For Beginners - Master the C Language', description: 'A comprehensive course to master the fundamentals and advanced topics in C programming.', link: 'https://www.udemy.com/course/c-programming-for-beginners-/' },
                { platform: 'Coursera', title: 'Introduction to Git and GitHub', description: 'Learn the essential version control tool used by developers worldwide.', link: 'https://www.coursera.org/learn/introduction-git-github' }
            ]
        },
        {
            year: 'Second Year',
            semesters: [
              {
                semester: 'Semester 3',
                subjects: [
                  { name: 'Engineering Mathematics-III', keyConcepts: ['Fourier Series', 'Complex Variables', 'Probability'], notes: 'Probability and statistics are extremely important for data science and machine learning. Fourier series are key to signal processing.' },
                  { name: 'Data Structures and Analysis', keyConcepts: ['Arrays, Stacks, Queues', 'Linked Lists', 'Trees, Graphs', 'Hashing'], notes: 'The most important subject for software development interviews. Focus on implementation and time/space complexity (Big O).' },
                  { name: 'Database Management System', keyConcepts: ['SQL', 'Normalization', 'ER Diagrams', 'Transaction Management'], notes: 'Every application needs a database. Master SQL queries, especially JOINs, and database design principles.' },
                  { name: 'Principle of Communication', keyConcepts: ['Analog & Digital Modulation', 'AM/FM', 'Sampling Theorem'], notes: 'Understand the fundamentals of how data is transmitted over communication channels.' },
                  { name: 'Paradigm of Programming', keyConcepts: ['Procedural', 'Object-Oriented', 'Functional Programming'], notes: 'Learn different styles of programming to become a more versatile developer.' }
                ]
              },
              {
                semester: 'Semester 4',
                subjects: [
                  { name: 'Engineering Mathematics-IV', keyConcepts: ['Linear Algebra', 'Numerical Methods', 'Optimization'], notes: 'Linear Algebra (vectors, matrices) is the language of machine learning. Pay close attention.' },
                  { name: 'Computer Networks', keyConcepts: ['OSI & TCP/IP models', 'IP Addressing', 'Routing Protocols', 'Application Layer Protocols (HTTP, DNS)'], notes: 'Learn how the internet works. Essential for web development, cloud, and cybersecurity.' },
                  { name: 'Operating Systems', keyConcepts: ['Processes & Threads', 'CPU Scheduling', 'Deadlocks', 'Memory Management'], notes: 'Learn how a computer manages its resources. Crucial for system design and backend development.' },
                  { name: 'Automata Theory', keyConcepts: ['Finite Automata', 'Regular Expressions', 'Context-Free Grammar'], notes: 'A theoretical subject that explores the limits of what can be computed.' },
                  { name: 'Computer Organization and Architecture', keyConcepts: ['Instruction Sets', 'Pipelining', 'Memory Hierarchy', 'I/O Organization'], notes: 'Understand what happens inside a CPU and how software interacts with hardware.' }
                ]
              }
            ],
             electivesGuidance: {
          title: 'Choosing Your Minor Subject',
          description: 'Starting in your second year, you can choose a Minor to gain interdisciplinary skills. This choice complements your core degree and can open up unique career paths by combining your technical knowledge with other domains.',
          options: [
            { name: 'Innovation and Entrepreneurship (I&E)', reason: 'Perfect for students who dream of starting their own tech company. You will learn about business models, startup finance, and product management. This Minor helps you think like a founder, not just an engineer.' },
            { name: 'IoT and Cloud Computing', reason: 'A highly technical and in-demand choice. You will gain deep knowledge of building connected devices and managing them on cloud platforms like AWS or Azure. This is ideal for roles in cloud engineering, DevOps, and embedded systems.' },
            { name: 'VLSI Design', reason: 'A great choice for Computer Engineers interested in hardware. This will give you an edge in roles at semiconductor companies, focusing on the design of processors and other chips.' },
            { name: 'Biotechnology', reason: 'An interdisciplinary choice for those interested in computational biology and bioinformatics. You can apply your programming skills to analyze genetic data and contribute to medical research.' },
            { name: 'GIS (Geo-informatics)', reason: 'A niche but powerful field that combines mapping with data science. For a Computer Engineer, this can lead to careers in urban planning tech, environmental modeling, or location-based services.' }
          ]
        },
            skillGuidance: 'The focus in SE IT is on core software subjects. Build a strong portfolio of projects. A database-driven web application is a must. Get certified in a cloud platform like AWS (Cloud Practitioner) or Azure (Fundamentals).',
            courses: [
                { platform: 'Udemy', title: 'The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert', description: 'Master SQL, the most important language for data management and analysis.', link: 'https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/' },
                { platform: 'Coursera', title: 'Operating Systems and You: Becoming a Power User', description: 'A beginner-friendly course on the core concepts of operating systems.', link: 'https://www.coursera.org/learn/os-power-user' }
            ]
        },
        {
            year: 'Third Year',
            semesters: [
                {
                    semester: 'Semester 5',
                    subjects: [
                        { name: 'Internet Programming', keyConcepts: ['HTML/CSS/JS', 'Frontend Frameworks (React)', 'Backend (Node.js/Express)', 'REST APIs'], notes: 'This is where you build modern web applications. Focus on a project-based learning approach.' },
                        { name: 'Computer Network Security', keyConcepts: ['Cryptography', 'Firewalls', 'Intrusion Detection Systems', 'Web Security'], notes: 'A practical approach to cybersecurity, focusing on protecting networks and systems.' },
                        { name: 'E-Commerce & E-Business', keyConcepts: ['Business Models', 'Payment Gateways', 'Supply Chain Management'], notes: 'Understands the technology and strategy behind online businesses.' },
                        { name: 'Data Warehousing & Mining', keyConcepts: ['ETL Process', 'Data Cube', 'Classification', 'Clustering', 'Association Rule Mining'], notes: 'Your first deep dive into the world of data analytics and finding patterns in large datasets.' }
                    ]
                },
                {
                    semester: 'Semester 6',
                    subjects: [
                        { name: 'Software Project Management', keyConcepts: ['Agile (Scrum, Kanban)', 'Project Planning', 'Risk Management'], notes: 'Learn how to manage software projects from conception to delivery. Crucial for leadership roles.' },
                        { name: 'Data Science and Analytics', keyConcepts: ['Data Cleaning', 'Feature Engineering', 'Predictive Modeling', 'Visualization'], notes: 'A practical subject where you will work on real-world datasets using Python libraries.' },
                        { name: 'Cloud Computing', keyConcepts: ['IaaS, PaaS, SaaS', 'Virtualization', 'Containers (Docker)', 'Orchestration (Kubernetes)'], notes: 'Understand the architecture and services of cloud platforms like AWS, Azure, and GCP.' },
                        { name: 'Artificial Intelligence', keyConcepts: ['Search Algorithms', 'Knowledge Representation', 'Machine Learning Basics', 'Natural Language Processing'], notes: 'A foundational course for the vast field of AI and ML.' }
                    ]
                }
            ],
            electivesGuidance: {
            title: 'Choosing DLOC & Honours Subjects',
            description: 'In your third year, you make critical choices that define your specialization. DLOCs allow you to explore specific advanced topics, while an Honours track provides a deep, multi-subject specialization in a high-demand field.',
            dlocOptions: [
              { name: 'Explainable Data Science (EDS)', reason: 'For students interested in AI/ML ethics and transparency. This field focuses on making complex models (like neural networks) understandable to humans. It is a crucial skill for roles in regulated industries like finance and healthcare.' },
              { name: 'Computer Vision (CV)', reason: 'A subfield of AI focused on enabling computers to "see" and interpret visual information. Choose this if you are passionate about image recognition, self-driving cars, or augmented reality. Requires strong math and programming skills.' },
              { name: 'Advanced Software Engineering & Project Management (ASEPM)', reason: 'Ideal for students aiming for leadership roles like Project Manager or Tech Lead. This subject goes beyond coding to teach you about software architecture, team management, and delivering complex projects on time.' },
              { name: 'Agricultural Technology', reason: 'An interdisciplinary choice applying tech to agriculture. For a computer engineer, this involves creating software for smart farming, crop monitoring drones, and supply chain management.' }
            ],
            honoursOptions: [
              { name: 'Data Science', reason: 'A broad and highly employable track. You will learn everything from data collection and cleaning to building predictive models and creating data visualizations. Perfect for aspiring Data Analysts and Data Scientists.' },
              { name: 'AIML (Artificial Intelligence & Machine Learning)', reason: 'A more specialized and math-intensive track than Data Science. It focuses on the core algorithms and theory behind AI. Choose this for roles like ML Engineer or for pursuing higher studies (Masters/PhD) in AI.' },
              { name: 'Cyber Security', reason: 'A high-growth field focused on protecting systems and data. This track will cover topics from network security and ethical hacking to digital forensics. Ideal for roles like Security Analyst or Penetration Tester.' },
              { name: 'Blockchain', reason: 'A niche but cutting-edge field. You will learn about cryptocurrencies, smart contracts, and decentralized applications (DApps). Choose this if you are interested in Web3, DeFi, and the future of the internet.' },
              { name: 'Augmented and Virtual Reality (AR/VR)', reason: 'A creative and technical track focused on building immersive experiences. This is a great choice for those interested in gaming, 3D simulation, or the future of user interfaces (the "metaverse").' },
              { name: 'IoT (Internet of Things)', reason: 'This track combines hardware and software to build smart, connected devices. It covers everything from sensor networks and communication protocols to cloud platforms for managing IoT data.' }
            ]
        },
            skillGuidance: 'This is the year of specialization. Focus on getting an internship in a field that interests you, such as web development, data science, or cybersecurity. Certifications in your chosen domain (e.g., AWS Developer Associate, Certified Ethical Hacker) can be very valuable.',
            courses: [
                { platform: 'Coursera', title: 'IBM Cybersecurity Analyst Professional Certificate', description: 'Gain skills in cybersecurity, including network security and threat intelligence.', link: 'https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst' },
                { platform: 'Udemy', title: 'AWS Certified Cloud Practitioner', description: 'A foundational course for anyone looking to get started with Amazon Web Services.', link: 'https://www.udemy.com/course/aws-certified-cloud-practitioner-new/' }
            ]
        },
        {
            year: 'Final Year',
            semesters: [
                {
                    semester: 'Semester 7',
                    subjects: [
                        { name: 'Machine Learning', keyConcepts: ['Supervised & Unsupervised Learning', 'Regression, Classification', 'Neural Networks', 'Ensemble Methods'], notes: 'The most in-demand skill in the industry. Focus on both the theory and practical implementation using Python libraries.' },
                        { name: 'Big Data Analytics', keyConcepts: ['Hadoop Ecosystem (HDFS, MapReduce)', 'Spark', 'NoSQL Databases'], notes: 'Learn how to process and analyze datasets that are too large for traditional systems.' },
                        { name: 'Department Level Optional Course-III (DLOC)', keyConcepts: ['Varies'], notes: 'Deepen your expertise. Options often include Internet of Things (IoT), Robotics, etc.' },
                        { name: 'Institute Level Optional Course-I (ILOC)', keyConcepts: ['Varies'], notes: 'Choose a subject from another department to gain interdisciplinary knowledge (e.g., Project Management, Finance).' }
                    ]
                },
                {
                    semester: 'Semester 8',
                    subjects: [
                        { name: 'Project Management', keyConcepts: ['Project Lifecycle', 'Costing and Estimation', 'Agile Methodologies'], notes: 'Focuses on the business and management aspects of running a project.' },
                        { name: 'Fintech and Business Analytics', keyConcepts: ['Blockchain', 'Digital Payments', 'Algorithmic Trading', 'Market Analysis'], notes: 'A specialized course for those interested in the financial technology sector.' },
                        { name: 'Department Level Optional Course-IV (DLOC)', keyConcepts: ['Varies'], notes: 'Final specialization course. Options could include Deep Learning, Information Retrieval, etc.' },
                        { name: 'Institute Level Optional Course-II (ILOC)', keyConcepts: ['Varies'], notes: 'Your final interdisciplinary subject.' }
                    ]
                }
            ],
            skillGuidance: 'Your Final Year Project is your most important academic work. Choose a challenging problem and build a complete, well-documented solution. This will be a major talking point in your interviews. Simultaneously, focus intensely on placement preparation.',
            courses: [
                { platform: 'Coursera', title: 'Google Data Analytics Professional Certificate', description: 'A comprehensive program to become job-ready for a data analyst role.', link: 'https://www.coursera.org/professional-certificates/google-data-analytics' },
                { platform: 'Udemy', title: 'The Complete 2023 Web Development Bootcamp', description: 'A very popular and comprehensive full-stack development course by Angela Yu.', link: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/' }
            ]
        }
    ],
    internshipGuidance: {
        whenToStart: 'Start applying for internships from your second year onwards. The internship at the end of your third year is the most critical for securing a Pre-Placement Offer (PPO).',
        typesOfRoles: [
            { name: 'Full Stack Developer Intern', description: 'Work on both frontend and backend development of web applications.' },
            { name: 'Data Analyst / Scientist Intern', description: 'Analyze data, build dashboards, and create machine learning models to solve business problems.' },
            { name: 'Cloud / DevOps Intern', description: 'Work with cloud infrastructure, automation scripts, and deployment pipelines.' }
        ],
        howToApply: 'A strong portfolio on GitHub is essential. Showcase your projects. Participate in hackathons. For top roles, competitive programming and strong knowledge of core subjects (OS, DBMS, CN) are required.'
    }
  },
  {
    slug: 'extc-engineering-mu',
    name: 'Electronics & Telecommunication (Mumbai University)',
    description: 'EXTC at Mumbai University bridges the worlds of hardware and software, focusing on electronic circuits, communication systems, signal processing, and embedded systems.',
    roadmap: [
        {
            year: 'First Year',
            semesters: [
                {
                    semester: 'Semester 1',
                    subjects: [
                        { name: 'Engineering Mathematics-I', keyConcepts: ['Complex Numbers', 'Matrices', 'Partial Differentiation'], notes: 'Builds the mathematical foundation for all engineering subjects. Master matrices and calculus.' },
                        { name: 'Engineering Physics-I', keyConcepts: ['Quantum Mechanics', 'Crystallography', 'Semiconductor Physics'], notes: 'Focus on the physics behind electronic components, which is crucial for hardware understanding.' },
                        { name: 'Engineering Chemistry-I', keyConcepts: ['Polymers', 'Water Technology', 'Corrosion'], notes: 'Provides insights into materials used in engineering applications.' },
                        { name: 'Engineering Mechanics', keyConcepts: ['Statics', 'Friction', 'Kinematics of Particles'], notes: 'The fundamental principles of forces and motion, essential for robotics and system design.' },
                        { name: 'Basic Electrical Engineering', keyConcepts: ['DC Circuits (KCL, KVL)', 'AC Circuits', 'Transformers'], notes: 'Your first introduction to circuits. Practice circuit analysis problems relentlessly.' }
                    ]
                },
                {
                    semester: 'Semester 2',
                    subjects: [
                        { name: 'Engineering Mathematics-II', keyConcepts: ['Differential Equations', 'Vector Calculus', 'Laplace Transform'], notes: 'Laplace transforms are vital for signal processing and control systems. Focus on solving differential equations.' },
                        { name: 'Engineering Physics-II', keyConcepts: ['Optics', 'Lasers', 'Electrodynamics'], notes: 'Explores wave phenomena and their applications in communication and technology.' },
                        { name: 'Engineering Chemistry-II', keyConcepts: ['Electrochemistry', 'Fuels', 'Green Chemistry'], notes: 'Focuses on energy sources and sustainable chemical processes.' },
                        { name: 'Engineering Drawing', keyConcepts: ['Orthographic Projections', 'Isometric Views', 'CAD basics'], notes: 'The language of engineers. Get comfortable with visualization and drafting, both manually and using software.' },
                        { name: 'C Programming', keyConcepts: ['Pointers', 'Structures', 'File Handling', 'Dynamic Memory Allocation'], notes: 'This is your foundation for all future programming. Master pointers and memory management concepts.' }
                    ]
                }
            ],
            skillGuidance: 'Focus on strong fundamentals. Get your hands dirty early with an Arduino kit to understand the basics of microcontrollers and sensors. Learn how to use a breadboard, multimeter, and practice soldering.',
            courses: [
                { platform: 'Udemy', title: 'Arduino Step by Step: Getting Started', description: 'A hands-on guide to learning the Arduino platform for building interactive electronic projects.', link: 'https://www.udemy.com/course/arduino-sbs-getting-started/' },
                { platform: 'Coursera', title: 'The Raspberry Pi Platform', description: 'Learn to use the Raspberry Pi to build media centers, home automation systems, and more.', link: 'https://www.coursera.org/learn/raspberry-pi-platform' }
            ]
        },
        {
            year: 'Second Year',
            semesters: [
              {
                semester: 'Semester 3',
                subjects: [
                  { name: 'Engineering Mathematics-III', keyConcepts: ['Fourier Series', 'Complex Variables', 'Probability'], notes: 'Fourier series and transforms are the absolute backbone of signal processing. Master them.' },
                  { name: 'Electronic Devices and Circuits', keyConcepts: ['Diodes', 'Transistors (BJT, MOSFET)', 'Biasing', 'Amplifiers'], notes: 'The core of all electronics. Understand how a transistor works as a switch and an amplifier.' },
                  { name: 'Digital System Design', keyConcepts: ['Logic Gates', 'Flip-flops', 'Counters', 'State Machines'], notes: 'Builds on first-year digital logic. Learn to design complex digital systems.' },
                  { name: 'Circuit Theory and Networks', keyConcepts: ['Two-Port Networks', 'Filters', 'Attenuators', 'AC Analysis'], notes: 'Advanced circuit analysis techniques, crucial for designing communication circuits.' },
                  { name: 'Object Oriented Programming', keyConcepts: ['Classes & Objects', 'Inheritance', 'Polymorphism'], notes: 'Usually taught in C++ or Java. Essential for writing structured code for complex systems.' }
                ]
              },
              {
                semester: 'Semester 4',
                subjects: [
                  { name: 'Engineering Mathematics-IV', keyConcepts: ['Linear Algebra', 'Vector Spaces', 'Eigenvalues'], notes: 'Linear Algebra is crucial for advanced signal processing, control systems, and machine learning.' },
                  { name: 'Analog Electronics', keyConcepts: ['Op-Amps', 'Feedback Amplifiers', 'Oscillators', 'Power Amplifiers'], notes: 'A deep dive into analog circuit design using Operational Amplifiers. Very important for practical circuit design.' },
                  { name: 'Microprocessors & Microcontrollers', keyConcepts: ['8086 Architecture', 'Assembly Language', '8051 Microcontroller', 'Interfacing'], notes: 'Learn to program hardware at a low level. This is the heart of embedded systems.' },
                  { name: 'Signals and Systems', keyConcepts: ['Convolution', 'Fourier, Laplace, Z-Transforms', 'LTI Systems'], notes: 'A highly mathematical subject that teaches you the theory behind signal analysis.' },
                  { name: 'Principles of Communication Engineering', keyConcepts: ['AM, FM, PM', 'Noise', 'Sampling', 'Pulse Modulation'], notes: 'Understand how information is encoded onto signals for transmission.' }
                ]
              }
            ],
            electivesGuidance: {
                title: 'Choosing Your Minor Subject',
                description: 'Starting in your second year, you can choose a Minor to gain interdisciplinary skills. This choice complements your core degree and can open up unique career paths by combining your technical knowledge with other domains.',
                options: [
                    { name: 'Computer Science', reason: 'A highly recommended choice for EXTC. This Minor will significantly strengthen your programming skills, which is crucial for careers in Embedded Systems, IoT, or VLSI design.' },
                    { name: 'Innovation and Entrepreneurship (I&E)', reason: 'Perfect for students who dream of starting their own hardware or IoT company. You will learn about business models, product development, and startup finance.' },
                    { name: 'Cloud Computing', reason: 'A technical and in-demand choice, especially if you are interested in IoT. You will learn how to connect your hardware devices to cloud platforms like AWS or Azure.' }
                ]
            },
            skillGuidance: 'This is a very hardware-intensive year. Move beyond Arduino to more powerful microcontrollers like STM32. Learn PCB design using software like KiCad or Eagle. Build projects from scratch, from circuit design to a finished PCB.',
            courses: [
                { platform: 'Udemy', title: 'Mastering Microcontroller and Embedded Driver Development', description: 'A detailed course on programming ARM Cortex-M microcontrollers like the STM32.', link: 'https://www.udemy.com/course/mastering-microcontroller-with-peripheral-driver-development/' },
                { platform: 'Coursera', title: 'Introduction to Electronics', description: 'A course from Georgia Tech covering the fundamentals of electronic circuits.', link: 'https://www.coursera.org/learn/electronics' }
            ]
        },
        {
            year: 'Third Year',
            semesters: [
                {
                    semester: 'Semester 5',
                    subjects: [
                        { name: 'Digital Communication', keyConcepts: ['ASK, FSK, PSK', 'Information Theory', 'Error Control Coding'], notes: 'Focuses on the techniques used in modern digital communication systems, from Wi-Fi to mobile networks.' },
                        { name: 'Electromagnetic Engineering', keyConcepts: ['Maxwell\'s Equations', 'Wave Propagation', 'Transmission Lines', 'Antennas'], notes: 'The physics of radio waves. A challenging but fundamental subject for RF and wireless engineering.' },
                        { name: 'Discrete-Time Signal Processing', keyConcepts: ['DFT, FFT', 'Digital Filter Design (IIR, FIR)'], notes: 'The digital equivalent of Signals and Systems. Learn how to design and implement filters in software.' },
                        { name: 'Computer Communication Networks', keyConcepts: ['TCP/IP Protocol Suite', 'Routing', 'Congestion Control'], notes: 'A detailed look at the protocols that run the internet.' }
                    ]
                },
                {
                    semester: 'Semester 6',
                    subjects: [
                        { name: 'Embedded Systems & Real-Time Operating Systems', keyConcepts: ['RTOS Concepts', 'Task Scheduling', 'ARM Architecture', 'Device Drivers'], notes: 'Learn to build complex, responsive embedded systems that are time-critical.' },
                        { name: 'Mobile Communication Engineering', keyConcepts: ['Cellular Concepts', 'GSM, CDMA', '4G LTE, 5G'], notes: 'Understand how mobile phone networks work.' },
                        { name: 'VLSI Design', keyConcepts: ['MOSFET Physics', 'CMOS Logic Design', 'Layout', 'Verilog/VHDL'], notes: 'An introduction to designing integrated circuits (chips). A highly sought-after skill.' },
                        { name: 'Microwave Engineering', keyConcepts: ['Waveguides', 'Microwave Devices', 'RADAR'], notes: 'Deals with very high-frequency electromagnetic waves used in RADAR and satellite communication.' }
                    ]
                }
            ],
            electivesGuidance: {
                title: 'Choosing DLOC & Honours Subjects',
                description: 'In your third year, you make critical choices that define your specialization. DLOCs allow you to explore specific advanced topics, while an Honours track provides a deep, multi-subject specialization in a high-demand field.',
                dlocOptions: [
                  { name: 'Computer Vision (CV)', reason: 'A subfield of AI focused on enabling computers to "see" and interpret visual information. This is a great choice for EXTC students interested in applying signal processing skills to images and video.' },
                  { name: 'Robotics', reason: 'A natural fit for EXTC, combining electronics, control systems, and programming to build and control robots. This is a very hands-on and project-oriented field.' },
                  { name: 'Digital Signal Processing', reason: 'A deep dive into the mathematical and algorithmic aspects of processing signals, with applications in audio, video, and communications.' }
                ],
                honoursOptions: [
                  { name: 'AIML (Artificial Intelligence & Machine Learning)', reason: 'For EXTC students, this track focuses on the hardware and software aspects of AI, such as deploying ML models on embedded devices (TinyML) and signal processing for AI applications.' },
                  { name: 'IoT (Internet of Things)', reason: 'A perfect specialization for EXTC. This track covers everything from sensor networks and communication protocols to cloud platforms and data analytics for connected devices.' },
                  { name: 'VLSI (Very Large Scale Integration)', reason: 'A highly specialized and rewarding track focused on chip design. You will learn to design complex integrated circuits using industry-standard tools and hardware description languages.' }
                ]
            },
            skillGuidance: 'Focus on a specialization: VLSI, Embedded Systems, or Communication. Learn industry-standard tools. For VLSI, learn Verilog/VHDL and tools like Cadence/Synopsys. For Embedded, master C/C++ and an RTOS. For Communication, learn MATLAB/Simulink. An internship is crucial.',
            courses: [
                { platform: 'Coursera', title: 'Introduction to VLSI Design', description: 'Learn the fundamentals of designing integrated circuits.', link: 'https://www.coursera.org/learn/vlsi-design-part-1' },
                { platform: 'Coursera', title: 'Digital Signal Processing', description: 'A comprehensive course on the theory and application of DSP.', link: 'https://www.coursera.org/learn/digital-signal-processing' }
            ]
        },
        {
            year: 'Final Year',
            semesters: [
                {
                    semester: 'Semester 7',
                    subjects: [
                        { name: 'Optical Communication', keyConcepts: ['Optical Fibers', 'Lasers, LEDs', 'Optical Networks'], notes: 'The backbone of the modern internet. Learn how data is transmitted as light through fiber optic cables.' },
                        { name: 'Wireless Networks', keyConcepts: ['Wi-Fi, Bluetooth', 'Wireless Sensor Networks', 'IoT Protocols'], notes: 'Focuses on the standards and protocols for various wireless technologies.' },
                        { name: 'Department Level Optional Course-III (DLOC)', keyConcepts: ['Varies'], notes: 'Deepen your expertise. Options may include Advanced VLSI, 5G Technology, etc.' },
                        { name: 'Institute Level Optional Course-I (ILOC)', keyConcepts: ['Varies'], notes: 'Choose a subject from another department (e.g., AI/ML, Management).' }
                    ]
                },
                {
                    semester: 'Semester 8',
                    subjects: [
                        { name: 'RF Design', keyConcepts: ['Amplifiers', 'Mixers', 'Oscillators at RF frequencies'], notes: 'A highly specialized field in analog circuit design for wireless communication systems.' },
                        { name: 'Internet of Things (IoT)', keyConcepts: ['Sensors, Actuators', 'IoT Protocols (MQTT)', 'Cloud Platforms'], notes: 'Learn to build and deploy networks of smart, connected devices.' },
                        { name: 'Department Level Optional Course-IV (DLOC)', keyConcepts: ['Varies'], notes: 'Final specialization. Could be RADAR Engineering, Speech Processing, etc.' },
                        { name: 'Institute Level Optional Course-II (ILOC)', keyConcepts: ['Varies'], notes: 'Your final interdisciplinary subject.' }
                    ]
                }
            ],
            skillGuidance: 'Your Final Year Project should be in your chosen domain of specialization and should solve a real-world problem. This is the time to consolidate your skills and prepare for core engineering interviews.',
            courses: [
                { platform: 'Coursera', title: 'Introduction to the Internet of Things (IoT)', description: 'A foundational course on the concepts and technologies behind IoT.', link: 'https://www.coursera.org/learn/iot' },
                { platform: 'Udemy', title: '5G Mobile Network and Wireless Communication', description: 'Understand the architecture and technology behind the 5G revolution.', link: 'https://www.udemy.com/course/5g-mobile-network-and-wireless-communication/' }
            ]
        }
    ],
    internshipGuidance: {
        whenToStart: 'The internship at the end of the third year is vital for securing a job in a core electronics or semiconductor company.',
        typesOfRoles: [
            { name: 'Embedded Software/Hardware Intern', description: 'Work on firmware development, PCB design, and testing for electronic products.' },
            { name: 'VLSI (Design/Verification) Intern', description: 'Work in a semiconductor company using Verilog/VHDL to design or verify digital chips.' },
            { name: 'Telecom/RF Intern', description: 'Work with telecom companies on network planning, testing, or RF circuit design.' }
        ],
        howToApply: 'A portfolio of hands-on projects is more important than grades. Document your projects well. For VLSI roles, a strong understanding of digital logic and computer architecture is a must. For Embedded roles, C programming and OS concepts are key.'
    }
  },
  {
    slug: 'mechanical-engineering-mu',
    name: 'Mechanical Engineering (Mumbai University)',
    description: 'Mechanical Engineering at Mumbai University is a core engineering discipline that involves the design, production, and operation of machinery and thermal systems.',
    roadmap: [
        {
            year: 'First Year',
            semesters: [
                {
                    semester: 'Semester 1',
                    subjects: [
                        { name: 'Engineering Mathematics-I', keyConcepts: ['Complex Numbers', 'Matrices', 'Partial Differentiation'], notes: 'Builds the mathematical foundation for all engineering subjects. Master matrices and calculus.' },
                        { name: 'Engineering Physics-I', keyConcepts: ['Quantum Mechanics', 'Crystallography', 'Semiconductor Physics'], notes: 'Focus on the physics behind electronic components, which is crucial for hardware understanding.' },
                        { name: 'Engineering Chemistry-I', keyConcepts: ['Polymers', 'Water Technology', 'Corrosion'], notes: 'Provides insights into materials used in engineering applications.' },
                        { name: 'Engineering Mechanics', keyConcepts: ['Statics', 'Friction', 'Kinematics of Particles'], notes: 'The fundamental principles of forces and motion, essential for robotics and system design.' },
                        { name: 'Basic Electrical Engineering', keyConcepts: ['DC Circuits (KCL, KVL)', 'AC Circuits', 'Transformers'], notes: 'Your first introduction to circuits. Practice circuit analysis problems relentlessly.' }
                    ]
                },
                {
                    semester: 'Semester 2',
                    subjects: [
                        { name: 'Engineering Mathematics-II', keyConcepts: ['Differential Equations', 'Vector Calculus', 'Laplace Transform'], notes: 'Laplace transforms are vital for signal processing and control systems. Focus on solving differential equations.' },
                        { name: 'Engineering Physics-II', keyConcepts: ['Optics', 'Lasers', 'Electrodynamics'], notes: 'Explores wave phenomena and their applications in communication and technology.' },
                        { name: 'Engineering Chemistry-II', keyConcepts: ['Electrochemistry', 'Fuels', 'Green Chemistry'], notes: 'Focuses on energy sources and sustainable chemical processes.' },
                        { name: 'Engineering Drawing', keyConcepts: ['Orthographic Projections', 'Isometric Views', 'CAD basics'], notes: 'The language of engineers. Get comfortable with visualization and drafting, both manually and using software.' },
                        { name: 'C Programming', keyConcepts: ['Pointers', 'Structures', 'File Handling', 'Dynamic Memory Allocation'], notes: 'This is your foundation for all future programming. Master pointers and memory management concepts.' }
                    ]
                }
            ],
            skillGuidance: 'Master Engineering Drawing and Mechanics as these are the cornerstones of Mechanical Engineering. Get hands-on experience in the workshop. Start learning a CAD software like AutoCAD or SolidWorks early.',
            courses: [
                { platform: 'Coursera', title: 'Autodesk CAD/CAM for Manufacturing', description: 'Master CAD (Computer-Aided Design) and CAM for manufacturing with industry-standard software.', link: 'https://www.coursera.org/specializations/autodesk-cad-cam-manufacturing' },
                { platform: 'Udemy', title: 'Engineering Mechanics: Statics', description: 'A comprehensive course covering the fundamentals of statics and structural analysis.', link: 'https://www.udemy.com/course/engineering-mechanics-statics-2/' }
            ]
        },
        {
            year: 'Second Year',
            semesters: [
              {
                semester: 'Semester 3',
                subjects: [
                  { name: 'Engineering Mathematics-III', keyConcepts: ['Fourier Series', 'Complex Variables', 'Probability'], notes: 'Important for understanding vibrations and advanced mathematical modeling.' },
                  { name: 'Strength of Materials', keyConcepts: ['Stress & Strain', 'Shear Force & Bending Moment', 'Torsion'], notes: 'The science of how solid objects deform and fail. Crucial for any design role. Master SFD and BMD diagrams.' },
                  { name: 'Production Processes', keyConcepts: ['Casting', 'Welding', 'Machining', 'Forming'], notes: 'Learn the various ways in which metal components are manufactured.' },
                  { name: 'Thermodynamics', keyConcepts: ['Laws of Thermodynamics', 'Power Cycles (Otto, Diesel)', 'Properties of Pure Substances'], notes: 'The science of energy. Fundamental to power plants, engines, and HVAC systems.' },
                  { name: 'Material Science', keyConcepts: ['Crystal Structures', 'Phase Diagrams', 'Heat Treatment'], notes: 'Understand the properties of materials and how to select the right one for a job.' }
                ]
              },
              {
                semester: 'Semester 4',
                subjects: [
                  { name: 'Engineering Mathematics-IV', keyConcepts: ['Linear Algebra', 'Numerical Methods', 'Optimization'], notes: 'Numerical methods are very important for using simulation software like FEA and CFD.' },
                  { name: 'Fluid Mechanics', keyConcepts: ['Fluid Statics', 'Bernoulli\'s Equation', 'Flow through Pipes', 'Boundary Layer'], notes: 'The science of fluids in motion. Essential for aerodynamics and hydraulics.' },
                  { name: 'Theory of Machines-I', keyConcepts: ['Mechanisms', 'Velocity & Acceleration Analysis', 'Cams'], notes: 'The study of the relative motion between machine parts.' },
                  { name: 'Industrial Electronics', keyConcepts: ['Sensors', 'Transducers', 'PLC basics'], notes: 'An introduction to the electronic components used in modern machinery.' },
                  { name: 'Production Machine Tools', keyConcepts: ['Lathe, Milling, Drilling Machines', 'Cutting Tools', 'Metrology'], notes: 'A deeper dive into the machines and techniques used in manufacturing.' }
                ]
              }
            ],
            electivesGuidance: {
                title: 'Choosing Your Minor Subject',
                description: 'Starting in your second year, you can choose a Minor to gain interdisciplinary skills. This choice complements your core degree and can open up unique career paths by combining your technical knowledge with other domains.',
                options: [
                    { name: 'Robotics', reason: 'A natural fit for Mechanical engineers. This will add programming and electronics knowledge to your core mechanical skills, preparing you for the high-growth field of automation and mechatronics.' },
                    { name: 'Computer Science', reason: 'A very valuable choice. Learning to code (especially in Python) allows you to perform advanced simulations, analyze test data, and work on the software side of mechanical systems.' },
                    { name: 'Innovation and Entrepreneurship (I&E)', reason: 'Perfect for students who want to create and market their own physical products. You will learn the business skills necessary to turn an engineering idea into a successful venture.' }
                ]
            },
            skillGuidance: 'This is the year to join a collegiate club like SAE BAJA, Formula Student, or a robotics club. The practical experience gained here is invaluable and highly respected by employers. Get certified in a CAD software like SolidWorks (CSWA).',
            courses: [
                { platform: 'Coursera', title: 'Introduction to Thermodynamics', description: 'A course from the University of Michigan covering the core concepts of thermodynamics.', link: 'https://www.coursera.org/learn/thermodynamics-intro' },
                { platform: 'Udemy', title: 'SolidWorks: Become a Certified Associate', description: 'Prepare for the official CSWA certification exam with this hands-on course.', link: 'https://www.udemy.com/course/solidworks-cswa-prep-course/' }
            ]
        },
        {
            year: 'Third Year',
            semesters: [
                {
                    semester: 'Semester 5',
                    subjects: [
                        { name: 'Heat Transfer', keyConcepts: ['Conduction', 'Convection', 'Radiation', 'Heat Exchangers'], notes: 'The science of how thermal energy is transferred. Crucial for designing engines, power plants, and cooling systems.' },
                        { name: 'Theory of Machines-II', keyConcepts: ['Gears & Gear Trains', 'Vibrations', 'Balancing'], notes: 'Continues from ToM-I, focusing on rotational components and dynamics.' },
                        { name: 'Machine Design-I', keyConcepts: ['Design against Static & Fatigue Loading', 'Design of Joints, Levers, Shafts'], notes: 'The application of mechanics and material science to design machine components.' },
                        { name: 'Mechatronics', keyConcepts: ['Microcontrollers', 'Sensors & Actuators', 'Automation'], notes: 'The integration of mechanical, electrical, and computer engineering.' }
                    ]
                },
                {
                    semester: 'Semester 6',
                    subjects: [
                        { name: 'Finite Element Analysis', keyConcepts: ['Discretization', 'Stiffness Matrix', 'Meshing'], notes: 'Learn the theory behind simulation software like ANSYS. A very powerful tool for modern design engineers.' },
                        { name: 'Refrigeration and Air Conditioning', keyConcepts: ['Vapor Compression Cycle', 'Psychrometry', 'Cooling Load Calculation'], notes: 'The science and application of HVAC systems.' },
                        { name: 'Machine Design-II', keyConcepts: ['Design of Bearings, Gears, Brakes', 'Pressure Vessels'], notes: 'Continues from MD-I with more complex machine elements.' },
                        { name: 'Control Systems', keyConcepts: ['Laplace Transforms', 'Block Diagrams', 'Stability Analysis'], notes: 'Learn how to model and control dynamic systems. Important for robotics and automation.' }
                    ]
                }
            ],
            electivesGuidance: {
                title: 'Choosing DLOC & Honours Subjects',
                description: 'In your third year, you make critical choices that define your specialization. DLOCs allow you to explore specific advanced topics, while an Honours track provides a deep, multi-subject specialization in a high-demand field.',
                dlocOptions: [
                  { name: 'Automobile Engineering', reason: 'A comprehensive study of vehicle design, including engines, chassis, and modern electric vehicle technology. A must for a career in the automotive industry.' },
                  { name: 'Robotics', reason: 'A deep dive into robot kinematics, dynamics, and control systems. This is a very hands-on DLOC that prepares you for the automation industry.' },
                  { name: 'Computational Fluid Dynamics (CFD)', reason: 'Learn to use software to simulate fluid flow. This is a high-demand skill in the aerospace, automotive, and energy sectors for designing more efficient systems.' }
                ],
                honoursOptions: [
                  { name: 'Electric Vehicles (EV)', reason: 'A future-proof specialization focused on the design and development of electric cars, including battery technology, motor design, and thermal management.' },
                  { name: 'Robotics and Automation', reason: 'A comprehensive track covering advanced robotics, industrial automation, and AI for mechanical systems. This prepares you to design and manage the smart factories of the future.' },
                  { name: 'Advanced Thermal Engineering', reason: 'A specialized track for those interested in power generation or aerospace. It covers the design of jet engines, advanced power plants, and complex cooling solutions.' }
                ]
            },
            skillGuidance: 'Master a simulation software (ANSYS for FEA/CFD). Take a lead role in your collegiate club project. This is the most important year for a summer internship in a core manufacturing or design company.',
            courses: [
                { platform: 'Udemy', title: 'Ansys for Beginners', description: 'Learn the fundamentals of Finite Element Analysis using the industry-standard software.', link: 'https://www.udemy.com/course/ansys-for-beginners/' },
                { platform: 'edX', title: 'Introduction to Robotics from University of Pennsylvania', description: 'Explore the fundamental concepts of robotics, from kinematics to robot programming.', link: 'https://www.edx.org/learn/robotics/the-university-of-pennsylvania-robotics' }
            ]
        },
        {
            year: 'Final Year',
            semesters: [
                {
                    semester: 'Semester 7',
                    subjects: [
                        { name: 'CAD/CAM/CAE', keyConcepts: ['Geometric Modeling', 'CNC Programming', 'Computer Aided Manufacturing'], notes: 'The integration of computers in design and manufacturing.' },
                        { name: 'Production Planning and Control', keyConcepts: ['Forecasting', 'Inventory Control', 'Scheduling'], notes: 'Focuses on the management side of a manufacturing plant.' },
                        { name: 'Department Level Optional Course-III (DLOC)', keyConcepts: ['Varies'], notes: 'Deepen your expertise. Options could include Power Plant Engineering, Advanced Turbo Machinery, etc.' },
                        { name: 'Institute Level Optional Course-I (ILOC)', keyConcepts: ['Varies'], notes: 'Choose a subject from another department to broaden your knowledge.' }
                    ]
                },
                {
                    semester: 'Semester 8',
                    subjects: [
                        { name: 'Industrial Engineering and Management', keyConcepts: ['Work-Study', 'Quality Control', 'Operations Research'], notes: 'Focuses on optimizing complex processes or systems.' },
                        { name: 'Power Engineering', keyConcepts: ['Steam & Gas Turbines', 'Nuclear Power Plants', 'Renewable Energy'], notes: 'A deep dive into large-scale power generation.' },
                        { name: 'Department Level Optional Course-IV (DLOC)', keyConcepts: ['Varies'], notes: 'Final specialization. Could be Robotics, Cryogenics, etc.' },
                        { name: 'Institute Level Optional Course-II (ILOC)', keyConcepts: ['Varies'], notes: 'Your final interdisciplinary subject.' }
                    ]
                }
            ],
            skillGuidance: 'Your Final Year Project should be a hardware project that demonstrates your design, analysis, and manufacturing skills. This is your best chance to impress recruiters from core engineering companies.',
            courses: [
                { platform: 'Coursera', title: 'Project Management: Principles and Practices', description: 'A foundational course on managing projects, useful for final year projects and future careers.', link: 'https://www.coursera.org/specializations/project-management' },
                { platform: 'Udemy', title: 'CNC Programming using G & M Codes', description: 'Learn the language of CNC machines, a key skill for modern manufacturing.', link: 'https://www.udemy.com/course/cnc-milling-programming-g-code/' }
            ]
        }
    ],
    internshipGuidance: {
        whenToStart: 'The internship after the third year is critical. Target manufacturing companies (automotive, aerospace, FMCG) or design consultancies.',
        typesOfRoles: [
            { name: 'Design Engineer Intern', description: 'Work with CAD/CAE software to design and analyze components.' },
            { name: 'Production/Manufacturing Intern', description: 'Work on the factory floor to optimize production processes and ensure quality.' },
            { name: 'R&D Intern', description: 'Work in a research setting on new product development and testing.' }
        ],
        howToApply: 'A portfolio of practical projects (especially from clubs like BAJA/Formula Student) is more important than CGPA for core companies. Highlight your software skills (CAD, ANSYS) on your resume.'
    }
  },
  {
    slug: 'civil-engineering-mu',
    name: 'Civil Engineering (Mumbai University)',
    description: 'Civil Engineering at Mumbai University deals with the design, construction, and maintenance of the physical and naturally built environment, including infrastructure like roads, bridges, and buildings.',
    roadmap: [
        {
            year: 'First Year',
            semesters: [
                {
                    semester: 'Semester 1',
                    subjects: [
                        { name: 'Engineering Mathematics-I', keyConcepts: ['Complex Numbers', 'Matrices', 'Partial Differentiation'], notes: 'Builds the mathematical foundation for all engineering subjects. Master matrices and calculus.' },
                        { name: 'Engineering Physics-I', keyConcepts: ['Quantum Mechanics', 'Crystallography', 'Semiconductor Physics'], notes: 'Focus on the physics behind electronic components, which is crucial for hardware understanding.' },
                        { name: 'Engineering Chemistry-I', keyConcepts: ['Polymers', 'Water Technology', 'Corrosion'], notes: 'Provides insights into materials used in engineering applications.' },
                        { name: 'Engineering Mechanics', keyConcepts: ['Statics', 'Friction', 'Kinematics of Particles'], notes: 'The fundamental principles of forces and motion, essential for robotics and system design.' },
                        { name: 'Basic Electrical Engineering', keyConcepts: ['DC Circuits (KCL, KVL)', 'AC Circuits', 'Transformers'], notes: 'Your first introduction to circuits. Practice circuit analysis problems relentlessly.' }
                    ]
                },
                {
                    semester: 'Semester 2',
                    subjects: [
                        { name: 'Engineering Mathematics-II', keyConcepts: ['Differential Equations', 'Vector Calculus', 'Laplace Transform'], notes: 'Laplace transforms are vital for signal processing and control systems. Focus on solving differential equations.' },
                        { name: 'Engineering Physics-II', keyConcepts: ['Optics', 'Lasers', 'Electrodynamics'], notes: 'Explores wave phenomena and their applications in communication and technology.' },
                        { name: 'Engineering Chemistry-II', keyConcepts: ['Electrochemistry', 'Fuels', 'Green Chemistry'], notes: 'Focuses on energy sources and sustainable chemical processes.' },
                        { name: 'Engineering Drawing', keyConcepts: ['Orthographic Projections', 'Isometric Views', 'CAD basics'], notes: 'The language of engineers. Get comfortable with visualization and drafting, both manually and using software.' },
                        { name: 'C Programming', keyConcepts: ['Pointers', 'Structures', 'File Handling', 'Dynamic Memory Allocation'], notes: 'This is your foundation for all future programming. Master pointers and memory management concepts.' }
                    ]
                }
            ],
            skillGuidance: 'Master Engineering Mechanics and Drawing. These are the most critical subjects for a Civil Engineer. Start learning AutoCAD for 2D drafting as soon as possible.',
            courses: [
                { platform: 'Udemy', title: 'AutoCAD - Beginner to Advanced', description: 'Master the essential drafting software for all civil engineers.', link: 'https://www.udemy.com/course/autocad-2021/' },
                { platform: 'Coursera', title: 'Mechanics of Materials I: Fundamentals of Stress & Strain', description: 'A foundational course from Georgia Tech on Strength of Materials.', link: 'https://www.coursera.org/learn/mechanics-1' }
            ]
        },
        {
            year: 'Second Year',
            semesters: [
                {
                    semester: 'Semester 3',
                    subjects: [
                        { name: 'Engineering Mathematics-III', keyConcepts: ['Fourier Series', 'Complex Variables', 'Probability'], notes: 'Important for advanced structural analysis and project management techniques.' },
                        { name: 'Surveying-I', keyConcepts: ['Chain & Compass Survey', 'Levelling', 'Contouring'], notes: 'The practical art of measuring land. Involves a lot of fieldwork.' },
                        { name: 'Strength of Materials', keyConcepts: ['Stress & Strain', 'Shear Force & Bending Moment Diagrams (SFD & BMD)'], notes: 'The science of how materials respond to loads. Master SFD & BMD as it is a fundamental skill.' },
                        { name: 'Building Materials & Construction', keyConcepts: ['Cement, Concrete, Steel', 'Masonry', 'Flooring'], notes: 'Understand the properties and applications of all major construction materials.' },
                        { name: 'Fluid Mechanics-I', keyConcepts: ['Fluid Properties', 'Hydrostatics', 'Kinematics of Flow'], notes: 'Essential for water resource and irrigation engineering.' }
                    ]
                },
                {
                    semester: 'Semester 4',
                    subjects: [
                        { name: 'Engineering Mathematics-IV', keyConcepts: ['Linear Algebra', 'Numerical Methods', 'Optimization'], notes: 'Numerical methods are crucial for using structural analysis software.' },
                        { name: 'Surveying-II', keyConcepts: ['Theodolite', 'Tacheometry', 'Remote Sensing, GIS'], notes: 'Advanced surveying techniques using modern instruments.' },
                        { name: 'Structural Analysis-I', keyConcepts: ['Indeterminate Structures', 'Slope-Deflection Method', 'Moment Distribution Method'], notes: 'The core of structural engineering. This is where you learn to analyze complex frames and trusses.' },
                        { name: 'Fluid Mechanics-II', keyConcepts: ['Open Channel Flow', 'Hydraulic Jumps', 'Turbines'], notes: 'Focuses on the application of fluid mechanics in large-scale systems like canals and dams.' },
                        { name: 'Concrete Technology', keyConcepts: ['Properties of Concrete', 'Mix Design', 'Admixtures'], notes: 'A deep dive into the most used construction material in the world.' }
                    ]
                }
            ],
            electivesGuidance: {
                title: 'Choosing Your Minor Subject',
                description: 'Starting in your second year, you can choose a Minor to gain interdisciplinary skills. This choice complements your core degree and can open up unique career paths by combining your technical knowledge with other domains.',
                options: [
                    { name: 'Town and City Planning', reason: 'A classic choice for Civil engineers. This Minor gives you a macro-level understanding of urban development, which is invaluable for a career in infrastructure planning or government service.' },
                    { name: 'Geo-informatics', reason: 'A highly technical Minor that combines surveying with modern GIS and remote sensing technology. This is a high-growth area for creating smart cities and managing large-scale infrastructure projects.' },
                    { name: 'Innovation and Entrepreneurship (I&E)', reason: 'Ideal for students who want to start their own construction or consulting firm. You will learn the business and financial skills needed to succeed as an entrepreneur in the construction industry.' }
                ]
            },
            skillGuidance: 'Start learning a structural analysis software like STAAD.Pro or ETABS. It is a must-have skill. A site internship during the summer break is highly recommended to get practical exposure.',
            courses: [
                { platform: 'Udemy', title: 'STAAD.Pro - Structural Analysis and Design', description: 'A comprehensive course on the industry-standard software for structural design.', link: 'https://www.udemy.com/course/staad-pro-for-beginners-and-professionals/' },
                { platform: 'Coursera', title: 'Fundamentals of GIS', description: 'Learn about Geographic Information Systems for spatial data analysis and mapping.', link: 'https://www.coursera.org/learn/fundamentals-of-gis' }
            ]
        },
        {
            year: 'Third Year',
            semesters: [
                {
                    semester: 'Semester 5',
                    subjects: [
                        { name: 'Geotechnical Engineering-I', keyConcepts: ['Soil Classification', 'Permeability', 'Compaction', 'Shear Strength'], notes: 'The "Strength of Materials" for soil. Crucial for designing foundations.' },
                        { name: 'Structural Analysis-II', keyConcepts: ['Influence Line Diagrams', 'Matrix Methods of Analysis (Stiffness Method)'], notes: 'Advanced methods for analyzing large and complex structures.' },
                        { name: 'Design and Drawing of Steel Structures', keyConcepts: ['Design of Tension & Compression Members', 'Beams', 'Connections (Bolted, Welded)'], notes: 'Learn to design steel structures according to industry codes (IS 800).' },
                        { name: 'Transportation Engineering-I', keyConcepts: ['Highway Geometric Design', 'Traffic Engineering'], notes: 'Focuses on the planning and design of roads and highways.' }
                    ]
                },
                {
                    semester: 'Semester 6',
                    subjects: [
                        { name: 'Geotechnical Engineering-II', keyConcepts: ['Earth Pressure', 'Stability of Slopes', 'Foundation Design (Shallow & Deep)'], notes: 'Application of soil mechanics to design foundations and retaining walls.' },
                        { name: 'Design and Drawing of Reinforced Concrete Structures', keyConcepts: ['Limit State Method', 'Design of Beams, Slabs, Columns, Footings'], notes: 'The most important design subject. Learn to design concrete structures using industry codes (IS 456).' },
                        { name: 'Environmental Engineering-I', keyConcepts: ['Water Demand', 'Water Treatment Processes', 'Sewer Design'], notes: 'Focuses on water supply and wastewater management.' },
                        { name: 'Transportation Engineering-II', keyConcepts: ['Pavement Materials', 'Railway Engineering', 'Airport Engineering'], notes: 'Covers materials and design for roads, railways, and airports.' }
                    ]
                }
            ],
            electivesGuidance: {
                title: 'Choosing DLOC & Honours Subjects',
                description: 'In your third year, you make critical choices that define your specialization. DLOCs allow you to explore specific advanced topics, while an Honours track provides a deep, multi-subject specialization in a high-demand field.',
                dlocOptions: [
                  { name: 'Advanced Structural Analysis', reason: 'A theoretical DLOC for those interested in a career in pure structural design or pursuing higher studies. It covers complex matrix methods and finite element analysis.' },
                  { name: 'Pavement Subgrade and Materials', reason: 'A specialized course for those interested in highway engineering. You will learn to design and test materials for building durable and efficient roads.' },
                  { name: 'Water Resource Engineering', reason: 'Focuses on the management of water resources, including the design of dams, canals, and hydropower projects. Ideal for a career in the public sector or large infrastructure firms.' }
                ],
                honoursOptions: [
                  { name: 'Advanced Structural Engineering', reason: 'A comprehensive track that prepares you for a career as a structural design consultant. It covers earthquake engineering, bridge design, and advanced concrete and steel design.' },
                  { name: 'Construction Management', reason: 'A track focused on the business and management side of construction. You will learn project scheduling, cost estimation, and contract management, preparing you for a role as a Project Manager.' },
                  { name: 'Geotechnical Engineering', reason: 'A specialized track for those who want to become foundation experts. You will learn to design foundations for high-rise buildings, bridges, and other complex structures.' }
                ]
            },
            skillGuidance: 'Master at least one structural design software (STAAD.Pro or ETABS). Learn project management software like MS Project or Primavera. Work on a mini-project involving the complete design and estimation of a small building.',
            courses: [
                { platform: 'Udemy', title: 'Primavera P6 for Project Management', description: 'Learn the industry-standard software for construction planning and scheduling.', link: 'https://www.udemy.com/course/primavera-p6-for-project-management/' },
                { platform: 'Coursera', title: 'Mastering bitumen for roads and pavements', description: 'A specialized course on materials used in highway construction.', link: 'https://www.coursera.org/learn/bitumen-pavement' }
            ]
        },
        {
            year: 'Final Year',
            semesters: [
                {
                    semester: 'Semester 7',
                    subjects: [
                        { name: 'Quantity Survey, Estimation and Valuation', keyConcepts: ['Rate Analysis', 'Cost Estimation', 'Tendering', 'Valuation'], notes: 'The business side of construction. Learn how to estimate project costs and prepare tenders.' },
                        { name: 'Construction Management', keyConcepts: ['Project Planning (CPM, PERT)', 'Site Organization', 'Safety'], notes: 'Learn to manage large-scale construction projects efficiently and safely.' },
                        { name: 'Department Level Optional Course-III (DLOC)', keyConcepts: ['Varies'], notes: 'Deepen your expertise. Options could include Bridge Engineering, Earthquake Engineering, etc.' },
                        { name: 'Institute Level Optional Course-I (ILOC)', keyConcepts: ['Varies'], notes: 'Choose an interdisciplinary subject to broaden your skills.' }
                    ]
                },
                {
                    semester: 'Semester 8',
                    subjects: [
                        { name: 'Construction Engineering', keyConcepts: ['Construction Equipment', 'Formwork', 'Pre-stressed Concrete'], notes: 'Focuses on the practical aspects and modern technologies used in construction.' },
                        { name: 'Contracts and Legal Aspects', keyConcepts: ['Types of Contracts', 'Arbitration', 'Legal Frameworks'], notes: 'Understand the legal and contractual side of the construction industry.' },
                        { name: 'Department Level Optional Course-IV (DLOC)', keyConcepts: ['Varies'], notes: 'Final specialization. Could be Pavement Design, Offshore Structures, etc.' },
                        { name: 'Institute Level Optional Course-II (ILOC)', keyConcepts: ['Varies'], notes: 'Your final interdisciplinary subject.' }
                    ]
                }
            ],
            skillGuidance: 'Your Final Year Project is your opportunity to showcase your design and management skills. Choose a real-world project. Focus on placement preparation by revising all core subjects, especially Structural Analysis and Design.',
            courses: [
                { platform: 'Coursera', title: 'Construction Management Specialization', description: 'Learn the fundamentals of the construction industry, from project initiation to closeout.', link: 'https://www.coursera.org/specializations/construction-management' },
                { platform: 'edX', title: 'Introduction to Project Management', description: 'A course from the University of Adelaide on the principles of project management.', link: 'https://www.edx.org/learn/project-management/the-university-of-adelaide-introduction-to-project-management' }
            ]
        }
    ],
    internshipGuidance: {
        whenToStart: 'A site internship after the second year is essential. Aim for an internship with a major construction company or a structural design consultancy after the third year.',
        typesOfRoles: [
            { name: 'Site Engineer Intern', description: 'Work on a construction site, overseeing execution and quality control.' },
            { name: 'Structural Design Intern', description: 'Work in a design office using software like STAAD.Pro or ETABS.' },
            { name: 'Project Management Intern', description: 'Work with planning and scheduling teams on a large project.' }
        ],
        howToApply: 'Practical site experience is highly valued. Highlight software skills (AutoCAD, STAAD.Pro) on your resume. Network with alumni working in top infrastructure and real estate companies.'
    }
  }
];

