// src/roadmapData.js

export const roadmapData = [
    {
        slug: 'computer-science',
        name: 'Computer Science',
        description: 'Computer Science engineering deals with the design and management of information systems, including both software and hardware processes. It\'s a vast field with applications in AI, web technology, and data science.',
        roadmap: [
            {
                year: 'Year 1: Foundations',
                semesters: [
                    {
                        semester: 'Semester 1',
                        subjects: [
                            { name: 'Programming Fundamentals (Python/C++)', keyConcepts: ['Variables', 'Control Flow', 'Loops', 'Functions', 'Basic I/O'], notes: 'Focus on building strong logical thinking and problem-solving skills. The choice of language is less important than mastering the core concepts. Practice consistently on platforms like HackerRank or LeetCode.' },
                            { name: 'Discrete Mathematics', keyConcepts: ['Set Theory', 'Logic & Proofs', 'Graph Theory', 'Combinatorics'], notes: 'This is the backbone of computer science. Understanding this well will make learning algorithms and data structures much easier. Pay close attention to proofs and graph theory.' },
                            { name: 'Digital Logic & Design', keyConcepts: ['Logic Gates', 'Boolean Algebra', 'K-Maps', 'Combinational & Sequential Circuits'], notes: 'Provides a fundamental understanding of how computer hardware works at the lowest level. It connects the world of software to the physical world of electronics.' }
                        ]
                    },
                    {
                        semester: 'Semester 2',
                        subjects: [
                            { name: 'Data Structures', keyConcepts: ['Arrays', 'Linked Lists', 'Stacks & Queues', 'Trees', 'Hash Tables', 'Big O Notation'], notes: 'Arguably the most important subject for interviews. Focus on understanding the time and space complexity (Big O) of each operation for every data structure.' },
                            { name: 'Calculus & Linear Algebra', keyConcepts: ['Derivatives & Integrals', 'Vectors & Matrices', 'Eigenvalues'], notes: 'Crucial for advanced fields like Machine Learning, Computer Graphics, and Data Science. Practice matrix operations thoroughly.' },
                            { name: 'Object-Oriented Programming (Java/C++)', keyConcepts: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction'], notes: 'Shift your thinking from procedural to object-oriented. Build small projects to solidify your understanding of how to model real-world entities using classes.' }
                        ]
                    }
                ],
                skillGuidance: 'Your goal in the first year is to build a rock-solid foundation. Start solving problems on competitive programming websites daily. Learn Git and GitHub for version control – it\'s a non-negotiable skill. Try building a very simple personal project, like a command-line calculator or a simple text-based game, to apply what you\'ve learned.'
            },
            {
                year: 'Year 2: Core Concepts',
                semesters: [
                    {
                        semester: 'Semester 3',
                        subjects: [
                            { name: 'Advanced Algorithms', keyConcepts: ['Sorting & Searching Algos', 'Greedy Algorithms', 'Dynamic Programming', 'Graph Algorithms (DFS, BFS, Dijkstra)'], notes: 'This builds directly on Data Structures. Focus on understanding the design patterns of algorithms. Dynamic Programming can be tough, so practice a wide variety of problems.' },
                            { name: 'Operating Systems', keyConcepts: ['Processes & Threads', 'CPU Scheduling', 'Memory Management', 'Deadlocks', 'File Systems'], notes: 'Understand the "why" behind how a computer manages resources. It\'s a theory-heavy subject with immense practical value in system design.' },
                            { name: 'Database Management Systems (SQL)', keyConcepts: ['Relational Model', 'SQL Queries (Joins)', 'Normalization (1NF, 2NF, 3NF)', 'ACID Properties'], notes: 'Every application needs a database. Master SQL, especially JOINs. Understand normalization to design efficient and robust database schemas.' }
                        ]
                    },
                    {
                        semester: 'Semester 4',
                        subjects: [
                            { name: 'Computer Networks', keyConcepts: ['OSI & TCP/IP Models', 'IP Addressing', 'HTTP/HTTPS', 'DNS', 'TCP vs UDP'], notes: 'Learn how the internet works. This knowledge is essential for web development, cybersecurity, and distributed systems.' },
                            { name: 'Software Engineering', keyConcepts: ['SDLC Models (Agile, Waterfall)', 'UML Diagrams', 'Requirement Analysis', 'Testing Methodologies'], notes: 'This subject teaches you how to build software professionally in a team. Focus on Agile methodologies as they are widely used in the industry.' },
                            { name: 'Theory of Computation', keyConcepts: ['Finite Automata', 'Regular Expressions', 'Context-Free Grammars', 'Turing Machines'], notes: 'A theoretical subject that explores the limits of what can be computed. It provides a deeper understanding of compilers and programming languages.' }
                        ]
                    }
                ],
                skillGuidance: 'Start building full-fledged projects. Create a web application with a frontend, backend, and a database. Learn a web framework like React/Angular/Vue for the frontend and Node.js/Django/Spring for the backend. This is the perfect time to start contributing to open-source projects to gain real-world experience.',
                electivesGuidance: {
                    title: 'Choosing Your Minor Subject',
                    description: 'A minor allows you to gain structured knowledge in a complementary field. Your choice can open up unique career opportunities.',
                    options: [
                        { name: 'Data Science', reason: 'Excellent choice if you are interested in AI/ML. It provides a strong statistical foundation that is crucial for a Data Scientist or ML Engineer role.' },
                        { name: 'Finance or Economics', reason: 'A great option for a career in FinTech. You will learn the domain knowledge required to build trading systems, payment gateways, and other financial software.' },
                        { name: 'Human-Computer Interaction (HCI) / Design', reason: 'Perfect for those interested in Frontend Development, UI/UX Design, or Product Management. It focuses on making technology user-friendly.' }
                    ]
                }
            },
            {
                year: 'Year 3: Specialization',
                semesters: [
                    {
                        semester: 'Semester 5',
                        subjects: [
                            { name: 'Artificial Intelligence & Machine Learning', keyConcepts: ['Search Algorithms', 'Supervised vs Unsupervised Learning', 'Regression', 'Classification', 'Neural Networks'], notes: 'Get hands-on experience with libraries like Scikit-learn and TensorFlow/PyTorch. The theory is important, but practical application is key.'},
                            { name: 'Web Development', keyConcepts: ['Frontend Frameworks (React/Angular)', 'Backend APIs (REST, GraphQL)', 'Databases (SQL/NoSQL)'], notes: 'This subject is often project-based. Build a complete, functional web application to add to your portfolio.'},
                            { name: 'Compiler Design', keyConcepts: ['Lexical Analysis', 'Parsing', 'Syntax-Directed Translation', 'Code Optimization'], notes: 'A challenging but rewarding subject that demystifies how code is converted into machine-executable instructions.'}
                        ]
                    },
                    {
                        semester: 'Semester 6',
                        subjects: [
                             { name: 'Cybersecurity Fundamentals', keyConcepts: ['Cryptography', 'Network Security', 'Ethical Hacking', 'Security Models'], notes: 'Provides a broad overview of the security landscape. A great starting point for a career in information security.'},
                             { name: 'Distributed Systems', keyConcepts: ['Scalability', 'Fault Tolerance', 'Consistency Models (CAP Theorem)', 'Distributed Consensus'], notes: 'Essential for understanding how large-scale applications like Google Search or Netflix work. Focus on the core trade-offs.'},
                        ]
                    }
                ],
                skillGuidance: 'Deepen your specialization. If you chose web development, master concepts like microservices and containerization (Docker, Kubernetes). If you chose AI/ML, build complex projects and participate in Kaggle competitions. This is the prime time to start preparing for interviews, focusing on both coding and system design concepts.',
                electivesGuidance: {
                    title: 'Choosing DLOC & Honours Subjects',
                    description: 'DLOCs (Department Level Optional Courses) and Honours subjects allow you to specialize deeply in advanced topics within Computer Science.',
                    dlocOptions: [
                        { name: 'Cloud Computing', reason: 'High-demand skill. Learn about AWS, Azure, or GCP. Essential for backend, DevOps, and SRE roles.' },
                        { name: 'Blockchain Technology', reason: 'A niche but rapidly growing field. Choose this if you are interested in cryptocurrencies, decentralized finance (DeFi), and Web3.' },
                        { name: 'Advanced Web Technologies', reason: 'Goes beyond basic web dev, covering modern architectures, performance optimization, and advanced frontend/backend frameworks.' }
                    ],
                    honoursOptions: [
                        { name: 'Advanced Machine Learning', reason: 'For those aiming for research or specialized ML roles. Covers topics like Deep Learning, Reinforcement Learning, and NLP in depth.' },
                        { name: 'High-Performance Computing', reason: 'Focuses on writing highly optimized code that runs on parallel processors and supercomputers. Relevant for scientific computing and core systems roles.' },
                        { name: 'Information Security', reason: 'A direct path to a career in cybersecurity. Covers advanced cryptography, network security, and ethical hacking.' }
                    ]
                }
            },
            {
                year: 'Year 4: Advanced Topics & Project',
                semesters: [
                    {
                        semester: 'Semester 7',
                        subjects: [
                            { name: 'Cloud Computing', keyConcepts: ['IaaS, PaaS, SaaS', 'Virtualization', 'Serverless Architecture', 'Container Orchestration'], notes: 'Hands-on practice with a major cloud provider (AWS, Azure, GCP) is essential. Get certified if possible.'},
                            { name: 'Advanced Electives', keyConcepts: ['Varies by specialization'], notes: 'Choose electives that align with your career goals and deepen your expertise in your chosen honors track.'}
                        ]
                    },
                    {
                        semester: 'Semester 8',
                        subjects: [
                            { name: 'Capstone Project', keyConcepts: ['Problem Definition', 'System Design', 'Implementation', 'Testing', 'Documentation'], notes: 'This is the culmination of your degree. Choose a challenging project that solves a real-world problem and showcases your skills to potential employers.'},
                            { name: 'Internship/Industrial Training', keyConcepts: ['Professionalism', 'Teamwork', 'Real-world Problem Solving'], notes: 'Apply your academic knowledge in a professional setting. This is your best chance to secure a Pre-Placement Offer (PPO).'}
                        ]
                    }
                ],
                skillGuidance: 'Your Capstone Project is your masterpiece. Choose a project that showcases all the skills you\'ve acquired. It should be complex and solve a real-world problem. Simultaneously, ramp up your interview preparation. Conduct mock interviews, solve company-specific problems, and refine your resume and portfolio.'
            }
        ],
        internshipGuidance: {
            whenToStart: 'Start looking for internships seriously from the summer after your second year. The most critical internship is typically the one in the summer before your final year, as it often leads to a full-time offer (PPO).',
            typesOfRoles: [
                { name: 'Software Development Engineer (SDE) Intern', description: 'The most common role. Involves writing, testing, and deploying code for a specific product or service.' },
                { name: 'Data Science / ML Intern', description: 'Involves data analysis, building predictive models, and working with large datasets.' },
                { name: 'Cybersecurity Intern', description: 'Focuses on security analysis, penetration testing, and monitoring for threats.' },
                { name: 'Product Management (PM) Intern', description: 'A less technical role focusing on defining product features, understanding user needs, and working with engineering teams.' }
            ],
            howToApply: 'Leverage platforms like LinkedIn, university placement portals, and company career pages. Networking is key - reach out to alumni and employees at companies you admire. Build a strong resume with clear project impacts and a well-maintained GitHub profile.'
        },
        courses: [
            { platform: 'Udemy', title: 'The Web Developer Bootcamp by Colt Steele', description: 'A comprehensive full-stack course covering HTML, CSS, JS, Node.js, and more.', link: 'https://www.udemy.com/course/the-web-developer-bootcamp/' },
            { platform: 'Coursera', title: 'Machine Learning Specialization by Andrew Ng', description: 'The definitive introductory course on machine learning, taught by a Stanford professor.', link: 'https://www.coursera.org/specializations/machine-learning-introduction' },
            { platform: 'Coursera', title: 'Google Cybersecurity Certificate', description: 'Gain job-ready skills in cybersecurity, learning about security frameworks and tools.', link: 'https://www.coursera.org/professional-certificates/google-cybersecurity' },
            { platform: 'NeetCode', title: 'NeetCode 150', description: 'A curated list of 150 LeetCode problems that cover all the essential patterns for technical interviews.', link: 'https://neetcode.io/' }
        ]
    },
    {
        slug: 'mechanical-engineering',
        name: 'Mechanical Engineering',
        description: 'Mechanical engineering is a broad discipline that applies principles of physics and materials science for the design, analysis, manufacturing, and maintenance of mechanical systems.',
        roadmap: [
            {
                year: 'Year 1: Fundamentals',
                semesters: [
                    {
                        semester: 'Semester 1',
                        subjects: [
                            { name: 'Engineering Drawing (CAD)', keyConcepts: ['Orthographic Projections', 'Isometric Views', 'Sectional Views', 'Dimensioning'], notes: 'This is the language of engineers. Master 2D and 3D modeling in software like AutoCAD and SolidWorks.' },
                            { name: 'Statics & Dynamics', keyConcepts: ['Forces & Moments', 'Equilibrium', 'Trusses & Frames', 'Kinematics'], notes: 'Forms the absolute foundation of mechanical design. Practice free-body diagrams relentlessly.' },
                            { name: 'Workshop Technology', keyConcepts: ['Welding', 'Machining (Lathe, Milling)', 'Fitting', 'Foundry'], notes: 'Provides essential hands-on experience and an appreciation for how things are actually made.' }
                        ]
                    },
                    {
                        semester: 'Semester 2',
                        subjects: [
                            { name: 'Thermodynamics I', keyConcepts: ['Laws of Thermodynamics', 'Energy & Enthalpy', 'Pure Substances', 'Gas Power Cycles'], notes: 'Fundamental to power generation and thermal systems. Understand the concepts deeply, not just the formulas.' },
                            { name: 'Materials Science', keyConcepts: ['Crystal Structures', 'Phase Diagrams', 'Mechanical Properties', 'Heat Treatment'], notes: 'Learn why materials behave the way they do. This knowledge is crucial for selecting the right material for any application.' },
                        ]
                    }
                ],
                skillGuidance: 'Get proficient in at least one major CAD software (SolidWorks, CATIA, or Inventor). Develop hands-on skills by joining a workshop or working on personal mechanical projects. Understanding the manufacturing process is a huge advantage.'
            },
            {
                year: 'Year 2: Core Mechanics',
                semesters: [
                     {
                        semester: 'Semester 3',
                        subjects: [
                            { name: 'Strength of Materials', keyConcepts: ['Stress & Strain', 'Torsion', 'Bending Moments & Shear Force', 'Deflection of Beams'], notes: 'Crucial for any design role. Practice drawing Shear Force and Bending Moment Diagrams until they are second nature.' },
                            { name: 'Fluid Mechanics', keyConcepts: ['Bernoulli\'s Principle', 'Navier-Stokes Equations', 'Boundary Layer', 'Flow through Pipes'], notes: 'Essential for aerodynamics, hydraulics, and thermal systems. It can be conceptually challenging, so focus on the fundamentals.' },
                            { name: 'Manufacturing Processes', keyConcepts: ['Casting', 'Forming', 'Joining', 'Advanced Machining'], notes: 'Builds on workshop technology, covering industrial-scale manufacturing techniques.' }
                        ]
                    },
                    {
                        semester: 'Semester 4',
                        subjects: [
                            { name: 'Theory of Machines', keyConcepts: ['Kinematic Pairs', 'Velocity & Acceleration Analysis', 'Gears & Gear Trains', 'Vibrations'], notes: 'This subject deals with the motion of machine parts. It is highly analytical and forms the basis for machine design.' },
                            { name: 'Thermodynamics II', keyConcepts: ['Vapor Power Cycles (Rankine)', 'Refrigeration Cycles', 'Gas Mixtures', 'Psychrometry'], notes: 'Applies fundamental thermodynamics to real-world power plants and HVAC systems.' },
                        ]
                    }
                ],
                skillGuidance: 'This is the year to apply your knowledge. Join collegiate clubs like SAE BAJA, Formula Student, or a robotics team. This is the best way to gain practical design, manufacturing, and teamwork experience. Start learning simulation software like ANSYS for Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD).',
                electivesGuidance: {
                    title: 'Choosing Your Minor Subject',
                    description: 'A minor can help you specialize in high-growth areas of mechanical engineering.',
                    options: [
                        { name: 'Robotics & Automation', reason: 'Excellent choice for careers in modern manufacturing, automation, and mechatronics. Combines mechanics with electronics and programming.' },
                        { name: 'Computer Science', reason: 'Highly valuable for learning programming (Python/C++) for control systems, simulations (MATLAB), and data analysis of mechanical systems.' },
                        { name: 'Renewable Energy', reason: 'A future-proof field focusing on the design and analysis of wind, solar, and other sustainable energy technologies.' }
                    ]
                }
            },
            {
                year: 'Year 3: System Design',
                semesters: [
                    {
                        semester: 'Semester 5',
                        subjects: [
                            { name: 'Machine Design', keyConcepts: ['Design against Static & Fatigue Loading', 'Design of Shafts, Keys, Couplings', 'Bearings', 'Gears'], notes: 'The capstone of mechanics. You will apply principles from Statics, Dynamics, and Strength of Materials to design real machine components.'},
                            { name: 'Heat and Mass Transfer', keyConcepts: ['Conduction', 'Convection', 'Radiation', 'Heat Exchangers'], notes: 'A critical subject for designing any thermal system, from computer chips to power plants.'},
                            { name: 'Control Systems', keyConcepts: ['Laplace Transforms', 'Transfer Functions', 'Stability Analysis (Bode Plots, Root Locus)'], notes: 'Learn how to model and control dynamic systems. This is a math-heavy subject with wide applications in robotics and automation.'}
                        ]
                    },
                    {
                        semester: 'Semester 6',
                        subjects: [
                            { name: 'Finite Element Analysis (FEA)', keyConcepts: ['Discretization', 'Shape Functions', 'Stiffness Matrix', 'Meshing'], notes: 'Learn the theory behind powerful simulation software like ANSYS or Abaqus. Focus on understanding the assumptions and limitations.'},
                            { name: 'Mechatronics', keyConcepts: ['Sensors & Actuators', 'Microcontrollers', 'PLC Programming', 'System Integration'], notes: 'Integrates mechanical engineering with electronics and software. Very hands-on and project-oriented.'}
                        ]
                    }
                ],
                skillGuidance: 'Deepen your expertise in simulation (ANSYS/Abaqus). Contribute significantly to your collegiate club project. Work on a personal design project from concept to prototype. Start looking into industry certifications like Certified SOLIDWORKS Associate (CSWA).',
                electivesGuidance: {
                    title: 'Choosing DLOC & Honours Subjects',
                    description: 'These electives allow you to gain expert-level knowledge in a specialized domain.',
                    dlocOptions: [
                        { name: 'Computational Fluid Dynamics (CFD)', reason: 'A high-demand skill for aerospace, automotive, and energy sectors. Focuses on simulating fluid flow.' },
                        { name: 'Automobile Engineering', reason: 'A comprehensive study of vehicle design, including engine, chassis, and transmission systems.' },
                        { name: 'Advanced Manufacturing', reason: 'Explores modern manufacturing techniques like 3D printing (Additive Manufacturing), CNC machining, and factory automation.' }
                    ],
                    honoursOptions: [
                        { name: 'Advanced Robotics', reason: 'For those passionate about automation. Covers robot kinematics, dynamics, and control in depth.' },
                        { name: 'Fracture Mechanics & Fatigue Design', reason: 'A highly specialized field for designing critical components in aerospace and high-stress environments.' },
                        { name: 'Advanced Thermal Engineering', reason: 'Focuses on the design of complex thermal systems like power plants, jet engines, and advanced cooling solutions.' }
                    ]
                }
            },
            {
                year: 'Year 4: Specialization & Application',
                skillGuidance: 'Your Major Design Project is your chance to shine. Choose a project that aligns with your career goals. Network with industry professionals and seek mentorship. Prepare for core company interviews by revising all fundamental concepts from previous years.'
            }
        ],
        internshipGuidance: {
            whenToStart: 'Actively seek internships from the summer after your second year. The third-year summer internship is crucial for securing a job in a core company.',
            typesOfRoles: [
                { name: 'Design Engineer Intern', description: 'Work with CAD and FEA software to design and analyze mechanical components and assemblies.' },
                { name: 'Manufacturing/Production Intern', description: 'Work on the shop floor to improve manufacturing processes, manage production lines, and ensure quality control.' },
                { name: 'Thermal Engineer Intern', description: 'Analyze and design systems involving heat transfer and fluid dynamics, such as HVAC or cooling systems.' },
                { name: 'R&D Intern', description: 'Work in a research and development setting on new product development and testing.' }
            ],
            howToApply: 'A strong portfolio of projects (especially from collegiate clubs) is more valuable than grades. Tailor your resume to highlight practical skills and software proficiency. Use LinkedIn to connect with engineers from target companies.'
        },
        courses: [
            { platform: 'Coursera', title: 'Autodesk CAD/CAM for Manufacturing', description: 'Master CAD (Computer-Aided Design) and CAM for manufacturing with industry-standard software.', link: 'https://www.coursera.org/specializations/autodesk-cad-cam-manufacturing' },
            { platform: 'Udemy', title: 'MATLAB and Simulink for Engineers', description: 'Learn the essentials of MATLAB and Simulink for modeling, simulation, and analysis.', link: 'https://www.udemy.com/course/matlab-and-simulink-for-engineers/' },
            { platform: 'edX', title: 'Introduction to Robotics', description: 'Explore the fundamental concepts of robotics, from kinematics to robot programming.', link: 'https://www.edx.org/learn/robotics/the-university-of-pennsylvania-robotics' }
        ]
    },
    {
        slug: 'electrical-engineering',
        name: 'Electrical Engineering',
        description: 'Electrical engineering focuses on the study and application of electricity, electronics, and electromagnetism. It covers everything from microchips to large-scale power grids.',
        roadmap: [
             {
                year: 'Year 1: Basic Circuits',
                semesters: [
                    {
                        semester: 'Semester 1',
                        subjects: [
                            { name: 'Circuit Theory I', keyConcepts: ['Ohm\'s Law', 'Kirchhoff\'s Laws (KCL, KVL)', 'Nodal & Mesh Analysis', 'Thevenin & Norton Theorems'], notes: 'This is the absolute foundation. Master KCL/KVL and circuit simplification theorems. Practice is the only way.' },
                            { name: 'Programming Fundamentals', keyConcepts: ['Variables', 'Loops', 'Functions', 'Arrays'], notes: 'Usually taught in C/C++. This is essential for future work in microcontrollers and embedded systems.' },
                            { name: 'Calculus II', keyConcepts: ['Differential Equations', 'Laplace Transforms', 'Fourier Series'], notes: 'The mathematical language of electrical engineering. Laplace and Fourier are used extensively in circuit and signal analysis.' }
                        ]
                    },
                    {
                        semester: 'Semester 2',
                        subjects: [
                            { name: 'Digital Logic', keyConcepts: ['Logic Gates', 'Boolean Algebra', 'Flip-flops', 'Counters & Registers'], notes: 'The basis of all digital electronics and computers. It\'s a bridge between the analog and digital worlds.' },
                            { name: 'Physics of Electromagnetism', keyConcepts: ['Coulomb\'s Law', 'Gauss\'s Law', 'Maxwell\'s Equations'], notes: 'Provides the deep physical understanding behind all electrical phenomena.' },
                        ]
                    }
                ],
                skillGuidance: 'Get your hands dirty early. Buy an Arduino or Raspberry Pi kit and start building simple projects. Learn how to use a multimeter and breadboard. Basic soldering is a very useful skill.'
            },
            {
                year: 'Year 2: Electronics & Systems',
                semesters: [
                     {
                        semester: 'Semester 3',
                        subjects: [
                            { name: 'Electronic Circuits', keyConcepts: ['Diodes', 'Transistors (BJT, MOSFET)', 'Amplifiers', 'Op-Amps'], notes: 'The core of modern electronics. Focus on understanding how transistors work as switches and amplifiers.' },
                            { name: 'Signals and Systems', keyConcepts: ['Convolution', 'Fourier Transform', 'Laplace Transform', 'Z-Transform'], notes: 'A very mathematical subject that teaches you how to analyze and process signals in time and frequency domains.' },
                            { name: 'Network Analysis', keyConcepts: ['AC Circuit Analysis', 'Resonance', 'Two-Port Networks', 'Filters'], notes: 'Extends basic circuit theory to alternating current (AC) circuits, which is how power is delivered.' }
                        ]
                    },
                    {
                        semester: 'Semester 4',
                        subjects: [
                            { name: 'Microprocessors & Microcontrollers', keyConcepts: ['Architecture (8085/8086)', 'Assembly Language', 'Interfacing (I/O, Memory)', 'Timers & Counters'], notes: 'Learn how to program hardware at a low level. This is the heart of embedded systems.' },
                            { name: 'Electrical Machines I', keyConcepts: ['Transformers', 'DC Machines (Motors & Generators)'], notes: 'Deals with large-scale electrical equipment. Understanding transformers is crucial for power systems.' },
                        ]
                    }
                ],
                skillGuidance: 'Move beyond kits to building your own circuits. Learn how to design Printed Circuit Boards (PCBs) using software like EAGLE or KiCad. Participate in robotics or electronics clubs. Learn simulation software like Multisim or LTspice.',
                electivesGuidance: {
                    title: 'Choosing Your Minor Subject',
                    description: 'A minor can provide a competitive edge by combining electrical knowledge with other domains.',
                    options: [
                        { name: 'Computer Science', reason: 'Essential for a career in Embedded Systems, IoT, or VLSI. Strong programming skills are a huge asset.' },
                        { name: 'Power Systems', reason: 'A good choice if you are interested in the generation, transmission, and distribution of electrical power, especially with the rise of renewable energy.' },
                        { name: 'Instrumentation & Control', reason: 'Focuses on sensors and control systems, leading to careers in industrial automation and process control.' }
                    ]
                }
            },
            {
                 year: 'Year 3: Advanced Topics',
                 skillGuidance: 'Specialize and build a portfolio. If you like VLSI, learn hardware description languages like Verilog or VHDL. If you like Power Electronics, build your own converter circuits. If embedded systems is your passion, work on a complex project using a powerful microcontroller like an STM32.',
                 electivesGuidance: {
                    title: 'Choosing DLOC & Honours Subjects',
                    description: 'These advanced courses define your specialization for your career.',
                    dlocOptions: [
                        { name: 'VLSI Design', reason: 'Focuses on designing integrated circuits (microchips). A challenging but highly rewarding field.' },
                        { name: 'Power Electronics', reason: 'Deals with the conversion and control of electric power. Crucial for electric vehicles, renewable energy, and power supplies.' },
                        { name: 'Digital Signal Processing (DSP)', reason: 'Learn advanced algorithms for processing real-world signals (audio, video). Key for telecommunications and multimedia.' }
                    ],
                    honoursOptions: [
                        { name: 'Advanced VLSI / SoC Design', reason: 'For those aiming for top-tier semiconductor companies. Covers the entire chip design flow.' },
                        { name: 'Smart Grids & Renewable Energy', reason: 'Focuses on modernizing the power grid with automation and integrating renewable sources like solar and wind.' },
                        { name: 'Embedded Systems & IoT', reason: 'Deep dive into designing smart, connected devices. A rapidly growing field with huge opportunities.' }
                    ]
                }
            },
            { year: 'Year 4: Specialization' }
        ],
        internshipGuidance: {
            whenToStart: 'Begin applying after your second year. The third-year internship is vital for getting into core electrical and electronics companies.',
            typesOfRoles: [
                { name: 'Embedded Systems Intern', description: 'Develop firmware for microcontrollers, design and test hardware for IoT devices and other electronic products.' },
                { name: 'VLSI Design/Verification Intern', description: 'Work with HDLs (Verilog/VHDL) to design or verify digital circuits. Highly sought after by semiconductor companies.' },
                { name: 'Power Systems Intern', description: 'Work with power utilities or renewable energy companies on grid analysis, protection systems, or substation design.' },
                { name: 'Electronics Hardware Intern', description: 'Design, build, and test analog and digital circuits for various applications.' }
            ],
            howToApply: 'A portfolio of personal projects is extremely important. Document your projects well with circuit diagrams, code (on GitHub), and videos. Networking at industry events and workshops can be very effective.'
        },
        courses: [
            { platform: 'Udemy', title: 'Arduino Step by Step: Getting Started', description: 'A hands-on guide to learning the Arduino platform for building interactive electronic projects.', link: 'https://www.udemy.com/course/arduino-sbs-getting-started/' },
            { platform: 'Coursera', title: 'Introduction to Power Electronics', description: 'Learn about the circuits that power everything from phones to electric vehicles.', link: 'https://www.coursera.org/learn/power-electronics' },
            { platform: 'Coursera', title: 'The Raspberry Pi Platform', description: 'Learn to use the Raspberry Pi to build media centers, home automation systems, and more.', link: 'https://www.coursera.org/learn/raspberry-pi-platform' }
        ]
    },
    {
        slug: 'civil-engineering',
        name: 'Civil Engineering',
        description: 'Civil engineering is a professional discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including public works like roads, bridges, and dams.',
        roadmap: [
            {
                year: 'Year 1: Foundations',
                semesters: [
                    {
                        semester: 'Semester 1',
                        subjects: [
                            { name: 'Engineering Mechanics (Statics)', keyConcepts: ['Forces', 'Equilibrium', 'Trusses', 'Centroid & Moment of Inertia'], notes: 'The absolute foundation for structural engineering. Master the concept of equilibrium and free-body diagrams.'},
                            { name: 'Surveying', keyConcepts: ['Chain Surveying', 'Compass Surveying', 'Leveling', 'Theodolite'], notes: 'The art of measuring the earth. This is a very practical, field-work oriented subject.'},
                            { name: 'Building Materials', keyConcepts: ['Cement', 'Aggregates', 'Bricks', 'Steel', 'Concrete'], notes: 'Understand the properties of the materials you will be working with for your entire career.'}
                        ]
                    },
                    {
                        semester: 'Semester 2',
                        subjects: [
                            { name: 'Fluid Mechanics', keyConcepts: ['Hydrostatics', 'Fluid Dynamics', 'Flow through Pipes', 'Open Channel Flow'], notes: 'Crucial for water resources, irrigation, and environmental engineering.'},
                            { name: 'Engineering Geology', keyConcepts: ['Minerals & Rocks', 'Structural Geology (Folds, Faults)', 'Earthquakes', 'Groundwater'], notes: 'Understand the ground you will be building on. Essential for foundation design.'}
                        ]
                    }
                ],
                skillGuidance: 'Master AutoCAD for 2D drafting. It is the most fundamental software skill in civil engineering. Whenever possible, visit construction sites to see how theoretical concepts are applied in the real world.'
            },
            {
                year: 'Year 2: Structural & Geotechnical',
                semesters: [
                     {
                        semester: 'Semester 3',
                        subjects: [
                            { name: 'Structural Analysis', keyConcepts: ['Shear Force & Bending Moment Diagrams', 'Deflection of Beams', 'Indeterminate Structures', 'Influence Line Diagrams'], notes: 'This is where you learn to analyze how structures like beams and frames respond to loads. Very important for interviews.'},
                            { name: 'Soil Mechanics', keyConcepts: ['Three-Phase System', 'Permeability', 'Compaction', 'Shear Strength of Soil'], notes: 'The "Strength of Materials" for soil. This is the foundation of all geotechnical engineering.'},
                            { name: 'Transportation Engineering', keyConcepts: ['Highway Geometric Design', 'Traffic Engineering', 'Pavement Design'], notes: 'Focuses on the design and operation of roads and highways.'}
                        ]
                    },
                    {
                        semester: 'Semester 4',
                        subjects: [
                            { name: 'Concrete Technology', keyConcepts: ['Properties of Fresh & Hardened Concrete', 'Concrete Mix Design', 'Special Concretes'], notes: 'A deep dive into the most widely used construction material in the world.'},
                            { name: 'Hydrology', keyConcepts: ['Precipitation', 'Infiltration', 'Runoff', 'Hydrographs'], notes: 'The science of water. Essential for designing dams, bridges, and drainage systems.'}
                        ]
                    }
                ],
                skillGuidance: 'Start learning structural analysis and design software like STAAD.Pro or ETABS. Also, get familiar with AutoCAD Civil 3D for infrastructure design. A site internship during the summer break is highly recommended.',
                electivesGuidance: {
                    title: 'Choosing Your Minor Subject',
                    description: 'A minor can help you specialize and stand out in the job market.',
                    options: [
                        { name: 'Construction Management', reason: 'A perfect choice if you are interested in the management and business side of construction projects. Involves planning, scheduling, and costing.'},
                        { name: 'Environmental Engineering', reason: 'A growing field focusing on water supply, waste treatment, and pollution control, which are integral parts of modern infrastructure projects.'},
                        { name: 'Geotechnical Engineering', reason: 'If you find soil and foundations interesting, this specialization offers great opportunities in designing foundations for high-rises, bridges, and dams.'}
                    ]
                }
            },
            {
                year: 'Year 3: Design Principles',
                skillGuidance: 'Gain proficiency in at least one structural design software (STAAD.Pro, ETABS). Learn project management software like Microsoft Project or Primavera. Work on mini-projects that involve complete design and estimation of a small structure.'
            },
            { year: 'Year 4: Management & Application' }
        ],
        internshipGuidance: {
            whenToStart: 'Start with a site-based internship after your second year to understand practical construction. Aim for a design office or project management internship after your third year.',
            typesOfRoles: [
                { name: 'Site Engineer Intern', description: 'Work on a construction site, overseeing execution, quality control, and daily progress.'},
                { name: 'Structural Design Intern', description: 'Work in a consulting firm using software like STAAD.Pro or ETABS to analyze and design structures.'},
                { name: 'Project Management Intern', description: 'Work with planning and scheduling teams, using tools like Primavera to manage project timelines and resources.'},
                { name: 'Quantity Surveying Intern', description: 'Focus on estimating quantities of materials and preparing project budgets and bills.'}
            ],
            howToApply: 'Practical experience is key. Highlight any site visits or internships on your resume. Networking with alumni working in major construction and consulting firms is very effective. Prepare for interviews by being thorough with your structural analysis and design concepts.'
        },
        courses: [
            { platform: 'Coursera', title: 'Construction Management Specialization', description: 'Learn the fundamentals of the construction industry, from project initiation to closeout.', link: 'https://www.coursera.org/specializations/construction-management' },
            { platform: 'Udemy', title: 'AutoCAD Civil 3D for Beginners', description: 'Master the industry-standard software for civil engineering design and documentation.', link: 'https://www.udemy.com/course/autocad-civil-3d-for-beginners-c3d/' },
            { platform: 'Udemy', title: 'Fundamentals of Structural Analysis', description: 'A practical course covering the analysis of beams, trusses, and frames.', link: 'https://www.udemy.com/course/structural-analysis-made-easy/' }
        ]
    },
    {
        slug: 'biotechnology',
        name: 'Biotechnology',
        description: 'Biotechnology is an interdisciplinary field that combines biology and technology to develop products and processes that improve our lives, with applications in medicine, agriculture, and the environment.',
        roadmap: [
            {
                year: 'Year 1: Core Sciences',
                skillGuidance: 'Develop strong fundamentals in biology and chemistry. Begin learning a programming language, preferably Python, as it is heavily used in bioinformatics. Get comfortable with scientific literature by reading research papers.'
            },
            {
                year: 'Year 2: Biological Foundations',
                skillGuidance: 'Seek opportunities to work in a wet lab. This hands-on experience is invaluable. Learn R for biostatistics and data visualization. Start using bioinformatics databases like NCBI and PDB.',
                electivesGuidance: {
                    title: 'Choosing Your Minor Subject',
                    description: 'A minor can significantly enhance your biotech profile by adding computational or chemical depth.',
                    options: [
                        { name: 'Computer Science', reason: 'Essential for a career in Bioinformatics, Computational Biology, or drug discovery. You will learn programming, data structures, and algorithms to analyze biological data.' },
                        { name: 'Chemistry', reason: 'A great choice if you are interested in pharmaceuticals, biochemistry, or material science. It provides a deeper understanding of molecular interactions.' },
                        { name: 'Food Technology', reason: 'A specialized field focusing on the application of biotechnology to improve food production, preservation, and safety.' }
                    ]
                }
            },
            {
                year: 'Year 3: Engineering Applications',
                skillGuidance: 'Focus on a specialization. If you are into bioinformatics, work on projects analyzing genomic or proteomic data. If you prefer bioprocess engineering, learn about bioreactor design and simulation. Secure an industrial or research internship.',
                 electivesGuidance: {
                    title: 'Choosing DLOC & Honours Subjects',
                    description: 'These courses pave the way for postgraduate studies and specialized careers.',
                    dlocOptions: [
                        { name: 'Genetic Engineering', reason: 'Focuses on techniques like CRISPR-Cas9 to manipulate genetic material. Core to modern drug development and agricultural biotech.' },
                        { name: 'Immunology & Immunotechnology', reason: 'Crucial for developing vaccines, diagnostics, and therapies for infectious and autoimmune diseases.' },
                        { name: 'Bioinformatics', reason: 'Applies computational tools to manage and analyze vast sets of biological data. A high-growth area.' }
                    ],
                    honoursOptions: [
                        { name: 'Pharmaceutical Biotechnology', reason: 'For careers in the pharma industry. Covers drug discovery, development, and manufacturing of biopharmaceuticals.' },
                        { name: 'Tissue Engineering & Regenerative Medicine', reason: 'A cutting-edge field focused on creating artificial organs and regenerating damaged tissues.' },
                        { name: 'Environmental Biotechnology', reason: 'Uses biological systems for environmental protection, such as bioremediation and waste treatment.' }
                    ]
                }
            },
            { year: 'Year 4: Advanced Specialization' }
        ],
        internshipGuidance: {
            whenToStart: 'Start looking for lab-based research internships after your second year. A more focused industrial internship after the third year is critical for job prospects.',
            typesOfRoles: [
                { name: 'R&D Intern (Wet Lab)', description: 'Work in a laboratory setting, performing experiments, culturing cells, and using techniques like PCR and electrophoresis.' },
                { name: 'Bioinformatics Intern (Dry Lab)', description: 'Use computational tools and programming to analyze biological data, run simulations, and develop analysis pipelines.' },
                { name: 'Bioprocess Engineering Intern', description: 'Work in a manufacturing facility with bioreactors and fermentation processes, focusing on process optimization and scale-up.' },
                { name: 'Quality Control/Assurance Intern', description: 'Work in a pharmaceutical or biotech company to ensure products meet quality and safety standards.' }
            ],
            howToApply: 'Contact professors at universities for research internships. For industrial roles, target pharmaceutical and biotech companies. A strong understanding of lab techniques and computational tools is essential. Your resume should highlight specific skills and projects.'
        },
        courses: [
            { platform: 'Coursera', title: 'Bioinformatics Specialization', description: 'Learn how to analyze biological data using computational tools and algorithms.', link: 'https://www.coursera.org/specializations/bioinformatics' },
            { platform: 'edX', title: 'The Science and Business of Biotechnology', description: 'Explore the process of bringing a biotech drug from lab to market.', link: 'https://www.edx.org/learn/biotechnology/cornell-university-the-science-and-business-of-biotechnology' },
            { platform: 'Coursera', title: 'Python for Genomic Data Science', description: 'Apply Python programming to solve problems in the rapidly growing field of genomics.', link: 'https://www.coursera.org/learn/python-genomics' }
        ]
    },
    {
        slug: 'chemical-engineering',
        name: 'Chemical Engineering',
        description: 'Chemical engineering involves the application of chemistry, physics, and math to design, develop, and operate large-scale chemical manufacturing processes.',
        roadmap: [
            {
                year: 'Year 1: Core Principles',
                skillGuidance: 'Master the fundamentals of material and energy balances. This is the bedrock of chemical engineering. Get proficient with Excel for solving complex balance problems and data analysis.'
            },
            {
                year: 'Year 2: Transport Phenomena',
                skillGuidance: 'This is a conceptually difficult year. Focus on understanding the parallels between fluid flow, heat transfer, and mass transfer. Start learning a process simulation software like Aspen HYSYS or DWSIM (open-source).',
                electivesGuidance: {
                    title: 'Choosing Your Minor Subject',
                    description: 'A minor can steer your chemical engineering degree towards high-growth industries.',
                    options: [
                        { name: 'Environmental Engineering', reason: 'A natural fit, focusing on pollution control, waste treatment, and sustainable process design, which are major concerns in the chemical industry.' },
                        { name: 'Materials Science', reason: 'Excellent for careers in polymer engineering, semiconductors, or specialty chemicals. You will learn about material properties at a molecular level.' },
                        { name: 'Petroleum Engineering', reason: 'A highly specialized and lucrative field focusing on the upstream (exploration and extraction) and downstream (refining) sectors of the oil and gas industry.' }
                    ]
                }
            },
            {
                year: 'Year 3: Reaction & Process Design',
                skillGuidance: 'Become proficient in a process simulator. Work on projects where you design a complete process flowsheet for a chemical product. Learn how to read and create Piping and Instrumentation Diagrams (P&IDs).',
                electivesGuidance: {
                    title: 'Choosing DLOC & Honours Subjects',
                    description: 'These subjects allow for deep specialization in core chemical engineering domains.',
                    dlocOptions: [
                        { name: 'Process Modeling & Simulation', reason: 'A high-demand computational skill. You will learn to build mathematical models of chemical processes for optimization and control.' },
                        { name: 'Polymer Engineering', reason: 'Focuses on the production and processing of plastics and polymers, a massive industry.' },
                        { name: 'Advanced Transport Phenomena', reason: 'A theoretical course for those interested in R&D or postgraduate studies, providing a deep dive into the underlying physics.' }
                    ],
                    honoursOptions: [
                        { name: 'Advanced Process Control', reason: 'Goes beyond basic control to cover modern control strategies used in large chemical plants to optimize efficiency and safety.' },
                        { name: 'Catalysis & Reaction Engineering', reason: 'For those interested in R&D. Focuses on designing better catalysts and reactors to improve chemical reactions.' },
                        { name: 'Energy Engineering', reason: 'Focuses on both conventional and renewable energy systems from a chemical process perspective.' }
                    ]
                }
            },
            { year: 'Year 4: Plant Design & Specialization' }
        ],
        internshipGuidance: {
            whenToStart: 'Aim for an internship in a manufacturing plant after your third year. This experience is highly valued by core companies.',
            typesOfRoles: [
                { name: 'Process Engineer Intern', description: 'The most common role. Work on process monitoring, optimization, troubleshooting, and simulation in a chemical plant.' },
                { name: 'R&D Intern', description: 'Work in a lab to develop new products or improve existing processes. Involves experimentation and data analysis.' },
                { name: 'Safety Engineer Intern', description: 'Focus on process safety management (PSM), conducting safety audits like HAZOP, and ensuring plant safety.' },
                { name: 'Design Engineer Intern', description: 'Work in an engineering consultancy on equipment design, process flowsheeting, and plant layout.' }
            ],
            howToApply: 'Highlight your proficiency in process simulation software (Aspen, HYSYS) on your resume. Emphasize your understanding of core concepts like transport phenomena and reaction engineering. Target companies in sectors like Oil & Gas, FMCG, Specialty Chemicals, and Pharmaceuticals.'
        },
        courses: [
            { platform: 'Udemy', title: 'Chemical Engineering: Process Simulation with Aspen Plus', description: 'Learn the industry-standard software for designing and optimizing chemical processes.', link: 'https://www.udemy.com/course/aspen-plus-process-simulation-for-chemical-engineers/' },
            { platform: 'Coursera', title: 'Material Science: 10 Things Every Engineer Should Know', description: 'A foundational course on the properties and applications of different materials.', link: 'https://www.coursera.org/learn/materials-science' },
            { platform: 'edX', title: 'Sustainable Energy', description: 'Explore the future of energy systems, from renewables to energy storage, from an engineering perspective.', link: 'https://www.edx.org/learn/sustainable-energy/the-university-of-queensland-sustainable-energy' }
        ]
    }
];