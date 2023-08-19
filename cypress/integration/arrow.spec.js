it('arrow Function', function() {
    /*function soma(a, b) {
      return a + b;
    }*/
  
    /*
    const soma = function(a,b) {
        return a + b
    }
    */

    /*
    const soma = (a, b) => {
        return a + b;
    }
    */

    // const soma = (a, b) => a + b;

    // const soma = a => a + a;

    const soma = () => 5 + 5;

    console.log(soma(1, 4));
  });

// Functions dão o contexto
it('função teste', function() {
    console.log("Function", this)
})

// Arrows são mais enxutas
it('arrow teste', () => {
    console.log("Arrow", this)
})
