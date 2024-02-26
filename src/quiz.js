export default [
  {
    id: "q1",
    title: "Math Quiz",
    description: "A basic maths quiz to build your logic.",
    questions: [
      {
        id: 1,
        text: "What is 2 + 2?",
        answers: ["4", "5", "6", "7"],
      },
      {
        id: 2,
        text: "What is 3 * 5?",
        answers: ["15", "10", "5", "25"],
      },
      {
        id: 3,
        text: "What is 7 * 7?",
        answers: ["49", "50", "48", "35"],
      },
      {
        id: 4,
        text: "Square of 9 is?",
        answers: ["81", "88", "64", "100"],
      },
      {
        id: 5,
        text: "Cube root of 216 is?",
        answers: ["6", "4", "8", "12"],
      },
    ],
  },
  {
    id: "q2",
    title: "React quiz",
    description: "A react quiz to strength your react concepts.",
    questions: [
      {
        id: 1,
        text: "Which of the following definitions best describes React.js?",
        answers: [
          "A library to build user interfaces with help of declarative code.",
          "A library for managing state in web applications.",
          "A framework to build user interfaces with help of imperative code.",
          "A library used for building mobile applications only.",
        ],
      },
      {
        id: 2,
        text: "What purpose do React hooks serve?",
        answers: [
          "Enabling the use of state and other React features in functional components.",
          "Creating responsive layouts in React applications.",
          "Handling errors within the application.",
          "Part of the Redux library for managing global state.",
        ],
      },
      {
        id: 3,
        text: "How do you typically render list content in React apps?",
        answers: [
          "By using the map() method to iterate over an array of data and returning JSX.",
          "By using the for() loop to iterate over an array of data and returning JSX.",
          "By using the forEach() method to iterate over an array of data and returning JSX.",
          "By using the loop() method to iterate over an array of data and returning JSX.",
        ],
      },
      {
        id: 4,
        text: "Which approach can NOT be used to render content conditionally?",
        answers: [
          "Using a the #if template syntax.",
          "Using a ternary operator.",
          "Using the && operator.",
          "Using an if-else statement.",
        ],
      },
      {
        id: 5,
        text: "Can you identify what JSX is?",
        answers: [
          "A JavaScript extension that adds HTML-like syntax to JavaScript.",
          "A JavaScript library for building dynamic user interfaces.",
          "A specific HTML version that was explicitly created for React.",
          "A tool for making HTTP requests in a React application.",
        ],
      },
    ],
  },
];
