// import React, { createContext, useContext, useEffect, useState } from 'react'

// const QuestionContext = createContext();
// const QuestionProvider = ({ children }) => {
//     const [value, setValue] = useState(1)

//     const [finalData, setFinalData] = useState([])

//     const numQuestions = finalData.length;

//     return (
//         <QuestionContext.Provider value={{
//             finalData,
//             value,
//             setValue,
//             numQuestions
//         }}>
//             {children}
//         </QuestionContext.Provider>

//     )
// }

// function useQuestion() {
//     const context = useContext(QuestionContext);
//     return context;
// }

// export { QuestionProvider, useQuestion }