const ModuleNumber = ({ Modules }) => {
  const { id, title, text, link } = Modules;
  return (
    <li>
      <a
        href="/courses/BMAT205L/mod1"
        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <span class="ml-3">{`${title}`}</span>
      </a>
    </li>
  );
};

export default ModuleNumber;
