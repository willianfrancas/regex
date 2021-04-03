const telefones = `
Lista telefônica:
    - (21) 12345-6789
    - (11) 62300-2234
    - 5678-7771
    - (85) 33333-1234
    - (1) 98577-7854
`;

console.log(telefones.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g));