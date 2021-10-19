function formatingPokemonId(id) {
  return `000${id}`.slice(-'000'.length)
}

export {
  formatingPokemonId
};
