const options=  async()=>{
    let x =document.getElementById('input').value
    const option={
            method: "POST",
            headers:
            {
                "Content-type":"application/json"
            },

        body: JSON.stringify({
            title: x,
            Mentalhealth:mental(),
            Dumbness:mental(),
        }),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts',option)
    let r = await p.json()
    console.log(r)
    console.log('step2.1')
    return r
    

}

const mainfunc = async()=>{
    console.log('step2.1')
    let todo= await options()
    console.log('step2,2')
    console.log(todo)
    const testArray = Object.values(todo)
    document.getElementById('div').style.display="none"
    document.getElementById('div1').style.display="block"
    document.getElementById('dav').innerHTML=`${testArray[0]}`
    document.getElementById('range1').value=testArray[1]
    document.getElementById('span1').innerHTML=`${testArray[1]}`
    document.getElementById('range2').value=testArray[2]
    document.getElementById('span2').innerHTML=`${testArray[2]}`
    console.log('step4')
    return testArray
    
 }




function mental(){
  let x =  Math.floor(Math.random(1)*100);
  return x
 }



const prt =()=>{
    console.log('step1')

    setTimeout(mainfunc(),9000)
    console.log('step2')
    
}


document.getElementById('button').onclick=prt





