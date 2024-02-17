function order_sandwich(...items: string[]): void {
    console.log(`Ordering a sandwich with the following items: ${items.join(", ")}`);
}

order_sandwich("egg", "cheese", "tomato"); 
order_sandwich("chicken", "bbq"); 
order_sandwich("butter", "jam", "bread", "banana"); 


function order_sandwich1(items: string[]): void {
    items.forEach(item => console.log(item));
    console.log("Ordering a sandwich with the following items: ");
    items.forEach(item => console.log(item));
}

order_sandwich1(["egg", "cheese", "tomato"]); 
order_sandwich1(["chicken", "bbq"]); 
order_sandwich1(["butter", "jam", "bread", "banana"]);



let sandwichItems = ["egg", "cheese", "tomato"];

function order_sandwich2(items: string[]): void {
    items.forEach(item => console.log(item));
    console.log("Ordering a sandwich with the following items: ");
    items.forEach(item => console.log(item));
}

order_sandwich2([...sandwichItems]); 