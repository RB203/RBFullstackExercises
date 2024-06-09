const Header = ({name}) =>(
    <h2>{name}</h2>
)

const Content = ({parts}) =>{
    const Sum = () => {
        return parts.reduce((accumulator, index)=> accumulator + index.exercises,0)
    }
    const Mapping = () => parts.map(part => <p key = {part.id}>{part.name} : {part.exercises}</p>)
    return(
        <>
            {Mapping()}
            <b>total of {Sum()} exercises</b>
        </>
    )
}

const Exploration = ({name,course}) => {
    return (
        <>
            <Header name = {course.name}/>
            <Content parts = {course.parts}/>
        </>
    )
}


const Course = ({courses}) => {
    return(
        <div>
            <h1>Web development curriculum</h1>
            <Header name = {courses.name}/>
            {courses.map(course => <Exploration key = {course.id} name = {course.name}
            course = {course}/>)}
        </div>
    )
}
  
export default Course