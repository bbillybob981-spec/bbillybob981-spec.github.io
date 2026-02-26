let paragraphs = document.querySelectorAll('p');
for (const paragraph of paragraphs) {
  for (const className of paragraph.classList) {
    if (className.includes('color-'){
    let set=className.replace('color-','');
    paragraph.style.color = className;}
  } 
}
