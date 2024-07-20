// script.js

class Block {
  constructor(index, timestamp, data, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return (
      this.index +
      this.previousHash +
      this.timestamp +
      JSON.stringify(this.data)
    ).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, new Date().toISOString(), "Genesis Block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

const myBlockchain = new Blockchain();

function addBlock() {
  const data = document.getElementById("data").value;
  if (data === "") {
    alert("Please enter some data for the block.");
    return;
  }
  const newBlock = new Block(
    myBlockchain.chain.length,
    new Date().toISOString(),
    data
  );
  myBlockchain.addBlock(newBlock);
  displayBlockchain();
  document.getElementById("data").value = "";
}

function displayBlockchain() {
  const chainElement = document.getElementById("chain");
  chainElement.innerHTML = "";

  myBlockchain.chain.forEach((block) => {
    const blockElement = document.createElement("div");
    blockElement.classList.add("block");

    const indexElement = document.createElement("p");
    indexElement.innerText = `Index: ${block.index}`;
    blockElement.appendChild(indexElement);

    const timestampElement = document.createElement("p");
    timestampElement.innerText = `Timestamp: ${block.timestamp}`;
    blockElement.appendChild(timestampElement);

    const dataElement = document.createElement("p");
    dataElement.classList.add("block-data");
    dataElement.innerText = `Data: ${block.data}`;
    blockElement.appendChild(dataElement);

    const hashElement = document.createElement("p");
    hashElement.innerText = `Hash: ${block.hash}`;
    blockElement.appendChild(hashElement);

    const previousHashElement = document.createElement("p");
    previousHashElement.innerText = `Previous Hash: ${block.previousHash}`;
    blockElement.appendChild(previousHashElement);

    chainElement.appendChild(blockElement);
  });
}

displayBlockchain();
