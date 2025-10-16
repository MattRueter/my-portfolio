
function ProcessCard ({title, description, bullets }) {
  return(
    <>
      <p>{title}</p>
      <p>{description}</p>
      {bullets && (
        <ul>
          {bullets.map((bullet, index) =>(
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </>
  )
};

export default ProcessCard;