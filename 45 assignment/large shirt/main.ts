function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`A ${size} t-shirt with the message "${message}" would be a great choice.`);
}

make_shirt(); 
make_shirt("medium"); 
make_shirt("small", "TypeScript is the best!"); 