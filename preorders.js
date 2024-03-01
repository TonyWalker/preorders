//I think using JS to count the number of preorders is not efficient and appropriate.
// Because the calculation of topologies for large values of N can be costly in terms
// of computing resources. In contrast, OEIS is a trusted database containing thousands
// of sequences reviewed and approved by experts. Therefore, you can be sure of the
// reliability and correctness of the data. Using OEIS to obtain topology values is a
// more straightforward solution than implementing your algorithm to calculate them.

//...A000798, A001035, A001930, A000112
const sequence = 'A000798';
const url = `https://oeis.org/search?q=${sequence}&fmt=json`;
//0<=N<~18
const N = 10;

const fetchData = async (sequence) => {
  const url = `https://oeis.org/search?q=${sequence}&fmt=json`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results[0].data.split(',').map(Number);
  } catch (error) {
    console.error('Error:', error);
  }
}

const run = async (N, sequence) => {
  const list = await fetchData(sequence);
  console.log('Preorders from zero to N is: ', list.slice(0, N));
}

run(N, sequence);

