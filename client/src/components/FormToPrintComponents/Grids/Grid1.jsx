export const Grid1 = ({ title, skills }) => {

    return (
        <>
            <p>
                <strong>{title}</strong>
            </p>
            <br></br>
            <div className="m2-4_grid-container">
                {skills.map((skill, i) => <div className="m2-4_grid-item" key={i}>{skill}</div>)}
            </div>
            <br></br>
        </>
    );
}