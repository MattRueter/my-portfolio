import '../styles/processCard.scss';

function ProcessCard ({title, description, bullets }) {
  return(
    <div className='processCard'>
      <p>{title}</p>
      <p>{description}</p>
      {bullets && (
        <ul>
          {bullets.map((bullet, index) =>(
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  )
};

export default ProcessCard;