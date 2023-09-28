/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?//array
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
let m=1;
const NFT_num=[];
function mintNFT (_name,_laptopSize,_laptopColor,_laptopRam,_laptopStorage,_laptopPrice) {
    const nftObj={
        "Name" : _name,
        "Laptop Size" : _laptopSize,
        "Laptop Color" : _laptopColor,
        "Laptop Ram" : _laptopRam,
        "Laptop Storage" :_laptopStorage,
        "Laptop Price" : _laptopPrice
    }
    NFT_num.push(nftObj);
    console.log("\nMinted["+m+"]: "  +_name);
    m++;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFT_num.length; i++) {
        console.log("\nID: \t"+(i+1));
        console.log("Name: \t"+NFT_num[i].Name);
        console.log("Size: \t"+NFT_num[i]["Laptop Size"]);
        console.log("Color: \t"+NFT_num[i]["Laptop Color"]);
        console.log("Ram: \t"+NFT_num[i]["Laptop Ram"]);
        console.log("Storage: "+NFT_num[i]["Laptop Storage"]);

    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal number of NFT's that we have minted = "+NFT_num.length);
}

// call your functions below this line
mintNFT("Apple MacBook Air(M2)",13.6,"Grey","8GB","256GB","$1199");
mintNFT("Asus Zenbook Pro Duo 14",14.5,"Black","32GB","1TB","$2000");
mintNFT("Asus ROG Zephyrus G14",14.5,"White","8GB","1TB","$1000");
mintNFT("Dell XPS 13",13.4,"Green","16GB","512GB","$1349");
mintNFT("HP Spectre x360 14",13.5,"Gold","16GB","1TB","$1550");
listNFTs();
getTotalSupply();
