// For the page 18

const TeamMember = (props) => {
  const { name, position, linkedn, img } = props.member;

  return (
    <div className="teamMember" style={style.teamMember}>
      <img src={img}></img>
      <p>
        <strong>{name}</strong>
      </p>
      <p>{position}</p>
      <p>Linkedn: {linkedn}</p>
    </div>
  );
};

const style = {
  teamMember: {
    display: "flex",
    flexDirection: "column",
    width: "33.3%",
    alignItems: "center",
    margin: "0.4rem",
    justifyContent: "center",
  },
};

export default TeamMember;
