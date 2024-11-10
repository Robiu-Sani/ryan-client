import { BiGrid, BiListCheck, BiPlus } from "react-icons/bi";
import ProductCard from "../products/ProductCard";

const Button = ({ children, variant, size, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded ${
      variant === "link"
        ? "text-white"
        : variant === "secondary"
        ? "bg-gray-200"
        : variant === "ghost"
        ? "hover:bg-gray-100"
        : "bg-blue-500 text-white"
    } ${size === "icon" ? "p-2" : ""} ${className}`}
  >
    {children}
  </button>
);

const Checkbox = ({ id, checked, onCheckedChange }) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onChange={(e) => onCheckedChange(e.target.checked)}
    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
  />
);

const Select = ({ children, defaultValue }) => (
  <select defaultValue={defaultValue} className="border rounded px-2 py-1">
    {children}
  </select>
);

const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);

const CategoryProduct = ({ products, slug }) => {
  const [view, setView] = useState("grid");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 353900 });
  const [excludeOutOfStock, setExcludeOutOfStock] = useState(false);

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-3xl">
        No Products found
      </div>
    );
  }
  return (
    <div className=" mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-52 flex-shrink-0">
          <div className="bg-white rounded-lg shadow">
            <div className="flex items-center justify-between bg-[#72BF44] text-white p-2 font-semibold">
              <h2 className="font-medium">Filter By</h2>
              <Button variant="link" className="text-white p-0 h-auto">
                Reset
              </Button>
            </div>

            <div className="p-4 space-y-6">
              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-4">Price</h3>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={priceRange.min}
                      onChange={(e) =>
                        setPriceRange({
                          ...priceRange,
                          min: parseInt(e.target.value),
                        })
                      }
                      className="w-full p-2 border rounded"
                    />
                    <input
                      type="number"
                      value={priceRange.max}
                      onChange={(e) =>
                        setPriceRange({
                          ...priceRange,
                          max: parseInt(e.target.value),
                        })
                      }
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="353900"
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange({
                        ...priceRange,
                        max: parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                </div>
              </div>

              {/* Stock Filter */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="stock"
                  checked={excludeOutOfStock}
                  onCheckedChange={(checked) => setExcludeOutOfStock(checked)}
                />
                <label htmlFor="stock" className="text-sm">
                  Exclude Out of Stock Items
                </label>
              </div>

              {/* Brand Filter */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Brand</h3>
                  <Button variant="ghost" size="icon">
                    <BiPlus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="text-xl font-bold ">
                <span className="uppercase">{slug}</span> Price in Bangladesh{" "}
                <span className="text-sm font-normal text-gray-500">
                  ({products.length} Products found)
                </span>
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Sort By:</span>
                  <Select defaultValue="customized">
                    <SelectItem value="customized">Customized</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">View:</span>
                  <div className="flex border rounded">
                    <Button
                      variant={view === "grid" ? "secondary" : "ghost"}
                      size="icon"
                      onClick={() => setView("grid")}
                    >
                      <BiGrid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={view === "list" ? "secondary" : "ghost"}
                      size="icon"
                      onClick={() => setView("list")}
                    >
                      <BiListCheck className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div
            className={`grid ${
              view === "grid" ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-1"
            } gap-6`}
          >
            {products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
