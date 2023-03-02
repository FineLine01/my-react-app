function Postcard({name,jobTitle}) {
  return (
    <div className="card">
    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width: '100%'}} />
    <div className="container">
      <h4><b>{name}</b></h4>
      <p>{jobTitle}</p>
    </div>
  </div>
  );
}

export default Postcard;
