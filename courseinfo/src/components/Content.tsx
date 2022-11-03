import { CoursePart } from '../types';
import Part from './Part';

const Content = ({ courseParts }: { courseParts: CoursePart[] }) => {

  return(
    <div>
      { courseParts.map(c =>
        <div key={ c.name } style={{ paddingTop: 10 }} >
          <strong>{ c.name }  { c.exerciseCount } </strong>
          { <Part part={c}/>}
        </div>
      )}
    </div>
  );
};

export default Content;
