import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegStar, FaRegBell } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { BsRepeat } from "react-icons/bs";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { PiTrashFill } from "react-icons/pi";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";

const Action = () => {
  const isProfileVisible = useSelector(state => state.responsive.isProfileVisible);
  const isActionVisible = useSelector(state => state.responsive.isActionVisible);
  
  const [dueDate, setDueDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <div className={`${!isProfileVisible && isActionVisible ? "ml-[23vw] col-span-2" : ""} bg-[#EEF6EF] pt-[10vh] min-h-screen dark:bg-black dark:text-white`}>
      <div className="px-6">
        <ul className="space-y-6">
          {/* Task Title */}
          <li className="border-t flex justify-between items-center pt-6">
            <div className="flex space-x-4 items-center">
              <MdOutlineCheckBoxOutlineBlank className="text-2xl" />
              <h4 className="text-lg font-medium">Buy groceries</h4>
            </div>
            <FaRegStar className="text-2xl text-gray-500 hover:text-yellow-500 cursor-pointer" />
          </li>

          {/* Add Step */}
          <li className="border-t flex items-center space-x-4 pt-4">
            <IoMdAdd className="text-2xl" />
            <h4 className="text-lg">Add Step</h4>
          </li>

          {/* Set Reminder */}
          <li className="border-t flex items-center space-x-4 pt-4">
            <FaRegBell className="text-2xl" />
            <h4 className="text-lg">Set Reminder</h4>
          </li>

          {/* Add Due Date */}
          <li className="border-t flex items-center justify-between pt-4 cursor-pointer" onClick={() => setShowDatePicker(!showDatePicker)}>
            <div className="flex items-center space-x-4">
              <CiCalendar className="text-2xl" />
              <h4 className="text-lg">{dueDate ? dueDate.toDateString() : "Add Due Date"}</h4>
            </div>
          </li>
          
          {/* Date Picker */}
          {showDatePicker && (
            <div className="ml-10 mt-2 bg-green-100">
              <DatePicker
                selected={dueDate}
                onChange={(date) => {
                  setDueDate(date);
                  setShowDatePicker(false);
                }}
                inline
              />
            </div>
          )}

          {/* Repeat */}
          <li className="border-t flex items-center space-x-4 pt-4">
            <BsRepeat className="text-2xl" />
            <h4 className="text-lg">Repeat</h4>
          </li>

          {/* Add Notes */}
          <li className="border-t pt-4 pb-32">
            <input
              className="w-full bg-transparent outline-none text-lg placeholder-gray-500"
              placeholder="Add Notes"
            />
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="border-t flex justify-between items-center p-4">
        <ImCross className="text-lg cursor-pointer" />
        <h4 className="text-lg text-gray-500">Created Today</h4>
        <PiTrashFill className="text-2xl text-red-500 cursor-pointer hover:text-red-700" />
      </div>
    </div>
  );
};

export default Action;
