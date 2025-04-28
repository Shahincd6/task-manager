const FilterBar = ({ setFilter }) => {
    return (
      <div className="flex space-x-4 justify-center">
        <button onClick={() => setFilter('All')} className="btn-primary">All</button>
        <button onClick={() => setFilter('Active')} className="btn-primary">Active</button>
        <button onClick={() => setFilter('Completed')} className="btn-primary">Completed</button>
      </div>
    );
  };
  
  export default FilterBar;
  