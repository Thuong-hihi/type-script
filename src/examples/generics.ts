const we18101_map = function<T>(array :T[], cb:(item:T) => T): T[] {
     let new_array :T[] = []
     for(let i of array){
        const new_value = cb(i)
        new_array.push(new_value)
     }
     return new_array
}

const a = [1,2,3]
const result = we18101_map(a,(item) =>{
    return item * item
} )
console.log(result);
