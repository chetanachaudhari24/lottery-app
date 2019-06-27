import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);  //copy of web3 coming from metamask library(argument passed)

export default web3; //this can be imported in any file in this project
