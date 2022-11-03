
interface TotalProps {
    name: string;
    exerciseCount: number;
}

const Total = ({ courseParts }: { courseParts: TotalProps[] }) => {
  return(
    <div>
      <p>Total of <strong> { courseParts.reduce((carry, part) => carry + part.exerciseCount, 0) } </strong> exercises</p>
    </div>
  );
};


export default Total;

// courseParts.reduce((carry, part) => carry + part.exerciseCount, 0);