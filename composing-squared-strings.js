function compose(s1, s2) {
    s1 = s1.split`\n`
    s2 = s2.split`\n`
    let arr1=[];
    let arr2=[]
    for (let i=0;i<s1[0].length;i++){
     arr1.push(s1[i].slice(0,i+1))
     arr2.unshift(s2[i].slice(0,i+1))
    }
    return arr1.map((v,i)=>v+arr2[i]).join`\n`
}
