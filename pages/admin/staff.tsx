import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";

import Button from "@/components/UI/Button";
import AdminLayoutPage from "@/layout/Admin-layout";
import { updateSidebar } from "@/redux/ui-slice";

export default function Staffpage() {
  const dispatch = useDispatch();

  function addEmployeeHandler() {
    dispatch(updateSidebar("create-staff"));
  }

  return (
    <AdminLayoutPage>
      <section className="container">
        <div className="row justify-between flex items-center my-2">
          <div className="search-input relative flex justify-center w-1/4">
            <BsSearch className="mr-2 text-xl absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 py-2 w-full rounded-md pl-10"
            />
          </div>
          <Button
            text="Add Employee"
            icon={<AiOutlinePlus className="mr-2 font-bold" />}
            className="bg-site-purple text-white flex items-center px-4 py-2 rounded-md"
            onClick={addEmployeeHandler}
          />
        </div>
      </section>
    </AdminLayoutPage>
  );
}
