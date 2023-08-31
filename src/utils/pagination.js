
const paginateData = (items, currentPage) => {

  // items por pagina
  const ITEMS_POR_PAGE = 20

  // items de la pagina actual 
  const sliceEnd = currentPage * ITEMS_POR_PAGE
  const sliceStart =  sliceEnd - ITEMS_POR_PAGE
  const itemsCurrentPage = items.slice(sliceStart, sliceEnd)

  //ultima pagina
  const lastPages = Math.ceil(items.length / ITEMS_POR_PAGE)

  //Bloque Actual 

  const PAGES_PER_BLOCK = 5
  const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK)

  //paginas que se van a mostrar en el bloque actual 
  const pagesInCurrentBlock = [];
  const maxPages = actualBlock * PAGES_PER_BLOCK;
  const minPages = (maxPages - PAGES_PER_BLOCK) + 1;

  for (let i = minPages; i <= maxPages; i++) {
    if (i <= lastPages) {
      pagesInCurrentBlock.push(i);
    }
  }

  return {
    itemsCurrentPage,
    lastPages,
    pagesInCurrentBlock,
  };
};


export {
  paginateData
}