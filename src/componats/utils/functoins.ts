/**
 * 
 * @param {string} txt - the input text to be sliced
 * @param {number} [m=50] ax - the maximum length before truncation
 * @returns 
 */
export function TxtSlicer(txt:string,max:number =50){
  if(txt.length>= max){
    return `${txt.slice(0,max)} ....`
  }else{
    return txt
  }
}