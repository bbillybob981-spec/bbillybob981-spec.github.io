let paragraphs = document.querySelectorAll('p');
for (const paragraph of paragraphs) {
  for (const className of paragraph.classList) {
    paragraph.style.color = className;
  }
}
