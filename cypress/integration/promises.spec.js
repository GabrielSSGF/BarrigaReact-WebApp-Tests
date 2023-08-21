it('sem testes, ainda', () => { })

// const getSomething = () => 10;

// Sem callback
/*
const getSomething = () => {
    setTimeout(() => {
        console.log('respondendo...')
        return 11;
    }, 1000)
} */

// Usando callback
/*
const getSomething = callback => {
    setTimeout(() => {
        callback(12);
    }, 1000)
} */

// Usando promises

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13);
        }, 1000)
    })
}

// Sync without calllback
/*
const system = () => {
    console.log('init');
    const something = getSomething();
    console.log(`Something is ${something}`);
    console.log('Something is ' + something);
    console.log('end');
} */

// Sync
/* 
const system = () => {
    console.log('init');
 
    // Assíncrono callback
    /*
    getSomething(something => console.log(`Something assíncrono is ${something}`));
    console.log('end'); */

    // Síncrono callback
    /*
    getSomething(something => { 
        console.log(`Something síncrono is ${something}`);
        console.log('end');
    }) 

    // Sync Promise
    const promise = getSomething();
    promise.then(something => {
        console.log(`Something is ${something}`);
    });
    console.log('end');
} */

// Async
const system = async () => {
    console.log('init');
    const something = await getSomething();
    console.log(`Something is ${something}`);
    console.log('end')
}

system();