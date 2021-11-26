const { submit, members } = props;

const [memberInput, setMemberInput, reset] = useMembers({
    name: "",
    designation: "",
    cv: "",
    skills: "",
    selected: true
});

const [loading, setLoading] = useState(false);

const addMember = (e, member) => {
    e.preventDefault();
    submit(member);
    reset();
};

// We get the information from the api and then we put it in members array


const createArrayNotion = (arrayMembers) => {
    if (members.length === 0) {
        let array = [arrayMembers]
        array = array[0]
        let array2 = array.reduce((acum, member) => [...acum, member.person], [])
        let array3 = array2.slice()
        array3.forEach(member => {
            member.selected = false
        })
        // here i can add the selected
        submit(array3)
    }
}
//Request to obtain Team Members from Notion DB

useEffect(() => {
    console.log('renderizado de api');
    fetch("/api/teamMembers")
        .then((res) => res.json())
        .then((data) => data.teamMembers)
        .then(data => createArrayNotion(data))
        .then(setLoading(true))
}, []);


const sizeofMembers = () => {
    const selectedMembers = props.members.map(member => member.selected)
    console.log(props.members)
    return selectedMembers


}
const [array, setArray] = useState(sizeofMembers);

const changeColor = (e, index) => {
    console.log(index)
    setArray(array.map((element, i) => i - 1 === parseInt(index - 1) ? !element : element))
}

useEffect(() => {
    console.log('renderizado de array');
    console.log(array)
}, [array])


return (
    <>
        <Div flex={1}>
            <FormCard flex={1} width="70%" height="none">
                {array.map((e, i) => (
                    <Div key={i + "member"} >
                        <li key={e.name}><strong>Member:   </strong>{e.name}</li>
                        {array[i] === true ? <ClassicButton key={i} width="60%" onClick={(e) => changeColor(e, i)}>Delete Member</ClassicButton> : <ClassicButton color={true} onClick={(e) => changeColor(e, i)}>aa</ClassicButton>}
                    </Div>
                ))}
            </FormCard>
        </Div>

    </>
);