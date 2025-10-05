const  a = 10;
const b = 20;


const tambah = (n1, n2) => {
    console.log(`Penjumlahan ${n1} + ${n2} = ${n1 + n2}`);
};

const kurang = (n1, n2) => {
    console.log(`Pengurangan ${n1} - ${n2} = ${n1 - n2}`);
};

const kali = (n1, n2) => {
    console.log(`Perkalian ${n1} x ${n2} = ${n1 * n2}`);
};

const bagi = (n1, n2) => {
    console.log(`Pembagian ${n1} / ${n2} = ${n1 / n2}`);
};

const pangkat = (n1, n2) => {
    console.log(`Perpangkatan ${n1}^${n2} = ${n1 ** n2}`);
};

const sisa = (n1, n2) => {
    console.log(`Modulus ${n1} % ${n2} = ${n1 % n2}`);
};

tambah(a, b);
kurang(a, b);
kali(a, b);
bagi(a, b);
pangkat(a, b);
sisa(a, b);