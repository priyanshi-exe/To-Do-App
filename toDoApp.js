let arr = [];
let str = "hello";
while (str != "quit") {
    str = prompt("What do you want to do next?");
    if (str == 'add') {
        let word = prompt("What do you want to add?");
        if (arr.includes(word)) {
            console.log(word + " already on the list!");
        }
        else {
            arr.push(word);
            console.log(word + " added to the list!");
        }
    }
    else if (str == 'list') {
        console.log("*********");
        console.log("List:-");
        for (words of arr) {
            console.log(arr.indexOf(words) + ": " + words);
        }
        console.log("*********");
    }
    else if (str == 'delete') {
        let word = prompt("What do you want to delete?");
        if (arr.includes(word)) {
            let n = arr.indexOf(word);
            let brr = arr.slice(0, n);
            for (words of arr.slice(n + 1)) {
                brr.push(words);
            }
            arr = brr;
            console.log(word + " deleted from the list!");
        }
        else {
            console.log(word + " not found on the list!");
        }
    }
}
console.log("OK!quit the app");