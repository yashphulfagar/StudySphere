import DataDemo1 from "./datademomain";
import { Link } from "react-router-dom";

const ModuleNumber = ({ Modules }) => {
  const { id, title, text, link } = Modules;

  const performDataLoading = (event) => {
    console.log("performLoading called ");
    console.log(`${id}`);
    return <DataDemo1 moduleId={`${id}`}></DataDemo1>;
  };

  return (
    <li>
      <Link
        onClick={performDataLoading}
        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <span class="ml-3">{`${title}`}</span>
      </Link>
    </li>
  );
};

export default ModuleNumber;
