function Friend({friend}) {
  const border = {
    padding: "10px",
    border: "1px solid red",
    marginBottom: "10px"
  }
  const {name, email, website} = friend
  return (
    <div style={border}>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Website: {website}</p>
    </div>
  )
}

export default Friend