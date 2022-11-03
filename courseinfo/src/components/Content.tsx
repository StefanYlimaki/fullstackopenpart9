
interface ContentProps {
    name: string;
    exerciseCount: number;
}

const Content = ({ courseParts }: { courseParts: ContentProps[] }) => {
  return(
    <div>
      { courseParts.map(c => <div key={ c.name }>{ c.name } { c.exerciseCount }</div>  )}
    </div>
  );
};



export default Content;