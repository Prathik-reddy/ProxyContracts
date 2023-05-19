const {expect}  = require("chai");
const {ethers,upgrades} = require("hardhat");
let Box;
let box;

describe("test box proxy functionality", function () {
    beforeEach(async function () {
        Box = await ethers.getContractFactory("Box");//implementation contract
        box = await upgrades.deployProxy(Box,[10],{initializer:"store"});//proxy contract
    })

    it("retrieve a value previously stored value",async function () {
        expect((await box.retrieve()).toString()).to.equal("10");
    })
    
})