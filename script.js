let paragraphs = document.querySelectorAll('*');
for (const paragraph of paragraphs) {
  for (const className of paragraph.classList) {
    if (className.includes('fontsize-')){
      let set=className.replace('fontSize-','');
      paragraph.style.fontSize=set+"px";}
    if (className.includes('padding-')){
      let set=className.replace('padding-','');
      paragraph.style.padding=set+"px";}
    if (className.includes('margin-')){
      let set=className.replace('margin-','');
      paragraph.style.margin=set+"px";}
    if (className.includes('backgroundColor-')){
      let set=className.replace('backgroundColor-','');
      paragraph.style.backgroundColor=set;}
    if (className.includes('color-')) {
    let set=className.replace('color-','');
    paragraph.style.color = set;}
  } 
}  
 
