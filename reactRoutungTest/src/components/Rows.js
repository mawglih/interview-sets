import RowCard from './RowCard';
import Items from '../constants/rowcard';

const Rows = () => {
  return (
    <div className="rows-container">
      {Items.map((item, ind) => {
        return(
          <RowCard
            key={item.title}
            title={item.title}
            subtitle={item.sub}
            classname={ind%2 === 0 ? "firstclass" : "secondclass"}
          />
        )
      })}
    </div>
  )
}
export default Rows;
