const btn = document.getElementById('btn')
const rotation =[
    {transform: 'rotate (0)'},
    {transform: 'rotate(360deg)'}
]

const duration ={
    duration:2000,
    iterations:1
}

const img =document.getElementById('img')


function unlockBtn(){
    btn.disabled=false
    btn.style.cursor='pointer'


}
const fetchAdvice = async()=>{
    const res = await fetch ('https://api.adviceslip.com/advice')
    const data = await res.json()

    console.log(data)

    document.getElementById('adviceID').innerHTML=`ADVICE #${data.slip.id}`
    document.getElementById('adviceText').innerHTML=`"${data.slip.advice}"`

    
}
function lockBtn(){
    btn.disabled=true
    btn.style.cursor='default'
    img.animate(rotation, duration)
    setTimeout(unlockBtn, 2000)
}
fetchAdvice()
