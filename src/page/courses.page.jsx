import NavBar from "../components/NavBar.component";
import ModuleBar from "../components/sidebar.component";


const CoursesPage = () => {
  return (
    <>
      <NavBar courses={true} />
      <ModuleBar />
    </>
  );
};

export default CoursesPage;
