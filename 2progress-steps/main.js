const lines = document.querySelectorAll('.rline')
const circles = document.querySelectorAll('.circle')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

next.addEventListener('click',()=>{
    fnnext()
})
prev.addEventListener('click',()=>{
    fnprev()
})
let lines1w = lines[0].classList[1]
let lines2w = lines[1].classList[1]
let lines3w = lines[2].classList[1]

// let lines5w = lines[0].classList.contains("re")
// console.log('5这里是'+lines5w)
//
//如何拿到classname数组
// let lines4w = []
// lines[2].classList.forEach((node)=>{
//     lines4w.push(node)
// })



function fnnext(){
    if(prev.disabled === true){
        prev.disabled = false
    }

    if(lines1w === undefined){
        lines[0].classList.add('rlineactive')
        circles[1].classList.add('cactive')
        lines1w = lines[0].classList[1]
        lines2w = lines[1].classList[1]
        lines3w = lines[2].classList[1]
    } else if(lines1w != undefined && lines2w === undefined){
        lines[1].classList.add('rlineactive')
        circles[2].classList.add('cactive')
        lines1w = lines[0].classList[1]
        lines2w = lines[1].classList[1]
        lines3w = lines[2].classList[1]
    } else if (lines1w != undefined && lines2w != undefined && lines3w === undefined){
        lines[2].classList.add('rlineactive')
        circles[3].classList.add('cactive')
        next.disabled = true
        lines1w = lines[0].classList[1]
        lines2w = lines[1].classList[1]
        lines3w = lines[2].classList[1]
    }
}

function fnprev(){
    if(next.disabled === true){
        next.disabled = false
    }

    if(lines3w != undefined){
        lines[2].classList.remove('rlineactive')
        circles[3].classList.remove('cactive')
        lines1w = lines[0].classList[1]
        lines2w = lines[1].classList[1]
        lines3w = lines[2].classList[1]
    } else if(lines2w != undefined && lines3w === undefined){
        lines[1].classList.remove('rlineactive')
        circles[2].classList.remove('cactive')
        lines1w = lines[0].classList[1]
        lines2w = lines[1].classList[1]
        lines3w = lines[2].classList[1]
    } else if (lines3w === undefined && lines2w === undefined && lines1w != undefined){
        lines[0].classList.remove('rlineactive')
        circles[1].classList.remove('cactive')
        prev.disabled = true
        lines1w = lines[0].classList[1]
        lines2w = lines[1].classList[1]
        lines3w = lines[2].classList[1]
    }
}