
import { ethers } from 'hardhat';
const colors = require('colors/safe');

import { MyToken__factory } from '../typechain';

async function main() {
    const [deployer] = await ethers.getSigners();

    const myToken = await new MyToken__factory(deployer).deploy(deployer.address)
    await myToken.deployed()
    console.log(`${colors.cyan('MyToken Address')}: ${colors.yellow(myToken?.address)}`)
}


main().catch((error: Error) => {
    console.error(error)
    process.exitCode = 1
})


