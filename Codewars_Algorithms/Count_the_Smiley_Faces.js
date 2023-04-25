const countSmileys = arr => {
    return arr.filter(item => {
      return item.match(/([:|;][-|~]?[)|D])/g);
    }).length;
  }
  
  console.log(countSmileys([':D', ':~)', ';~D', ':)']));
  console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));
  console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));