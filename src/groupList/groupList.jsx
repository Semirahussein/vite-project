import"./GroupList.css";
function GroupList(){
        const items = [
            'Samirawit Osman Worku',
            'Saron Abebe Demisu',
            'Sefina Kamile Abrar ',
            'Semira  Hussein Aman',
            'Senait Mengesha Yayo ',
            'Tsion Getachew',
            'Wondwosen Asegid',
            'Yabets Alelign Tiruneh  ',
            'Yishak tesfaye',
        ];

        items.map(item => <li>{items}</li>) 
        return(
        <>
        <h1>Group Member List</h1>
       <ul className="Group-List">
{items.map((item) => (
    <li key={item}>{item}</li>
))}
    </ul>
    </>
    )
}

export default GroupList;