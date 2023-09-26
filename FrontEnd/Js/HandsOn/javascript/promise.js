/*
let username = 'suranto';
let password = '1234';


const janji = new Promise((resolve, reject) => {
    let id = 1234;
    setTimeout(() => {
        if (username === 'suranto' && password === '12345') {
            resolve("akun ada, silahkan login")
        } else {
            reject('Invalid username or password')
        }
    }, 3000);
});

const handleResolve = (value) => {
    console.log(value)
}

const handleReject = (value) => {
    console.log(`${value}, silahkan hubungi admin`)

}

// janji.then(handleResolve, handleReject); // cara lama

// cara yang baik dan mudah dibaca
janji.then(handleResolve).catch(handleReject)

*/
let username = 'suranto';
let password = '1234';

const janji = new Promise((resolve, reject) => {
    let id = 1234;
    setTimeout(() => {
        if (username === 'suranto' && password === '12345') {
            resolve("akun ada, silahkan login")
        } else {
            reject('Invalid username or password')
        }
    }, 3000);
});

const login = async () => {
    try {
        const result = await janji;
        console.log(result);
    } catch (error) {
        console.log(`${error}, silahkan hubungi admin`);
    }
};

login();