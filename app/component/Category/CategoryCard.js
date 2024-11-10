// app/components/CategoryCard.js
export default function CategoryCard({ icon, label }) {
    return (
      <div className="flex flex-col items-center group">
        <div className="p-4 rounded-full bg-gray-100 group-hover:bg-green-200 transition duration-300">
          <img src={icon} alt={label} className="w-12 h-12" />
        </div>
        <span className="mt-2 text-sm font-medium group-hover:text-green-700 transition duration-300">
          {label}
        </span>
      </div>
    );
  }
  