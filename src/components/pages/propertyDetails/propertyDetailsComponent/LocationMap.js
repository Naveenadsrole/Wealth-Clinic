const LocationMap = () => {
  const address = "DLF New Town Heights";
  return (
    <div className="p-2">
      <iframe
        title="location by name"
        src={`https://www.google.com/maps?q=${address}&output=embed`}
        style={{ border: "none" }}
        width="100%"
        height="420px"
      />
    </div>
  );
};

export default LocationMap;
