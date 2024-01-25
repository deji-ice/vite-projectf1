export const ActionLink = () => {
  const handleClick = (e) => {
    console.log(e);
    e.preventDefault();
    console.log("The link was clicked.");
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    console.log("first");
  };
  return (
    <>
      <a
        onCopy={() => {
          console.log("copied");
        }}
        onc
        className="bg-white "
        href="/"
        onClick={handleClick}
      >
        Click US
      </a>
      <input
        onChange={handleChange}
        on
        onMouseEnter={() => console.log("hovered over this element")}
      />
    </>
  );
};
