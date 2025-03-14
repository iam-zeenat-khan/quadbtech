import { MdArrowDropDown } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { BsRepeat } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";

import TodoItem from "./TodoItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlices";
import CompeletedTodo from "./CompeletedTodo";

const Todo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const isProfileVisible = useSelector((state) => state.responsive.isProfileVisible);
  const isActionVisible = useSelector((state) => state.responsive.isActionVisible);

  const handleChangeData = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    
    <div
  className={`
    transition-all duration-300
    ${!isProfileVisible && isActionVisible 
      ? "lg:w-[52vw] lg:ml-[1vw] lg:mr-[1vw]" 
      : !isActionVisible && !isProfileVisible 
        ? "lg:ml-[2vw] lg:mr-[2vw] "
        : !isActionVisible && isProfileVisible 
          ? "w-[70vw] col-span-4 -ml-[12vw]"
          : "-ml-[12vw] "}
  `}
>

      {/* Heading */}
      <div className="flex items-end border-b-1 border-gray-300 pt-[7vh] pb-[1vh] dark:bg-black dark:text-white">
        <h1 className="text-lg font-semibold">To Do</h1>
        <h1 className="text-lg">
          <MdArrowDropDown />
        </h1>
      </div>

      {/* Add Task */}
      <form onSubmit={handleAddTodo}>
        <div className="border-b-1 bg-[#EEF6EF] p-4 dark:text-white dark:bg-black flex flex-col">
          <input
            type="text"
            onChange={handleChangeData}
            className="bg-transparent outline-none h-[23vh] md:h-[20vh] text-2xl md:text-4xl w-full pl-[2vw] placeholder:text-xl md:placeholder:text-3xl placeholder:pl-[2vw]"
            placeholder="Add A Task"
          />
        
          <div className="flex justify-between items-center">
            {/* Icons */}
            <div className="text-2xl md:text-3xl flex space-x-6 md:space-x-8 ml-[2vw] cursor-pointer">
              <FaRegBell />
              <BsRepeat />
              <CiCalendar />
            </div>

            <button
              type="submit"
              className="bg-[#357937] text-white font-semibold py-2 px-4 rounded-md shadow-lg m-[1vh] text-sm md:text-base"
            >
              ADD TASK
            </button>
          </div>
        </div>
      </form>

      {/* List of To-Do */}
      <div className="w-full">
        <TodoItem />
      </div>

      {/* Completed To-Do */}
      <div className="w-full mt-4">
        <h1 className="text-lg font-semibold">Completed</h1>
        <CompeletedTodo />
      </div>
    </div>
  );
};

export default Todo;
