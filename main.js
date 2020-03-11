function partialKeys (obj) {
  let keys = Object.keys(obj).sort();
  console.log(keys);
  const obj1 = new Proxy(obj, {
    get: function(target, name, receiver) {
        if (!(name in target)) {
            let regEx = new RegExp('^' + name)
            let key = keys.find(element => regEx.test(element))
            return key === undefined ? undefined : Reflect.get(target, key, receiver);
        }
        return Reflect.get(target, name, receiver);
    }
});
return obj1;
}
