function simplifyPath(path) {
    let stack = [];
    let folders = path.split("/");

    for (const folder of folders) {
        if (folder === "..") {
            if (stack.length > 0) {
                stack.pop();
            }
        } else if (folder === "." || folder === "") {
            continue;
        } else {
            stack.push(folder);
        }

    }

    return "/" + stack.join("/");
}

console.log(simplifyPath(path = "/../"));
console.log(simplifyPath("/home/"));
console.log(simplifyPath("/home//foo/"));

// time: O(n)
// space: O(n)