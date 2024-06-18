
const Filter = ({ onFilter }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilter(name, value);
  };

  return (
    <div className="filter">
      <input name="title" onChange={handleFilterChange} placeholder="Filter by Title" />
      <input name="startDate" onChange={handleFilterChange} placeholder="Filter by Start Date" type="date" />
      <input name="endDate" onChange={handleFilterChange} placeholder="Filter by End Date" type="date" />
    </div>
  );
};

export default Filter;
