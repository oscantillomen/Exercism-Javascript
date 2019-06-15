const complement = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export const toRna = dna => {
  const dnaString = dna.split('');
  const string = dnaString.map(n => complement[n] ? complement[n] : n).join('');
  return string;
};