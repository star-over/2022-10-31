const makeAnAnswer = () => {
    const i = 20;
    const j = 2;
    const answer = i * 2 + j;
    const queston = "Answer to the Ultimate Question of Life, The Universe, and Everything";

    return `${queston} is ${answer}.`;
};

console.log(makeAnAnswer());
