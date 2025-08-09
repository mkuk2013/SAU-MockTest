import React, { createContext, useContext, useState, useCallback } from "react";

const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const questions = [
  // ---------- English & General Knowledge (1–25) ----------
  { "question": "1. Synonym of 'benevolent':", "options": ["Cruel", "Kind", "Harsh", "Proud"], "answer": 1, "subject": "English" },
  { "question": "2. Antonym of 'transparent':", "options": ["Opaque", "Clear", "Honest", "Glassy"], "answer": 0, "subject": "English" },
  { "question": "3. Correct spelling:", "options": ["Comitte", "Committe", "Committee", "Comittee"], "answer": 2, "subject": "English" },
  { "question": "4. Choose the correct word: 'He ____ to school every day.'", "options": ["go", "goes", "gone", "going"], "answer": 1, "subject": "English" },
  { "question": "5. Synonym of 'rapid':", "options": ["Slow", "Fast", "Lazy", "Weak"], "answer": 1, "subject": "English" },
  { "question": "6. Antonym of 'victory':", "options": ["Loss", "Win", "Prize", "Success"], "answer": 0, "subject": "English" },
  { "question": "7. Meaning of idiom 'break the ice':", "options": ["Start a conversation", "Destroy something", "Fall on ice", "Win a race"], "answer": 0, "subject": "English" },
  { "question": "8. Synonym of 'brave':", "options": ["Cowardly", "Fearless", "Weak", "Timid"], "answer": 1, "subject": "English" },
  { "question": "9. Antonym of 'ancient':", "options": ["Old", "Historic", "Modern", "Antique"], "answer": 2, "subject": "English" },
  { "question": "10. Synonym of 'generous':", "options": ["Stingy", "Kind", "Mean", "Selfish"], "answer": 1, "subject": "English" },
  { "question": "11. Antonym of 'optimistic':", "options": ["Hopeful", "Cheerful", "Pessimistic", "Positive"], "answer": 2, "subject": "English" },
  { "question": "12. Synonym of 'fragile':", "options": ["Strong", "Breakable", "Solid", "Tough"], "answer": 1, "subject": "English" },
  { "question": "13. Antonym of 'expand':", "options": ["Grow", "Enlarge", "Shrink", "Spread"], "answer": 2, "subject": "English" },
  { "question": "14. Choose the correct preposition: 'She is good ___ math.'", "options": ["in", "at", "on", "for"], "answer": 1, "subject": "English" },
  { "question": "15. Find the odd one out: 'Apple, Orange, Banana, Carrot'", "options": ["Apple", "Orange", "Banana", "Carrot"], "answer": 3, "subject": "English" },
  { "question": "16. Choose correct tense: 'By next year, they ___ the project.'", "options": ["finish", "finished", "will finish", "will have finished"], "answer": 3, "subject": "English" },
  { "question": "17. Which is a conjunction?", "options": ["Quickly", "And", "Beautiful", "Run"], "answer": 1, "subject": "English" },
  { "question": "18. Select plural form of 'analysis':", "options": ["Analysises", "Analyses", "Analysii", "Analysis"], "answer": 1, "subject": "English" },
  { "question": "19. Which word is an antonym of 'scarce'?", "options": ["Rare", "Plentiful", "Insufficient", "Limited"], "answer": 1, "subject": "English" },
  { "question": "20. Who wrote 'Hamlet'?", "options": ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"], "answer": 1, "subject": "General Knowledge" },
  { "question": "21. Capital of Pakistan is:", "options": ["Karachi", "Islamabad", "Lahore", "Peshawar"], "answer": 1, "subject": "General Knowledge" },
  { "question": "22. Which country is called the 'Land of the Rising Sun'?", "options": ["Japan", "China", "Thailand", "Korea"], "answer": 0, "subject": "General Knowledge" },
  { "question": "23. Largest desert in the world is:", "options": ["Sahara", "Gobi", "Kalahari", "Arctic"], "answer": 0, "subject": "General Knowledge" },
  { "question": "24. The currency of Japan is:", "options": ["Won", "Yuan", "Yen", "Dollar"], "answer": 2, "subject": "General Knowledge" },
  { "question": "25. National flower of Pakistan is:", "options": ["Rose", "Jasmine", "Sunflower", "Tulip"], "answer": 1, "subject": "General Knowledge" },

  // ---------- Biology / Mathematics (26–50) ----------
  { "question": "26. Basic unit of life is:", "options": ["Organ", "Cell", "Tissue", "Atom"], "answer": 1, "subject": "Biology" },
  { "question": "27. √64 equals:", "options": ["6", "7", "8", "9"], "answer": 2, "subject": "Mathematics" },
  { "question": "28. Which organ pumps blood?", "options": ["Liver", "Heart", "Lungs", "Kidney"], "answer": 1, "subject": "Biology" },
  { "question": "29. What is 7 x 8?", "options": ["54", "56", "58", "60"], "answer": 1, "subject": "Mathematics" },
  { "question": "30. Which organ filters blood?", "options": ["Brain", "Kidney", "Lung", "Heart"], "answer": 1, "subject": "Biology" },
  { "question": "31. Function of lungs is:", "options": ["Pump blood", "Filter urine", "Exchange gases", "Produce hormones"], "answer": 2, "subject": "Biology" },
  { "question": "32. Square root of 144:", "options": ["10", "11", "12", "13"], "answer": 2, "subject": "Mathematics" },
  { "question": "33. Which blood type is the universal donor?", "options": ["A", "B", "O-", "AB+"], "answer": 2, "subject": "Biology" },
  { "question": "34. Value of π (pi) up to two decimals:", "options": ["3.14", "3.15", "3.13", "3.12"], "answer": 0, "subject": "Mathematics" },
  { "question": "35. Normal human body temperature (°C):", "options": ["36°C", "37°C", "38°C", "39°C"], "answer": 1, "subject": "Biology" },
  { "question": "36. Number of sides in a hexagon:", "options": ["5", "6", "7", "8"], "answer": 1, "subject": "Mathematics" },
  { "question": "37. Organ that produces insulin:", "options": ["Liver", "Pancreas", "Kidney", "Heart"], "answer": 1, "subject": "Biology" },
  { "question": "38. 15² equals:", "options": ["200", "210", "225", "240"], "answer": 2, "subject": "Mathematics" },
  { "question": "39. Largest organ in human body:", "options": ["Liver", "Skin", "Heart", "Lung"], "answer": 1, "subject": "Biology" },
  { "question": "40. Sum of angles in a triangle:", "options": ["90°", "180°", "270°", "360°"], "answer": 1, "subject": "Mathematics" },
  { "question": "41. Smallest bone in human body:", "options": ["Stapes", "Femur", "Tibia", "Ulna"], "answer": 0, "subject": "Biology" },
  { "question": "42. Cube of 5:", "options": ["100", "125", "150", "200"], "answer": 1, "subject": "Mathematics" },
  { "question": "43. Main function of red blood cells:", "options": ["Fight infection", "Carry oxygen", "Produce hormones", "Digest food"], "answer": 1, "subject": "Biology" },
  { "question": "44. Perimeter of a square with side 4 cm:", "options": ["12 cm", "16 cm", "20 cm", "8 cm"], "answer": 1, "subject": "Mathematics" },
  { "question": "45. Vertebrates are animals that have:", "options": ["Wings", "Backbone", "Scales", "Fins"], "answer": 1, "subject": "Biology" },
  { "question": "46. If x + 5 = 12, x equals:", "options": ["5", "6", "7", "8"], "answer": 2, "subject": "Mathematics" },
  { "question": "47. Which vitamin is produced when skin is exposed to sunlight?", "options": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], "answer": 3, "subject": "Biology" },
  { "question": "48. LCM of 6 and 8:", "options": ["12", "24", "48", "16"], "answer": 1, "subject": "Mathematics" },
  { "question": "49. Which cell organelle is the 'powerhouse' of the cell?", "options": ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"], "answer": 1, "subject": "Biology" },
  { "question": "50. Number of chromosomes in humans:", "options": ["23", "46", "44", "48"], "answer": 1, "subject": "Biology" },

  // ---------- Chemistry / Computer (51–75) ----------
  { "question": "51. Water formula is:", "options": ["H2O", "CO2", "O2", "H2SO4"], "answer": 0, "subject": "Chemistry" },
  { "question": "52. HTML stands for:", "options": ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "High Text Machine Language", "None"], "answer": 1, "subject": "Computer" },
  { "question": "53. Atomic number of Oxygen:", "options": ["6", "7", "8", "9"], "answer": 2, "subject": "Chemistry" },
  { "question": "54. Main component of computer (central processing):", "options": ["Monitor", "Mouse", "CPU", "Keyboard"], "answer": 2, "subject": "Computer" },
  { "question": "55. Who invented the World Wide Web (WWW)?", "options": ["Steve Jobs", "Bill Gates", "Tim Berners-Lee", "Mark Zuckerberg"], "answer": 2, "subject": "Computer" },
  { "question": "56. Chemical symbol for gold:", "options": ["G", "Au", "Ag", "Go"], "answer": 1, "subject": "Chemistry" },
  { "question": "57. Which device stores data permanently (non-volatile)?", "options": ["RAM", "ROM", "Cache", "Register"], "answer": 1, "subject": "Computer" },
  { "question": "58. pH value of pure water at 25°C:", "options": ["5", "6", "7", "8"], "answer": 2, "subject": "Chemistry" },
  { "question": "59. First computer programmer was:", "options": ["Alan Turing", "Ada Lovelace", "Charles Babbage", "Bill Gates"], "answer": 1, "subject": "Computer" },
  { "question": "60. Gas commonly used to fill party balloons:", "options": ["Oxygen", "Nitrogen", "Helium", "Carbon dioxide"], "answer": 2, "subject": "Chemistry" },
  { "question": "61. Shortcut for copy in Windows:", "options": ["Ctrl+X", "Ctrl+C", "Ctrl+V", "Ctrl+Z"], "answer": 1, "subject": "Computer" },
  { "question": "62. HCl is known as:", "options": ["Sulfuric acid", "Hydrochloric acid", "Acetic acid", "Nitric acid"], "answer": 1, "subject": "Chemistry" },
  { "question": "63. Which key is commonly used to refresh a webpage?", "options": ["F2", "F3", "F5", "F7"], "answer": 2, "subject": "Computer" },
  { "question": "64. CO2 is:", "options": ["Carbon dioxide", "Carbon monoxide", "Oxygen", "Methane"], "answer": 0, "subject": "Chemistry" },
  { "question": "65. Name of Charles Babbage's design for a mechanical computer:", "options": ["Abacus", "ENIAC", "Analytical Engine", "Colossus"], "answer": 2, "subject": "Computer" },
  { "question": "66. NaCl common name is:", "options": ["Sugar", "Salt", "Baking soda", "Vinegar"], "answer": 1, "subject": "Chemistry" },
  { "question": "67. Binary number system uses base:", "options": ["2", "8", "10", "16"], "answer": 0, "subject": "Computer" },
  { "question": "68. A substance that speeds up a chemical reaction is called:", "options": ["Reactant", "Catalyst", "Solvent", "Inhibitor"], "answer": 1, "subject": "Chemistry" },
  { "question": "69. Which company was co-founded by Bill Gates?", "options": ["Apple", "Microsoft", "Facebook", "Google"], "answer": 1, "subject": "Computer" },
  { "question": "70. C6H12O6 is the formula for:", "options": ["Glucose", "Fructose", "Sucrose", "Lactose"], "answer": 0, "subject": "Chemistry" },
  { "question": "71. Which gas is produced by fermentation?", "options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], "answer": 1, "subject": "Chemistry" },
  { "question": "72. Which protocol is used to transfer web pages?", "options": ["FTP", "HTTP", "SMTP", "SSH"], "answer": 1, "subject": "Computer" },
  { "question": "73. Which of these is an alkaline substance?", "options": ["HCl", "NaOH", "CO2", "H2SO4"], "answer": 1, "subject": "Chemistry" },
  { "question": "74. Which component stores the BIOS in a PC?", "options": ["Hard disk", "ROM chip", "GPU", "RAM"], "answer": 1, "subject": "Computer" },
  { "question": "75. Which programming language is known as the 'mother of all languages'?", "options": ["C", "Java", "Python", "Assembly"], "answer": 0, "subject": "Computer" },

  // ---------- Physics (76–100) ----------
  { "question": "76. Unit of force is:", "options": ["Joule", "Watt", "Newton", "Pascal"], "answer": 2, "subject": "Physics" },
  { "question": "77. Acceleration due to gravity on Earth (approx.):", "options": ["9.8 m/s²", "10 m/s²", "9.2 m/s²", "10.8 m/s²"], "answer": 0, "subject": "Physics" },
  { "question": "78. Law of inertia is which Newton's law?", "options": ["First law", "Second law", "Third law", "None"], "answer": 0, "subject": "Physics" },
  { "question": "79. Power is defined as:", "options": ["Work/Time", "Force x Distance", "Mass x Acceleration", "Distance/Time"], "answer": 0, "subject": "Physics" },
  { "question": "80. Which lens is used in a magnifying glass?", "options": ["Concave", "Convex", "Cylindrical", "None"], "answer": 1, "subject": "Physics" },
  { "question": "81. Speed of light in vacuum (approx.):", "options": ["3x10^8 m/s", "3x10^6 m/s", "3x10^4 m/s", "3x10^2 m/s"], "answer": 0, "subject": "Physics" },
  { "question": "82. Work is measured in:", "options": ["Newton", "Pascal", "Joule", "Watt"], "answer": 2, "subject": "Physics" },
  { "question": "83. Instrument to measure temperature:", "options": ["Barometer", "Thermometer", "Hygrometer", "Manometer"], "answer": 1, "subject": "Physics" },
  { "question": "84. Which particle has a negative charge?", "options": ["Proton", "Electron", "Neutron", "Positron"], "answer": 1, "subject": "Physics" },
  { "question": "85. Unit of power in the SI system:", "options": ["Newton", "Joule", "Watt", "Pascal"], "answer": 2, "subject": "Physics" },
  { "question": "86. What does a volt measure?", "options": ["Current", "Resistance", "Potential difference", "Power"], "answer": 2, "subject": "Physics" },
  { "question": "87. Which color of light has the shortest wavelength?", "options": ["Red", "Green", "Blue", "Violet"], "answer": 3, "subject": "Physics" },
  { "question": "88. The bending of light around corners is called:", "options": ["Reflection", "Refraction", "Diffraction", "Dispersion"], "answer": 2, "subject": "Physics" },
  { "question": "89. SI unit of electric current:", "options": ["Volt", "Ampere", "Ohm", "Watt"], "answer": 1, "subject": "Physics" },
  { "question": "90. Sound cannot travel through:", "options": ["Solid", "Liquid", "Gas", "Vacuum"], "answer": 3, "subject": "Physics" },
  { "question": "91. Light year is a unit of:", "options": ["Time", "Distance", "Speed", "Energy"], "answer": 1, "subject": "Physics" },
  { "question": "92. Which law explains the relationship between voltage, current, and resistance?", "options": ["Newton's Law", "Boyle's Law", "Ohm's Law", "Hooke's Law"], "answer": 2, "subject": "Physics" },
  { "question": "93. In which medium does sound travel fastest?", "options": ["Air", "Water", "Steel", "Vacuum"], "answer": 2, "subject": "Physics" },
  { "question": "94. The force that opposes motion is called:", "options": ["Inertia", "Friction", "Tension", "Gravity"], "answer": 1, "subject": "Physics" },
  { "question": "95. Instrument used to measure atmospheric pressure:", "options": ["Barometer", "Thermometer", "Manometer", "Anemometer"], "answer": 0, "subject": "Physics" },
  { "question": "96. Which wave is used in radar?", "options": ["Radio waves", "Microwaves", "Infrared waves", "X-rays"], "answer": 1, "subject": "Physics" },
  { "question": "97. Energy stored in a body due to its position is called:", "options": ["Kinetic energy", "Potential energy", "Thermal energy", "Nuclear energy"], "answer": 1, "subject": "Physics" },
  { "question": "98. The unit of frequency is:", "options": ["Hertz", "Newton", "Joule", "Pascal"], "answer": 0, "subject": "Physics" },
  { "question": "99. Which of these is not a vector quantity?", "options": ["Velocity", "Force", "Mass", "Acceleration"], "answer": 2, "subject": "Physics" },
  { "question": "100. The phenomenon of splitting of light into colors is called:", "options": ["Reflection", "Refraction", "Dispersion", "Interference"], "answer": 2, "subject": "Physics" }
];

  // State management for the test application
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(undefined)); // Initialize with undefined for each question
  const [flaggedQuestions, setFlaggedQuestions] = useState([]);
  const [timeTaken, setTimeTaken] = useState(0);

  // Reset function for test state
  const resetTestState = useCallback(() => {
    setIsTestCompleted(false);
    setUserAnswers(Array(questions.length).fill(undefined)); // Reset answers
    setFlaggedQuestions([]);
    setTimeTaken(0);
    // Do NOT reset isAuthenticated here, as it's handled by login screen
  }, [questions.length]); // Depend on questions.length to re-initialize userAnswers correctly

  return (
    <TestContext.Provider value={{ 
      questions, 
      isAuthenticated, 
      setIsAuthenticated,
      isTestCompleted,
      setIsTestCompleted,
      userAnswers,
      setUserAnswers,
      flaggedQuestions,
      setFlaggedQuestions,
      timeTaken,
      setTimeTaken,
      resetTestState
    }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTest = () => useContext(TestContext);
