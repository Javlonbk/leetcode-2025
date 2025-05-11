function defangIpaddr(address){
    return address.replaceAll(".", "[.]")
}

console.log(defangIpaddr("1.1.1.1"));

// O(n), O(n) 