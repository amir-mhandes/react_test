import { useState, useEffect } from "react"
import Table from "./components/Table"
import Form from "./components/Form"

const App = () => {
  const [student, setStudent] = useState({
    first_name: '',
    last_name: ''
  })
  const [students, setStudents] = useState([])
  const [edit, setEdit]= useState(-1)

  useEffect(() => {
    if(edit === -1){
      setStudent({
        first_name: '',
        last_name: ''
      })
    } else {
      setStudent(students[edit])
    }
  }, [edit])

  const handleClick = () => {
    if(edit === -1){
      setStudents(old => ([
        ...old,
        student
      ]))
      setStudent({
        first_name: '',
        last_name: ''
      })
    } else {
      setStudents(old => {
        old[edit] = student
        return [...old]
      })
      setEdit(-1)
    }
  }

  const handleDelete = (idx) => {
    setStudents(old => old.filter((_, index) => index !== idx))
  }

  const handleChange = e => {
    setStudent(old => {

      old[e.target.name] = e.target.value
      return {...old}
    })

  }

  return(
    <>
      <Form 
        student= {student}
        handleChange= {handleChange}
        handleClick= {handleClick}
        edit= {edit}
      />
      <Table 
        students= {students}
        setEdit= {setEdit}
        handleDelete= {handleDelete}
      />
    </>
  )
}

export default App