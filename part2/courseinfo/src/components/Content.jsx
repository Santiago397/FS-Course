import Part from "./Part";

const Content = ({ parts }) => {

  const allCourses = () => {
    const copyParts = [...parts];
    return copyParts.reduce((sum, part) => sum + part.exercises, 0);
  };

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <b>Total of {allCourses()} exercises</b>
    </div>
  );
};

export default Content;
