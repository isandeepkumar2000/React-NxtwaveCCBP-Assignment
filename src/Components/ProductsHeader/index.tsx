import { BsFilterRight } from "react-icons/bs";
import { HeaderPageType } from "../NxtTrendzAuthenication/AllProductSession";
export interface HeadertypePr {
  sortByOptions: any;
  activeOptionId: string;
  updatedActiveOptionId: Function;
}

const ProductsHeader: React.FC<HeadertypePr> = (props) => {
  const { sortByOptions, activeOptionId, updatedActiveOptionId } = props;
  // const { optionId, displayText } = sortByOptions;
  const onChangeSortby = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updatedActiveOptionId(e.target.value);
  };

  return (
    <div className="products-header">
      <h1 className="products-list-heading">All Products</h1>
      <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon" />
        <h1 className="sort-by">Sort by</h1>
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={(e) => onChangeSortby}
        >
          {sortByOptions.map((eachOption: any) => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductsHeader;
