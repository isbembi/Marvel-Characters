const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img
        src={character.image}
        alt={character.name}
        className="character-image"
      />
      <h3>{character.name}</h3>
      <p>Species: {character.species}</p>
      <p>Affiliation: {character.affiliation}</p>
    </div>
  );
};

export default CharacterCard;
