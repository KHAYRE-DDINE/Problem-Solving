const lk = (n) =>
    (n > 0 ? ' ' : ' ') + n.toString(2).replace(/[-1]/g, '\t').replace(/0/g, ' ') + '\n'


console.log((2004).toString(2));
