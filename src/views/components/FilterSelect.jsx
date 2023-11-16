import Select from 'react-select';
import { products } from '../utils/products';

const options = [
    { value: "all", label: "All" },
    { value: "furniture", label: "Furniture" },
    { value: "accessories", label: "Accessories" },
    { value: "jewelry", label: "Jewelry" },
    { value: "devices", label: "Devices" },
    { value: "wireless", label: "Wireless" },
    { value: "clothes", label: "Clothes" },
    { value: "books", label: "Books" },
    { value: "food", label: "Food" },
    { value: "vehicle", label: "Vehicle" },
    { value: "sport", label: "Sport" },

];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#0f3460",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "200px",
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#0f3460" : "white",
        color: state.isSelected ? "white" : "#0f3460",
        "&:hover": {
        backgroundColor: "#0f3460",
        color: "white",
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};

const FilterSelect = ({setFilterList}) => {
    const handleChange = (selectedOption)=> {
        if (selectedOption.value === "all") {
            setFilterList(products);
          } else {
            setFilterList(products.filter((item) => item.category === selectedOption.value));
          }    }
    return (
    <Select
    options={options}
    defaultValue={{ value: "", label: "Filter By Category" }}
    styles={customStyles}
    onChange={handleChange}
    />
    );
};

export default FilterSelect;
