
const Form = props => {
  const {
    student,
    handleChange,
    handleClick,
    edit
  } = props
  
  return(
    <div>
      <div>
        <label htmlFor="first-name">First Name</label>
        <input 
          id="first-name"
          name= 'first_name'
          value={student.first_name}
          onChange={handleChange}  
        />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input 
          id="last-name"
          name="last_name"
          value={student.last_name}
          onChange={handleChange}  
        />
      </div>
      <div>
        <button
          onClick={handleClick}
        >
          {edit === -1 ? "Add" : "Edit"}
        </button>
      </div>
    </div>
  )
}

export default Form