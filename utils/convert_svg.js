const new_str = process.argv[2].replace(/(\r\n)+/gi, '')
console.log(encodeURIComponent(new_str))
