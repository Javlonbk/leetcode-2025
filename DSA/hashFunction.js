const myHashSet = [
    [null],
    ['Jones'],
    [null],
    ['Lisa'],
    [null],
    ['Bob'],
    [null],
    ['Siri'],
    ['Pete'],
    [null]
  ];
  
  function hashFunction(value) {
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
      sum += value.charCodeAt(i);
    }
    return sum % 10;
  }
  
  function add(value) {
    const index = hashFunction(value);
    const bucket = myHashSet[index];
  
    if (!bucket.includes(value)) {
      bucket.push(value);
    }
  }
  
  function contains(value) {
    const index = hashFunction(value);
    const bucket = myHashSet[index];
    return bucket.includes(value);
  }
  
  add('Stuart');
  
  console.log(myHashSet);
  console.log('Contains Stuart:', contains('Stuart'));
  