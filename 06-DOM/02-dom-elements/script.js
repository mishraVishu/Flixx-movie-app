console.log(document.head)//gives head

console.log(document.documentElement)//gives whole <html> page.

console.log(document.body);//gives body

console.log(document.head.children);
console.log(document.body.children);
console.log(document.doctype);
console.log(document.URL);
console.log(document.characterSet);
console.log(document.contentType);

console.log(document.forms)//gives HTMLCollection
//console.log(document.forms[0].id); //if form has any id.
//console.log(document.forms[0].method);

console.log(document.links)
console.log(document.links[0].href='www.facebook.com');
console.log(document.links[0].id = 'my-id');
console.log(document.links[0].className = 'my-class');
console.log(document.links[0].classList);

console.log(document.images);
//console.log(document.images[0]);
//console.log(document.images[0].src);