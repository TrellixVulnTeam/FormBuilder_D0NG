
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
                {items.map((item, i) => <div key={"grid2" + i} className="m2-6_grid-item-studies">{item}</div>)}
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
                    <div className="m2-8_grid-item" key={"grid3" + index}>{e}</div>
                ))}
            </div>
            <br></br>
        </>
    );
}

export const GridPlugins = ({ plugins, title1, title2 }) => {

    const sumCosts1 = plugins.reduce((acum, obj) => acum + (typeof (obj.cost1) === 'string' ? 0 : obj.cost1), 0);
    const sumCosts2 = plugins.reduce((acum, obj) => acum + (typeof (obj.cost2) === 'string' ? 0 : obj.cost2), 0)

    return (
        <div key={title1}>
            <br />
            <div key="A" className="m2-8b_grid-container">
                <div key="option1"
                    className="m2-8_grid-item"
                    style={{
                        backgroundColor: "rgb(178,204,243)",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                    }}
                >
                    {title1}
                </div>
                <div key="option2"
                    className="m2-8_grid-item"
                    style={{
                        backgroundColor: "rgb(178,204,243)",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                    }}
                >
                    {title2}
                </div>
                {plugins.map((e, index) => (
                    <>
                        <div className="m2-8_grid-item" key={"plugA" + index}>{e.name}</div>
                        <div className="m2-8_grid-item" key={"pluginsB" + index}>{e.cost1}.00 {e.cost2 !== "" ? `  //~ $ ${e.cost2}.00 CAD` : ""}</div>
                    </>
                ))}
                <div className="m2-8_grid-item" key="total"><strong> TOTAL / YEAR </strong></div>
                <div className="m2-8_grid-item" key="nmbTotal">{sumCosts1}.00 //~ {sumCosts2}</div>
            </div>
        </div >
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
                {items.map((item, i) => <div key={"grid5" + i} className="m5-0_grid-item">{item}</div>)}
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
                {items.map((item, i) => <div key={"grid6" + i} className="m5-1_grid-item">{item}</div>)}
            </div>
            <br></br>
        </>
    )
}