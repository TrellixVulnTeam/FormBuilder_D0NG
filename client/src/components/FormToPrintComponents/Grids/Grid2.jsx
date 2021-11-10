
export const Grid2 = ({ title, items }) => {

    return (
        <>
            <br></br>
            <p>
                <strong>
                    {title}
                </strong>
            </p>
            <br></br>
            <div className="m2-6_grid-container-studies">
                {items.map(item => <div className="m2-6_grid-item-studies">{item}</div>)}
            </div>
        </>
    );
}


export const Grid3 = ({ title, members }) => {

    return (
        <>
            <br></br>
            <h3>{title}</h3>
            <br></br>
            <div className="m2-8_grid-container">
                <div
                    className="m2-8_grid-item"
                    style={{
                        backgroundColor: "rgb(178,204,243)",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                    }}
                >
                    Name
                </div>
                <div
                    className="m2-8_grid-item"
                    style={{
                        backgroundColor: "rgb(178,204,243)",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                    }}
                >
                    Position
                </div>
                {members.map((e, index) => (
                    <div className="m2-8_grid-item">{e}</div>
                ))}
            </div>
            <br></br>
        </>
    );
}

export const GridPlugins = ({ plugins }) => {

    const sumCosts1 = plugins.reduce((acum, obj) => acum + (typeof (obj.cost1) === 'string' ? 0 : obj.cost1), 0);
    const sumCosts2 = plugins.reduce((acum, obj) => acum + (typeof (obj.cost2) === 'string' ? 0 : obj.cost2), 0)

    return (
        <>
            <br />
            <div className="m2-8b_grid-container">
                <div
                    className="m2-8_grid-item"
                    style={{
                        backgroundColor: "rgb(178,204,243)",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                    }}
                >
                    PLUGIN
                </div>
                <div
                    className="m2-8_grid-item"
                    style={{
                        backgroundColor: "rgb(178,204,243)",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                    }}
                >
                    YEARLY COST*
                </div>
                {plugins.map((e, index) => (
                    <>
                        <div className="m2-8_grid-item" key={index}>{e.name}</div>
                        <div className="m2-8_grid-item" >{e.cost1}.00 {e.cost2 !== "" ? `  //~ $ ${e.cost2}.00 CAD` : ""}</div>
                    </>
                ))}
                <div className="m2-8_grid-item"><strong> TOTAL / YEAR </strong></div>
                <div className="m2-8_grid-item">{sumCosts1}.00 //~ {sumCosts2}</div>
            </div>
        </>
    );
}


export const Grid5 = ({ title, items }) => {

    return (
        <>
            <br></br>
            <p>
                <strong>
                    {title}
                </strong>
            </p>
            <br></br>
            <div className="m5-0_grid-container" >
                {items.map(item => <div className="m5-0_grid-item">{item}</div>)}
            </div>
            <br></br>
        </>
    )

}


export const Grid6 = ({ phase, title, items }) => {
    let className
    switch (phase) {
        case 3:
            className = " phase-iii"
            break;
        case 4:
            className = " phase-iv"
            break;
        case 5:
            className = " phase-v"
            break;
        case 6:
            className = " phase-vi"
            break;
        default:
            className = "";

    }
    console.log("m5-1_grid-container" + className)

    return (
        <>
            <br></br>
            <p>
                <strong>
                    {title}
                </strong>
            </p>
            <br></br>
            <div className={"m5-1_grid-container" + className}>
                {items.map(item => <div className="m5-1_grid-item">{item}</div>)}
            </div>
            <br></br>
        </>
    )
}