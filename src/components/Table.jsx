
const Table= props => {
  const {
    students = [],
    setEdit,
    handleDelete
  } = props
  
  return(
    <div>
      <table>
        <tbody>
          <tr>
            <td>id</td>
            <td>first name</td>
            <td>LAST NAME</td>
            <td>Actions</td>
          </tr>
          {students.map((val, idx) =>(
            <tr key={idx}>
              <td>{idx}</td>
              <td>{val.first_name}</td>
              <td>{val.last_name}</td>
              <td>
                <button
                  onClick={() => {
                    setEdit(idx)
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    handleDelete(idx)
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table