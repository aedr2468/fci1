/**
 * Course data for all 6 subjects
 * Each course includes: lectures, exam date/time, difficulty, study hours needed,
 * resources (Drive links), and video references
 */

const COURSES = [
  {
    id: "networks",
    name: "Business Process Management",
    shortName: "BPM",
    icon: "⚙️",
    color: "var(--accent-red)",
    colorRgb: "239, 68, 68",
    difficulty: "hard",
    hoursNeeded: 20,
    examDate: "2026-05-31T09:00:00",
    examDuration: "9:00 AM - 11:00 AM",
    totalLectures: 9,
    videoRef:
      "https://www.youtube.com/watch?v=vpAxkG_W1_w&list=PL9iw99lS3Prj5VoC4Bwhmj9Wawd2r-Vtt",
    driveMain:
      "https://drive.google.com/drive/folders/1suocG4FoMkZuSaWo8cFCJGRR8NZNSB2l",
    lectures: [
      { id: "bpm-1", title: "Introduction to Business Process Management (BPM)", subtitle: "Topic 1" },
      { id: "bpm-2", title: "Process Identification", subtitle: "Topic 2" },
      { id: "bpm-3", title: "Business Process Modeling (BPMN)", subtitle: "Topic 3" },
      { id: "bpm-4", title: "Process Simulation", subtitle: "Topic 4" },
      { id: "bpm-5", title: "Petri Nets and Workflow Nets", subtitle: "Topic 5" },
      { id: "bpm-6", title: "Soundness Checking & Consistency Checking", subtitle: "Topic 6" },
      { id: "bpm-7", title: "Business Process Execution Language (BPEL)", subtitle: "Topic 7" },
      { id: "bpm-8", title: "Mapping BPMN to BPEL & Transformation to Petri Nets", subtitle: "Topic 8" },
      { id: "bpm-9", title: "Key Performance Indicators (KPIs)", subtitle: "Topic 9" },
    ],
    resources: [
      {
        label: "Lectures Folder",
        link: "https://drive.google.com/drive/folders/1z9FanMXfp6sdJbEh2Uk9w98hZP1WjX-5",
      },
      {
        label: "Midterms",
        link: "https://drive.google.com/drive/folders/1gGyoKmBx70ExPtJTy2PEnXAitq5QMSCu",
      },
      {
        label: "Finals",
        link: "https://drive.google.com/drive/folders/19rkgD_zKYpi1pZgqY0w7tzgOTJseKyjM",
      },
      {
        label: "Exercises",
        link: "https://drive.google.com/drive/folders/1749GI1TN3iIZFEm-stW__WSuoCTvR1r9",
      },
      {
        label: "Textbooks",
        link: "https://drive.google.com/drive/folders/1F-6aX7F_5CTBcJDpIDCyYwiGQlPl-fgB",
      },
      {
        label: "Labs",
        link: "https://drive.google.com/drive/folders/16sJbSBgHKI4fZOKc-vvWaax-6Tw27RYr",
      },
      {
        label: "YouTube Playlist",
        link: "https://www.youtube.com/watch?v=vpAxkG_W1_w&list=PL9iw99lS3Prj5VoC4Bwhmj9Wawd2r-Vtt",
      },
    ],
    topics: [
      "BPM Introduction",
      "Process Identification",
      "BPMN",
      "Process Simulation",
      "Petri Nets",
      "Soundness Checking",
      "BPEL",
      "BPMN to BPEL",
      "KPIs",
    ],
  },
  {
    id: "cryptography",
    name: "Introduction to Data Science",
    shortName: "Data Science",
    icon: "🔬",
    color: "var(--accent-teal)",
    colorRgb: "20, 184, 166",
    difficulty: "hard",
    hoursNeeded: 25,
    examDate: "2026-06-04T12:00:00",
    examDuration: "12:00 PM - 2:00 PM",
    totalLectures: 12,
    videoRef: "https://www.youtube.com/playlist?list=PLACEHOLDER_DATA_SCIENCE",
    driveMain:
      "https://drive.google.com/drive/folders/1HTOpO1R7o9GIvEIYbAYdz_mip3werKWB",
    lectures: [
      { id: "cry-1", title: "Data Science Overview and Lifecycle", subtitle: "Ch.1" },
      { id: "cry-2", title: "Data Objects and Attribute Types", subtitle: "Ch.2" },
      { id: "cry-3", title: "Data Quality, Cleaning, and Preprocessing", subtitle: "Ch.3" },
      { id: "cry-4", title: "Exploratory Data Analysis (EDA)", subtitle: "Ch.4" },
      { id: "cry-5", title: "Basic Statistical Descriptions of Data", subtitle: "Ch.5" },
      { id: "cry-6", title: "Data Visualization Techniques", subtitle: "Ch.6" },
      { id: "cry-7", title: "Measuring Data Similarity and Dissimilarity", subtitle: "Ch.7" },
      { id: "cry-8", title: "Frequent Pattern Mining and Association Rules", subtitle: "Ch.8" },
      { id: "cry-9", title: "Classification (Decision Trees, KNN, and Evaluation Metrics)", subtitle: "Ch.9" },
      { id: "cry-10", title: "Cluster Analysis (K-means and Hierarchical Clustering)", subtitle: "Ch.10" },
      { id: "cry-11", title: "Regression Analysis (Simple Linear and Multivariate)", subtitle: "Ch.11" },
      { id: "cry-12", title: "Anomaly and Outlier Detection", subtitle: "Ch.12" },
    ],
    resources: [
      {
        label: "📺 Playlist",
        link: "https://www.youtube.com/playlist?list=PLACEHOLDER_DATA_SCIENCE",
      },
      {
        label: "Lectures Folder",
        link: "https://drive.google.com/drive/folders/194Ee1962vmXtgEbZsbOMkN9_--iCVAD_",
      },
      {
        label: "Midterms",
        link: "https://drive.google.com/drive/folders/1rfPKT3DaFXYQIfu8Bzj7prwY5NKRf7Ht",
      },
      {
        label: "Labs",
        link: "https://drive.google.com/drive/folders/1wCKk3JjeJuXCavgfZabi9sOhkDdRFV-2",
      },
      {
        label: "MCQ",
        link: "https://drive.google.com/drive/folders/12pdTrpBz4ktnBKuMd2VqnKfmH1djpG0m",
      },
      {
        label: "Exercises",
        link: "https://drive.google.com/drive/folders/1-KtmVMrR7v16XCPbyI5nghMgpei6zijT",
      },
    ],
    topics: [
      "Data Science Lifecycle",
      "Data Objects & Attributes",
      "Data Cleaning",
      "EDA",
      "Statistical Descriptions",
      "Visualization",
      "Similarity & Dissimilarity",
      "Pattern Mining",
      "Classification",
      "Clustering",
      "Regression",
      "Anomaly Detection",
    ],
  },
  {
    id: "datastructure",
    name: "Data Structures",
    shortName: "Data Struct.",
    icon: "📊",
    color: "var(--accent-amber)",
    colorRgb: "245, 158, 11",
    difficulty: "medium",
    hoursNeeded: 25,
    examDate: "2026-06-07T12:00:00",
    examDuration: "12:00 PM - 2:00 PM",
    totalLectures: 17,
    videoRef:
      "https://drive.google.com/drive/folders/1xQSlyf6nU67JivLgf5Ijoke2W5lgnnze",
    veryGoodVideo: "https://youtu.be/4xQG6NLa1vo?si=H1faN4_nzKPLT6Ur",
    driveMain:
      "https://drive.google.com/drive/folders/1993GMMB68dKUOS0L5b2PLL2YYHKfc8EB",
    lectures: [
      {
        id: "ds-1",
        title: "Introduction & Complexity Analysis",
        subtitle: "Lec 1",
        link: "https://drive.google.com/file/d/1kq-NiNUZeVCb9gKZECpelABLsubQqdB3/view?usp=drivesdk",
      },
      {
        id: "ds-2",
        title: "Arrays & Big-O Notation",
        subtitle: "Lec 2",
        link: "https://drive.google.com/file/d/1c8sv9XkqxQDtHUufsn2oWXBRnjnPcJ-K/view?usp=drivesdk",
      },
      {
        id: "ds-3",
        title: "Algorithm Analysis",
        subtitle: "Lec 3",
        link: "https://drive.google.com/file/d/1pynpV3fC007TZ-4uFizL49_R7V73WhVG/view?usp=drivesdk",
      },
      {
        id: "ds-4",
        title: "Quadratic Sorting",
        subtitle: "Lec 4",
        link: "https://drive.google.com/file/d/1TO7XjJuJI-ar3UrPbDITqXCz0rCTkGl3/view?usp=drivesdk",
      },
      {
        id: "ds-5",
        title: "Sorting (Bubble, Selection, Insertion)",
        subtitle: "Lec 5",
        link: "https://drive.google.com/file/d/1JvQ5JrzDO2Q6Jhk_zVrchdtus6cVAR8x/view?usp=drivesdk",
      },
      {
        id: "ds-6a",
        title: "Quadratic Algorithms",
        subtitle: "Lec 6A",
        link: "https://drive.google.com/file/d/1D8bDXXHy7T7fCJJ1uTETJJMlmL_F9hqK/view?usp=drivesdk",
      },
      {
        id: "ds-6b",
        title: "QuickSort",
        subtitle: "Lec 6B",
        link: "https://drive.google.com/file/d/1XfSxSFdQkgFCVGBvNkrb6lp7jQJpCPCu/view?usp=drivesdk",
      },
      {
        id: "ds-7",
        title: "Linked Lists",
        subtitle: "Lec 7",
        link: "https://drive.google.com/file/d/1YMFNlhuFwHTG-2V8h6BqyASQrUz90CAX/view?usp=drivesdk",
      },
      {
        id: "ds-8",
        title: "Doubly Linked Lists",
        subtitle: "Lec 8",
        link: "https://drive.google.com/file/d/10mqyLjIO3TvNQD9lVoxuKB-CNWylqBKP/view?usp=drivesdk",
      },
      {
        id: "ds-9",
        title: "Binary Search & Vectors",
        subtitle: "Lec 9",
        link: "https://drive.google.com/file/d/19a-ysFBUtX7koD9lKtoO8N5_fY1c6EA3/view?usp=drivesdk",
      },
      {
        id: "ds-10",
        title: "Stacks",
        subtitle: "Lec 10",
        link: "https://drive.google.com/file/d/1fXbueEDMhDbxNzBFXfbPLQp2-tlcMyDJ/view?usp=drivesdk",
      },
      {
        id: "ds-11",
        title: "Stacks & Queues",
        subtitle: "Lec 11",
        link: "https://drive.google.com/file/d/1nET5iHUcsELTJTx8k79r7eTM9a8PKEVN/view?usp=drivesdk",
      },
      {
        id: "ds-12",
        title: "Trees - I",
        subtitle: "Lec 12",
        link: "https://drive.google.com/file/d/1ccqMbi1nANqJZp-3xw9mNGpzR9hOeK4T/view?usp=drivesdk",
      },
      {
        id: "ds-13",
        title: "Trees 2",
        subtitle: "Lec 13",
        link: "https://drive.google.com/file/d/1exA8nmFgxyG9pU0AA9CEHZhimXtdQm-U/view?usp=drivesdk",
      },
      {
        id: "ds-14",
        title: "Trees 3",
        subtitle: "Lec 14",
        link: "https://drive.google.com/file/d/1ims99m1EHNGRqtcfP4uMITjWxuEWBs9_/view?usp=drivesdk",
      },
      {
        id: "ds-15",
        title: "Hashing",
        subtitle: "Lec 15",
        link: "https://drive.google.com/file/d/18ACMi8nvtm0jAQBTRUpycJ7uv-No8wlA/view?usp=drivesdk",
      },
      {
        id: "ds-16",
        title: "Graphs",
        subtitle: "Lec 16",
        link: "https://drive.google.com/file/d/1dqaD2evNTODCfvQXeDaulg_6IcBGaODw/view?usp=drivesdk",
      },
      {
        id: "ds-17",
        title: "Graphs (BFS/DFS)",
        subtitle: "Lec 17",
        link: "https://drive.google.com/file/d/15K2XewkJtK1WKOjYuPs1g3iarEMcUJiO/view?usp=drivesdk",
      },
    ],
    resources: [
      {
        label: "Lectures Folder",
        link: "https://drive.google.com/drive/folders/1993GMMB68dKUOS0L5b2PLL2YYHKfc8EB",
      },
      {
        label: "Labs",
        link: "https://drive.google.com/drive/folders/19NZlW5KEzbFT1yaH1sEKAql1TXQzA12w",
      },
      {
        label: "Exercises",
        link: "https://drive.google.com/drive/folders/1LvTADDrazKsFpvGczCRrbnsnn4K1mvmI",
      },
      {
        label: "Quizzes",
        link: "https://drive.google.com/drive/folders/1NkPjmPV7Fb7aETQdQoJqLcJtUru9Arbh",
      },
      {
        label: "Midterms",
        link: "https://drive.google.com/drive/folders/11FVMvBzEudI8G9QiZj_KfaX-kdH5nIRy",
      },
      {
        label: "Finals",
        link: "https://drive.google.com/drive/folders/1JsZPqyqUT4RzckfgQd-VAtu6seTtOu03",
      },
      {
        label: "Assignments",
        link: "https://drive.google.com/drive/folders/1q3cWRJ8Rxq3kjblgev8OiAR1TEsVtGMy",
      },
      {
        label: "Textbook (PDF)",
        link: "https://drive.google.com/file/d/1APDWEGrb8rdijB5blgPGRX5EjjJz45a2/view?usp=drivesdk",
      },
    ],
    topics: [
      "Big-O",
      "Sorting",
      "Linked Lists",
      "Stacks",
      "Queues",
      "Trees",
      "BST",
      "Hashing",
      "Graphs",
      "BFS/DFS",
    ],
  },
  {
    id: "statistics",
    name: "Math Optimization",
    shortName: "Math Opt.",
    icon: "📐",
    color: "var(--accent-purple)",
    colorRgb: "139, 92, 246",
    difficulty: "medium",
    hoursNeeded: 20,
    examDate: "2026-06-13T12:00:00",
    examDuration: "12:00 PM - 2:00 PM",
    totalLectures: 8,
    videoRef: "https://www.youtube.com/playlist?list=PLACEHOLDER_MATH_OPT",
    driveMain:
      "https://drive.google.com/drive/folders/1p3RRbPduOtArMEvSN6swsAZD1kfCA5lm",
    lectures: [
      { id: "stat-theoretical", title: "Introduction to Operations Research", subtitle: "Topic 1", hours: 1.5 },
      { id: "stat-describe-data-numerically", title: "Linear Programming", subtitle: "Topic 2", hours: 1.5 },
      { id: "stat-grouped-data", title: "Graphical Solution", subtitle: "Topic 3", hours: 1.5 },
      { id: "stat-normal-distribution", title: "Simplex Method", subtitle: "Topic 4", hours: 2 },
      { id: "stat-sampling-distribution", title: "Computer Solution and Sensitivity Analysis", subtitle: "Topic 5", hours: 2 },
      { id: "stat-estimation-pt-1", title: "Simplex-Based Sensitivity Analysis and Duality", subtitle: "Topic 6", hours: 2 },
      { id: "stat-estimation-pt-2", title: "Integer Programming", subtitle: "Topic 7", hours: 2 },
      { id: "stat-hypothesis-testing", title: "Nonlinear Programming", subtitle: "Topic 8", hours: 2.5 },
    ],
    resources: [
      {
        label: "📺 Playlist",
        link: "https://www.youtube.com/playlist?list=PLACEHOLDER_MATH_OPT",
      },
      {
        label: "Lectures Folder",
        link: "https://drive.google.com/drive/folders/1O6DxFwjXv79jSC3i1flyM2y__PlHc9QM",
      },
      {
        label: "Midterms",
        link: "https://drive.google.com/drive/folders/1ZAnCMmPIEaGxdBbB7p7wnXjMgZqL1tlB",
      },
      {
        label: "Finals",
        link: "https://drive.google.com/drive/folders/1YQULN69VlLqkzQJUjSzYKOzbJg3iBibq",
      },
      {
        label: "Quizzes",
        link: "https://drive.google.com/drive/folders/1RbRQ5e7TiUYNU0l7kvY6os4SEeIeEXK9",
      },
      {
        label: "Sections",
        link: "https://drive.google.com/drive/folders/1QqU1Wx33P58mmHFLD16Rn5mQwTS5yqz4",
      },
      {
        label: "Textbook",
        link: "https://drive.google.com/drive/folders/1ZL-AEqx9E7gQLQe5iZlti-N4CoQwVZWL",
      },
    ],
    topics: [
      "Operations Research",
      "Linear Programming",
      "Graphical Solution",
      "Simplex Method",
      "Sensitivity Analysis",
      "Duality",
      "Integer Programming",
      "Nonlinear Programming",
    ],
  },
  {
    id: "database",
    name: "Database Systems",
    shortName: "Database",
    icon: "💾",
    color: "var(--accent-blue)",
    colorRgb: "59, 130, 246",
    difficulty: "easy",
    hoursNeeded: 20,
    examDate: "2026-05-23T12:00:00",
    examDuration: "12:00 PM - 2:00 PM",
    totalLectures: 11,
    videoRef:
      "https://www.youtube.com/watch?v=V7uLt0q6Gjo&list=PLBcOV2jq_2hLcMj22ISRsrgBNnaVxfi23",
    driveMain:
      "https://drive.google.com/drive/folders/1exdgSL9O6VWGKF7RPIhL-Ce3J_l_aTXQ",
    lectures: [
      {
        id: "db-1",
        title: "Introduction to Database Systems",
        subtitle: "Lec 1",
      },
      { id: "db-2", title: "Relational Model", subtitle: "Lec 2" },
      { id: "db-3", title: "SQL DDL & Constraints", subtitle: "Lec 3" },
      { id: "db-4", title: "DML & Basic Queries", subtitle: "Lec 4" },
      { id: "db-5", title: "Advanced Joins", subtitle: "Lec 5" },
      { id: "db-6", title: "Set Operators & Subqueries", subtitle: "Lec 6" },
      { id: "db-7", title: "Relational Algebra", subtitle: "Lec 7" },
      { id: "db-8", title: "ER Diagrams", subtitle: "Lec 8" },
      { id: "db-9", title: "ER to Relational Mapping", subtitle: "Lec 9" },
      { id: "db-10", title: "EERD", subtitle: "Lec 10" },
      { id: "db-11", title: "Normalization", subtitle: "Lec 11" },
    ],
    resources: [
      {
        label: "Main DB Folder",
        link: "https://drive.google.com/drive/folders/1exdgSL9O6VWGKF7RPIhL-Ce3J_l_aTXQ",
      },
      {
        label: "Past Midterms",
        link: "https://drive.google.com/drive/folders/1ICA1Ae36AOh-4V7qcIDohcexmfhRlQIp",
      },
      {
        label: "Labs",
        link: "https://drive.google.com/drive/folders/1lRmN6J_Jg44AziOsdrZlseYjVnSeNVj4",
      },
      {
        label: "Practical",
        link: "https://drive.google.com/drive/folders/1jyjFz3urtlIZhH21H-Mf9uCG22-xVYbZ",
      },
      {
        label: "Quizzes",
        link: "https://drive.google.com/drive/folders/1SoLOzwwy_c-Cc90ZEuwKncPh86i43OM0",
      },
    ],
    topics: [
      "SQL",
      "Normalization",
      "ER Diagrams",
      "Relational Algebra",
      "Joins",
      "DML/DDL",
    ],
  },
  {
    id: "marketing",
    name: "Marketing & Sales",
    shortName: "Marketing",
    icon: "📣",
    color: "var(--accent-green)",
    colorRgb: "16, 185, 129",
    difficulty: "easy",
    hoursNeeded: 15,
    examDate: "2026-05-25T12:00:00",
    examDuration: "12:00 PM - 2:00 PM",
    totalLectures: 5,
    videoRef: null,
    driveMain:
      "https://drive.google.com/drive/folders/1AlCUI9tAPHF_KgQ9uHcOzrM58qPdo6vT",
    lectures: [
      { id: "mkt-chapter-1", title: "Chapter 1", subtitle: "Chapter 1", hours: 1.5 },
      { id: "mkt-chapter-5", title: "Chapter 5", subtitle: "Chapter 5", hours: 1.5 },
      { id: "mkt-chapter-6", title: "Chapter 6", subtitle: "Chapter 6", hours: 1.5 },
      { id: "mkt-chapter-7", title: "Chapter 7", subtitle: "Chapter 7", hours: 1.5 },
      { id: "mkt-chapter-8", title: "Chapter 8", subtitle: "Chapter 8", hours: 1.5 },
    ],
    resources: [
      {
        label: "Main Marketing Folder",
        link: "https://drive.google.com/drive/folders/1AlCUI9tAPHF_KgQ9uHcOzrM58qPdo6vT",
      },
      {
        label: "MCQ Questions",
        link: "https://drive.google.com/drive/folders/1jmkgYbiPhTQr-UrkJYD1rTIuyA9MRQhc",
      },
      {
        label: "Marketing Summary (PDF)",
        link: "https://drive.google.com/file/d/1COHo0tBWtqzED5vR73iHBPWsEPbOHDJA/view?usp=drive_link",
      },
      {
        label: "Assignments/Exercises",
        link: "https://drive.google.com/drive/folders/1v6oqBoIOt-WHGJRRltYJWFwjuIUM08i9",
      },
    ],
    topics: [
      "Chapter 1",
      "Chapter 5",
      "Chapter 6",
      "Chapter 7",
      "Chapter 8",
    ],
  },
];

/**
 * Productive activity suggestions for completed lectures
 */
const SUGGESTED_ACTIVITIES = [
  {
    type: "exam",
    label: "Solve Previous Exams",
    icon: "📝",
    description: "Practice with past exam papers to test your knowledge",
  },
  {
    type: "revision",
    label: "Revision Session",
    icon: "🔄",
    description: "Go over the material again with spaced repetition",
  },
  {
    type: "practice",
    label: "Practice Sheets",
    icon: "✏️",
    description: "Work through additional problem sets",
  },
  {
    type: "video",
    label: "Supplementary Videos",
    icon: "🎬",
    description: "Watch additional explanations and examples",
  },
  {
    type: "quiz",
    label: "Take a Quiz",
    icon: "🧠",
    description: "Test your understanding with quiz questions",
  },
];

/**
 * Motivational messages based on progress
 */
const MOTIVATIONAL_MESSAGES = {
  0: [
    "Ready to begin! Let's make a plan and crush these exams! 🚀",
    "Your journey starts now. Every hour counts! 💪",
    "Let's turn preparation into success! 📚",
  ],
  10: [
    "Great start! Keep the momentum going! 🔥",
    "You're building good habits. Stay consistent! ⭐",
  ],
  25: [
    "Quarter done! You're on the right track! 🏃",
    "Nice progress! The hard work is paying off! 🌟",
  ],
  40: [
    "Almost halfway there! Keep pushing! 💯",
    "You're making excellent progress! Don't stop now! 🏆",
  ],
  50: [
    "Halfway! You're doing amazing! 🎯",
    "The midpoint — you've proven you can do this! 🌈",
  ],
  60: [
    "More than halfway! You're in the home stretch! 🏠",
    "Solid progress! Only a little more to go! 💪",
  ],
  75: [
    "Three quarters done! You're almost there! 🔥",
    "Keep going, you're close! 💪",
    "Final stretch — don't lose focus now! 🎪",
  ],
  90: [
    "Almost done! Just a little more! 🎉",
    "You're so close! Finish strong! 🏅",
    "The end is in sight — push through! ⚡",
  ],
  95: ["So close! You've got this! 🔥", "One final push and you're done! 💫"],
  100: [
    "Congratulations! You did it! 🎉🎉🎉",
    "All exams conquered! You're amazing! 🏆",
    "Proud of you! You nailed it! 🌟",
  ],
};

/**
 * Base template study plan — relative offsets from BASE_START_DATE
 * All dates are relative to BASE_START_DATE. When user changes start date,
 * the system shifts all items by (userStart - BASE_START_DATE) days.
 *
 * Structure:
 * - baseStartDate: "2026-05-16" (reference start)
 * - phases: each phase has its exam date + study items
 * - Each item: relativeDay (offset from baseStartDate), courseId, title, hours, type, phase
 *
 * Rules enforced:
 * - Maximum 2 subjects per day
 * - Last 3 days before exam: ONLY that subject
 * - Revision + previous exams before every exam
 * - Heavy subjects (BPM) start earlier
 * - Adaptive prioritization based on exam difficulty and proximity
 */
const BASE_START_DATE = "2026-05-16";

const CUSTOM_PHASES = [
    // =============================================
    // PHASE 1: Database + Marketing (Exam: May 23, May 25)
    // =============================================
    {
        label: "Database + Marketing Prep",
        phaseIndex: 1,
        examDate: "2026-05-23",
        phaseStartDate: "2026-05-16",
        studyItems: [
            // May 16
            { relativeDay: 0, courseId: "database", courseName: "Database", lectureTitle: "Core Concepts + Relational Model", lectureId: "db-core-concepts-relational-model", hours: 2, type: "learning" },
            { relativeDay: 0, courseId: "database", courseName: "Database", lectureTitle: "SQL Basics", lectureId: "db-sql-basics", hours: 1.5, type: "learning" },
            // May 17
            { relativeDay: 1, courseId: "database", courseName: "Database", lectureTitle: "ERD + Normalization", lectureId: "db-erd-normalization", hours: 2, type: "learning" },
            { relativeDay: 1, courseId: "marketing", courseName: "Marketing", lectureTitle: "Introduction + Concepts", lectureId: "mkt-intro-concepts", hours: 1.5, type: "learning" },
            // May 18
            { relativeDay: 2, courseId: "database", courseName: "Database", lectureTitle: "Transactions + Indexing", lectureId: "db-transactions-indexing", hours: 2, type: "learning" },
            { relativeDay: 2, courseId: "marketing", courseName: "Marketing", lectureTitle: "Chapters Review", lectureId: "mkt-chapters-review", hours: 1.5, type: "revision" },
            // May 19
            { relativeDay: 3, courseId: "database", courseName: "Database", lectureTitle: "Solve Sheets / Questions", lectureId: "db-solve-sheets", hours: 2, type: "practice" },
            { relativeDay: 3, courseId: "database", courseName: "Database", lectureTitle: "Weak Topics Review", lectureId: "db-weak-topics-review", hours: 2, type: "revision" },
            // May 20
            { relativeDay: 4, courseId: "database", courseName: "Database", lectureTitle: "Previous Exams", lectureId: "db-previous-exams", hours: 2.5, type: "practice" },
            { relativeDay: 4, courseId: "marketing", courseName: "Marketing", lectureTitle: "Important Summaries", lectureId: "mkt-important-summaries", hours: 1.5, type: "revision" },
            // May 21 — 2 days before DB exam, final DB focus
            { relativeDay: 5, courseId: "database", courseName: "Database", lectureTitle: "Full Revision", lectureId: "db-full-revision", hours: 2, type: "revision" },
            { relativeDay: 5, courseId: "database", courseName: "Database", lectureTitle: "Active Recall", lectureId: "db-active-recall", hours: 1.5, type: "recall" },
            { relativeDay: 5, courseId: "database", courseName: "Database", lectureTitle: "Previous Exams 2", lectureId: "db-prev-exams-2", hours: 2, type: "practice" },
            // May 22 — 1 day before DB exam, final DB focus
            { relativeDay: 6, courseId: "database", courseName: "Database", lectureTitle: "Mock Exam", lectureId: "db-mock-exam", hours: 2.5, type: "practice" },
            { relativeDay: 6, courseId: "database", courseName: "Database", lectureTitle: "Final Revision", lectureId: "db-final-revision", hours: 2, type: "revision" },
            { relativeDay: 6, courseId: "database", courseName: "Database", lectureTitle: "Memorization Cleanup", lectureId: "db-memorization-cleanup", hours: 1, type: "recall" },
            // May 23 — DB EXAM
            { relativeDay: 7, courseId: "database", courseName: "Database", lectureTitle: "EXAM: Database Systems", lectureId: "db-exam", hours: 2, type: "exam" },
            // May 23 post-exam
            { relativeDay: 7, courseId: "marketing", courseName: "Marketing", lectureTitle: "Light Marketing Review", lectureId: "mkt-light-review", hours: 1, type: "revision", isPostExam: true },
            // May 24 — 1 day before Marketing exam
            { relativeDay: 8, courseId: "marketing", courseName: "Marketing", lectureTitle: "Solve Questions", lectureId: "mkt-solve-questions", hours: 2.5, type: "practice" },
            { relativeDay: 8, courseId: "marketing", courseName: "Marketing", lectureTitle: "Final Revision", lectureId: "mkt-final-revision", hours: 2, type: "revision" },
            // May 25 — Marketing EXAM
            { relativeDay: 9, courseId: "marketing", courseName: "Marketing", lectureTitle: "EXAM: Marketing & Sales", lectureId: "mkt-exam", hours: 2, type: "exam" },
            // May 25 post-exam boost — get ahead on BPM (next up)
            { relativeDay: 9, courseId: "networks", courseName: "BPM", lectureTitle: "Post-Exam Boost: Intro to BPM & Process Identification", lectureId: "mkt-postexam-boost-bpm", hours: 2, type: "learning", isPostExam: true },
        ],
    },
    // =============================================
    // PHASE 2: Math Opt. + Data Science + BPM (Jun 1, Jun 3, Jun 4)
    // =============================================
    {
        label: "BPM + Data Science + Math Opt.",
        phaseIndex: 2,
        examDate: "2026-05-31",
        phaseStartDate: "2026-05-26",
        studyItems: [
            // May 26 — BPM + Data Science intro
            { relativeDay: 10, courseId: "networks", courseName: "BPM", lectureTitle: "Introduction to Business Process Management (BPM)", lectureId: "bpm-intro-bpm", hours: 2, type: "learning" },
            { relativeDay: 10, courseId: "cryptography", courseName: "Data Science", lectureTitle: "Data Science Overview and Lifecycle", lectureId: "ds-overview-lifecycle", hours: 2, type: "learning" },
            // May 27 — BPM + Data Science
            { relativeDay: 11, courseId: "networks", courseName: "BPM", lectureTitle: "Process Identification", lectureId: "bpm-process-identification", hours: 2, type: "learning" },
            { relativeDay: 11, courseId: "networks", courseName: "BPM", lectureTitle: "Business Process Modeling (BPMN)", lectureId: "bpm-bpmn", hours: 2, type: "learning" },
            { relativeDay: 11, courseId: "cryptography", courseName: "Data Science", lectureTitle: "Data Objects and Attribute Types", lectureId: "ds-objects-attributes", hours: 1.5, type: "learning" },
            // May 28 — BPM + Data Science
            { relativeDay: 12, courseId: "networks", courseName: "BPM", lectureTitle: "Process Simulation", lectureId: "bpm-process-simulation", hours: 2, type: "learning" },
            { relativeDay: 12, courseId: "networks", courseName: "BPM", lectureTitle: "Petri Nets and Workflow Nets", lectureId: "bpm-petri-nets", hours: 2, type: "learning" },
            { relativeDay: 12, courseId: "cryptography", courseName: "Data Science", lectureTitle: "Data Quality, Cleaning, and Preprocessing", lectureId: "ds-quality-cleaning", hours: 2, type: "learning" },
            // May 29 — BPM final topics + Data Science
            { relativeDay: 13, courseId: "networks", courseName: "BPM", lectureTitle: "Soundness Checking & Consistency Checking", lectureId: "bpm-soundness-consistency", hours: 2, type: "learning" },
            { relativeDay: 13, courseId: "networks", courseName: "BPM", lectureTitle: "Business Process Execution Language (BPEL)", lectureId: "bpm-bpel", hours: 2, type: "learning" },
            { relativeDay: 13, courseId: "cryptography", courseName: "Data Science", lectureTitle: "Exploratory Data Analysis (EDA)", lectureId: "ds-eda", hours: 2, type: "learning" },
            // May 30 — BPM revision + Data Science
            { relativeDay: 14, courseId: "networks", courseName: "BPM", lectureTitle: "Mapping BPMN to BPEL & Transformation to Petri Nets", lectureId: "bpm-bpmn-to-bpel", hours: 2, type: "learning" },
            { relativeDay: 14, courseId: "networks", courseName: "BPM", lectureTitle: "Key Performance Indicators (KPIs)", lectureId: "bpm-kpis", hours: 1.5, type: "learning" },
            { relativeDay: 14, courseId: "networks", courseName: "BPM", lectureTitle: "BPM Full Revision", lectureId: "bpm-full-revision", hours: 2, type: "revision" },
            { relativeDay: 14, courseId: "cryptography", courseName: "Data Science", lectureTitle: "Basic Statistical Descriptions of Data", lectureId: "ds-statistical-descriptions", hours: 1.5, type: "learning" },
            // May 31 — BPM EXAM day
            { relativeDay: 15, courseId: "networks", courseName: "BPM", lectureTitle: "BPM Active Recall & Mock Exam", lectureId: "bpm-active-recall", hours: 2, type: "practice" },
            { relativeDay: 15, courseId: "networks", courseName: "BPM", lectureTitle: "EXAM: Business Process Management", lectureId: "bpm-exam", hours: 2, type: "exam" },
            // May 31 post-exam boost — Data Science surge while brain is fresh
            { relativeDay: 15, courseId: "cryptography", courseName: "Data Science", lectureTitle: "Post-Exam Boost: Data Visualization Techniques", lectureId: "ds-visualization", hours: 2, type: "learning", isPostExam: true },
            { relativeDay: 15, courseId: "cryptography", courseName: "Data Science", lectureTitle: "Post-Exam Boost: Measuring Similarity & Dissimilarity", lectureId: "ds-similarity-postexam", hours: 1.5, type: "learning", isPostExam: true },
            // Jun 1 — Data Science + Math Opt. starts
            { relativeDay: 16, courseId: "cryptography", courseName: "Data Science", lectureTitle: "Measuring Data Similarity and Dissimilarity", lectureId: "ds-similarity-dissimilarity", hours: 2, type: "learning" },
            { relativeDay: 16, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Introduction to Operations Research", lectureId: "stat-intro-or", hours: 2, type: "learning" },
            // Jun 2 — Data Science + Math Opt.
            { relativeDay: 17, courseId: "cryptography", courseName: "Data Science", lectureTitle: "Frequent Pattern Mining and Association Rules", lectureId: "ds-pattern-mining", hours: 2, type: "learning" },
            { relativeDay: 17, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Linear Programming & Graphical Solution", lectureId: "stat-lp-graphical", hours: 2, type: "learning" },
            // Jun 3 — Data Science final push
            { relativeDay: 18, courseId: "cryptography", courseName: "Data Science", lectureTitle: "Classification (Decision Trees, KNN, and Evaluation Metrics)", lectureId: "ds-classification", hours: 2, type: "learning" },
            { relativeDay: 18, courseId: "cryptography", courseName: "Data Science", lectureTitle: "Cluster Analysis (K-means and Hierarchical Clustering)", lectureId: "ds-clustering", hours: 2, type: "learning" },
            { relativeDay: 18, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Simplex Method", lectureId: "stat-simplex", hours: 2, type: "learning" },
            // Jun 4 — Data Science EXAM day
            { relativeDay: 19, courseId: "cryptography", courseName: "Data Science", lectureTitle: "Regression Analysis & Anomaly Detection", lectureId: "ds-regression-anomaly", hours: 2, type: "revision" },
            { relativeDay: 19, courseId: "cryptography", courseName: "Data Science", lectureTitle: "Data Science Full Revision", lectureId: "ds-full-revision", hours: 1.5, type: "revision" },
            { relativeDay: 19, courseId: "cryptography", courseName: "Data Science", lectureTitle: "EXAM: Introduction to Data Science", lectureId: "ds-exam", hours: 2, type: "exam" },
            // Jun 4 post-exam boost — Math Opt. surge while momentum is high
            { relativeDay: 19, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Post-Exam Boost: Computer Solution & Sensitivity Analysis", lectureId: "stat-sensitivity", hours: 2, type: "learning", isPostExam: true },
            { relativeDay: 19, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Post-Exam Boost: Simplex-Based Sensitivity & Duality", lectureId: "stat-duality-postexam", hours: 1.5, type: "learning", isPostExam: true },
        ],
    },
    // =============================================
    // PHASE 3: Data Structures (Exam: June 7)
    // =============================================
    {
        label: "Data Structures Final",
        phaseIndex: 3,
        examDate: "2026-06-07",
        phaseStartDate: "2026-06-05",
        studyItems: [
            // Jun 5 — Data Structures ONLY (exam in 2 days, full focus)
            { relativeDay: 20, courseId: "datastructure", courseName: "Data Structures", lectureTitle: "Introduction & Complexity Analysis", lectureId: "ds-intro-complexity", hours: 2, type: "learning" },
            { relativeDay: 20, courseId: "datastructure", courseName: "Data Structures", lectureTitle: "Arrays, Big-O & Sorting Algorithms", lectureId: "ds-arrays-sorting", hours: 2, type: "learning" },
            { relativeDay: 20, courseId: "datastructure", courseName: "Data Structures", lectureTitle: "Linked Lists (Singly & Doubly)", lectureId: "ds-linked-lists", hours: 2, type: "learning" },
            { relativeDay: 20, courseId: "datastructure", courseName: "Data Structures", lectureTitle: "Stacks & Queues", lectureId: "ds-stacks-queues", hours: 2, type: "learning" },
            // Jun 6 — Data Structures ONLY (exam tomorrow, intense revision day)
            { relativeDay: 21, courseId: "datastructure", courseName: "Data Structures", lectureTitle: "Trees & Binary Search Trees", lectureId: "ds-trees-bst", hours: 2, type: "learning" },
            { relativeDay: 21, courseId: "datastructure", courseName: "Data Structures", lectureTitle: "Hashing", lectureId: "ds-hashing", hours: 1.5, type: "learning" },
            { relativeDay: 21, courseId: "datastructure", courseName: "Data Structures", lectureTitle: "Graphs & BFS/DFS", lectureId: "ds-graphs-bfs-dfs", hours: 2, type: "learning" },
            { relativeDay: 21, courseId: "datastructure", courseName: "Data Structures", lectureTitle: "Previous Exams & Practice Problems", lectureId: "ds-prev-exams", hours: 2, type: "practice" },
            // Jun 7 — Data Structures EXAM only
            { relativeDay: 22, courseId: "datastructure", courseName: "Data Structures", lectureTitle: "EXAM: Data Structures", lectureId: "ds-exam", hours: 2, type: "exam" },
            // Jun 7 post-exam boost — Math Opt. surge (6 days until exam Jun 13)
            { relativeDay: 21, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Post-Exam Boost: Nonlinear Programming", lectureId: "stat-nonlinear", hours: 2, type: "learning", isPostExam: true },
            { relativeDay: 21, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Post-Exam Boost: Integer Programming Drill", lectureId: "stat-integer-postexam", hours: 1.5, type: "practice", isPostExam: true },
        ],
    },
    // =============================================
    // PHASE 4: Math Optimization Final (Exam: June 13)
    // =============================================
    {
        label: "Math Optimization Final Phase",
        phaseIndex: 4,
        examDate: "2026-06-13",
        phaseStartDate: "2026-06-08",
        studyItems: [
            // Jun 8
            { relativeDay: 23, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "LP & Graphical Solution Revision", lectureId: "stat-lp-revision", hours: 2, type: "revision" },
            { relativeDay: 23, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Simplex Method Revision", lectureId: "stat-simplex-revision", hours: 2, type: "revision" },
            { relativeDay: 23, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Practice Problems: LP & Simplex", lectureId: "stat-practice-lp-simplex", hours: 2, type: "practice" },
            // Jun 9
            { relativeDay: 24, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Sensitivity Analysis Revision", lectureId: "stat-sensitivity-revision", hours: 2, type: "revision" },
            { relativeDay: 24, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Duality Theory Revision", lectureId: "stat-duality-revision", hours: 2, type: "revision" },
            { relativeDay: 24, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Practice Problems: Sensitivity & Duality", lectureId: "stat-practice-sensitivity", hours: 2, type: "practice" },
            // Jun 10
            { relativeDay: 25, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Integer Programming Revision", lectureId: "stat-integer-revision", hours: 2, type: "revision" },
            { relativeDay: 25, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Nonlinear Programming Revision", lectureId: "stat-nonlinear-revision", hours: 2, type: "revision" },
            { relativeDay: 25, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Previous Exams", lectureId: "stat-previous-exams-1", hours: 2.5, type: "practice" },
            // Jun 11
            { relativeDay: 26, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Weak Topics Review", lectureId: "stat-weak-topics", hours: 2, type: "revision" },
            { relativeDay: 26, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Previous Exams 2", lectureId: "stat-previous-exams-2", hours: 2.5, type: "practice" },
            { relativeDay: 26, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Formula & Method Review", lectureId: "stat-formula-review", hours: 1.5, type: "recall" },
            // Jun 12
            { relativeDay: 27, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Active Recall", lectureId: "stat-active-recall", hours: 1.5, type: "recall" },
            { relativeDay: 27, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Mock Exam", lectureId: "stat-mock-exam", hours: 2.5, type: "practice" },
            { relativeDay: 27, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Final Revision", lectureId: "stat-final-revision", hours: 2, type: "revision" },
            { relativeDay: 27, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "Important Notes / Summaries", lectureId: "stat-important-notes", hours: 1, type: "recall" },
            // Jun 13 — Math Opt. EXAM
            { relativeDay: 28, courseId: "statistics", courseName: "Math Opt.", lectureTitle: "EXAM: Mathematical Optimization", lectureId: "stat-exam", hours: 2, type: "exam" },
        ],
    },
];

/**
 * Achievement badges
 */
const ACHIEVEMENTS = [
  {
    id: "first_lecture",
    label: "First Step",
    description: "Marked your first lecture as completed",
    icon: "🎯",
  },
  {
    id: "early_bird",
    label: "Early Bird",
    description: "Completed a study task before 9 AM",
    icon: "🐦",
  },
  {
    id: "halfway",
    label: "Halfway There",
    description: "Reached 50% overall completion",
    icon: "🌟",
  },
  {
    id: "streak_3",
    label: "3-Day Streak",
    description: "Studied for 3 consecutive days",
    icon: "🔥",
  },
  {
    id: "streak_7",
    label: "Week Warrior",
    description: "Studied for 7 consecutive days",
    icon: "⚡",
  },
  {
    id: "all_exams_prepped",
    label: "All Prepped",
    description: "All lectures marked as prepared",
    icon: "🏆",
  },
  {
    id: "speed_demon",
    label: "Speed Demon",
    description: "Completed 5 lectures in one day",
    icon: "🚀",
  },
  {
    id: "night_owl",
    label: "Night Owl",
    description: "Studied after 10 PM",
    icon: "🦉",
  },
];
