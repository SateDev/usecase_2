var CarToken = artifacts.require("CarToken");
contract('CarToken',function(accounts){
    let token;
    let res;
    const account1 = accounts[1];
    const account2 = accounts[2];
    const tokenURI = "toyota";

    it('should be able to deploy and mint  ERC721 car token',async()=>{
        token = await CarToken.new();
        res= await token.mintTo(account1,tokenURI,{from:accounts[0]});
        expect(await token.symbol()).to.equal('CAT');
        expect(await token.name()).to.equal('CarToken');
    })

    it('should return the balance of tokens in particular owner',async()=>{
        res= await token.balanceOf(account1);
        console.log('res',res)
    })
  
    it('should return owner of the tokenID',async()=>{
        res= await token.ownerOf(1);
        console.log('res',res)
        expect(res).to.equal(account1);
    })

    it('should be able to approve before transfer',async()=>{
        res = await token.getApproved(1);
        console.log('---approve',res)
    })

    it('should be able to transfer token from one address to another address',async()=>{
        res = await token.transferFrom(account1,account2,1,{from:accounts[1]});
    })

    it('should return owner of the tokenID',async()=>{
        res= await token.ownerOf(1);
        console.log('res',res)
        expect(res).to.equal(account2);
    })
 
})