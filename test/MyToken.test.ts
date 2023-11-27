import '@nomiclabs/hardhat-ethers'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ethers } from 'hardhat';
const test_util = require('../scripts/util');
const colors = require('colors');

import { MyToken, MyToken__factory } from '../typechain'


//available functions
describe("Token contract", async () => {
    let deployer: SignerWithAddress;
    let bob: SignerWithAddress;
    let alice: SignerWithAddress;
    let myToken: MyToken;

    it("1. Get Signer", async () => {
        const signers = await ethers.getSigners();

        deployer = signers[0];
        bob = signers[1];
        alice = signers[2];

        console.log(`${colors.cyan('Deployer Address')}: ${colors.yellow(deployer?.address)}`)
        console.log(`${colors.cyan('Bob Address')}: ${colors.yellow(bob?.address)}`)
        console.log(`${colors.cyan('Alice Address')}: ${colors.yellow(alice?.address)}`)
    });

    it("2. Deploy contracts", async () => {
        myToken = await new MyToken__factory().deploy(deployer.address)
        await myToken.deployed()
        console.log(`${colors.cyan('MyToken Address')}: ${colors.yellow(myToken.target)}`)
    });
});