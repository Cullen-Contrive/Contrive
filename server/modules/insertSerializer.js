function insertSerializer(array) {	
  let pgTemplateNum = 1;
  let serialInsert = '';

  for (let i = 0; i < array.length; i++) {
    if (array.length - 1 === i ) {
      pgTemplateNum ++;

      serialInsert += `($1 , $${pgTemplateNum});`;
    } else {
      pgTemplateNum ++;

      serialInsert += `($1 , $${pgTemplateNum}), `;
    }    
  } // end for
  return serialInsert;
} // end insertSerializer

module.exports = insertSerializer;