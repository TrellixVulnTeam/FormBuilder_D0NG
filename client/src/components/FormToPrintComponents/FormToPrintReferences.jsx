
export const PrintReference = ({ references }) => {

    console.log(references)
    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {references.length !== 0 ? references.map((e, i) =>
                i <= 6 ? (
                    <Reference
                        name={e.name}
                        page={e.page}
                        referenceName={e.referenceName}
                        phone={e.phone}
                        email={e.email}
                    />
                ) : (
                    () => alert("Max of references 6")
                )
            ) : ""}
        </div>);

}

const Reference = (props) => {
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