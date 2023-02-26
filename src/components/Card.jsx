const Card = (props) => {

  const { client, children } = props;

  let greeting = '';
  if (client.country === 'de') {
    greeting = 'Hallo';
  };
    if (client.country === 'en') {
    greeting = 'Hello';
  };
    if (client.country === 'fr') {
    greeting = 'Bonjour';
  };
    if (client.country === 'es') {
    greeting = 'Hola';
  };

  let myClass = '';
  let status = '';

  if (client.isPremium === true) {
    myClass = 'premium'
    status = 'Yes'
  } else {
    myClass = 'notPremium'
    status = 'No'
  }

  return (
    <div className={`card ${myClass}`}>
      <h3>{`${greeting} `}{client.name}!</h3>
      <p>Age: {client.age}</p>
      <p>Is it a premium client? {`${status}`}</p>
    </div>
  )
}

export default Card;