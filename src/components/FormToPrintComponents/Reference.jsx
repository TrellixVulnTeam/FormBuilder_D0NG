export const Reference = (props) => {
  return (
    <div className="reference">
      <p style={{ fontWeight: "600" }}>{props.name}</p>
      <a style={{ color: "blue" }}>{props.page}</a>
      <p>{"Reference name: " + props.referenceName}</p>
      <p>{"Phone: " + props.phone}</p>
      <p>{"Email:" + props.email}</p>
    </div>
  );
};
