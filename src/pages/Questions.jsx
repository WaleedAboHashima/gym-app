import React, { useState } from 'react'
import {AiOutlinePlus} from "react-icons/ai"
const Questions = () => {
    const qs = [
        {
            id: 1,
            questions: "1ماهو سعر الاشتراك في الانديه الرياضيه",
            answers:"يختلف السعر باختلاف مده وفئه الاشتراك و لذلك ينصح بالتواصل مع المركز الاقرب لك"
        },
        {
            id: 2,
            questions: "2ماهو سعر الاشتراك في الانديه الرياضيه",
            answers:"يختلف السعر باختلاف مده وفئه الاشتراك و لذلك ينصح بالتواصل مع المركز الاقرب لك"
        },
        {
            id: 3,
            questions: "3ماهو سعر الاشتراك في الانديه الرياضيه",
            answers:"يختلف السعر باختلاف مده وفئه الاشتراك و لذلك ينصح بالتواصل مع المركز الاقرب لك"
        },
        {
            id: 4,
            questions: "4ماهو سعر الاشتراك في الانديه الرياضيه",
            answers:"يختلف السعر باختلاف مده وفئه الاشتراك و لذلك ينصح بالتواصل مع المركز الاقرب لك"
        },
        {
            id: 5,
            questions: "5ماهو سعر الاشتراك في الانديه الرياضيه",
            answers:"يختلف السعر باختلاف مده وفئه الاشتراك و لذلك ينصح بالتواصل مع المركز الاقرب لك"
        },
        {
            id: 6,
            questions: "ماهو سعر  ف الانديه الرياضيه ماهو سعر  في الانديه الرياضيهماهو سعر  في الانديه الرياضيه6 الانديه الرياضيه ماهو سعر  في الانديه الرياضيهماهو سعر  في الانديه الرياضيه6 الانديه الرياضيه ماهو سعر  في الانديه الرياضيهماهو سعر  في الانديه الرياضيه6ي الانديه الرياضيه ماهو سعر  في الانديه الرياضيهماهو سعر  في الانديه الرياضيه6",
            answers:"يختلف السعر باختلاف مده وفئه الاشتراك و لذلك ينصح بالتواصل مع المركز الاقرب لك"
        },
    ]
  const [visible, setVisible] = useState([]);

return (
  <div className='flex justify-center items-center bg-stone-100 py-10 w-full'>
    <div className='bg-white w-10/12 lg:w-1/2 rounded-xl shadow-lg'>
      <div className='flex flex-col gap-y-5 justify-center items-center p-7 mb-10'>
        <span className='md:text-4xl text-xl'>الاسئله الشائعه</span>
        <span className='md:text-xl text-md text-gray-500'>هنا تجد إجابة جميع أسئلتك</span>
      </div>
      <div className='flex flex-col justify-center items-center w-full gap-y-3 mb-10 px-3'>
        {qs.map((q) => {
          const isQVisible = visible.includes(q.id);
          return (
            <div
              className='flex justify-between bg-zinc-800   md:p-5 p-2 items-center '
              key={q.id}
            >
              <AiOutlinePlus
                className={`text-white cursor-pointer ${
                  isQVisible ? 'rotate-45' : ''
                }`}
                onClick={() =>
                  setVisible((prevState) =>
                    isQVisible
                      ? prevState.filter((id) => id !== q.id)
                      : [...prevState, q.id]
                  )
                }
              />
                  {isQVisible ?
                      <span className='md:text-xl text-sm  text-right w-fit bg-white text-black px-5 py-2 ml-1 rounded-2xl transition-all'>{q.answers}</span> :
                      <span className='md:text-xl text-sm  text-right w-fit  text-white px-5 py-2 ml-1 transition-all'>{q.questions}</span>
                  }
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

}

export default Questions