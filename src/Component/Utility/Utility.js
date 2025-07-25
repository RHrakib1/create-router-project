const getstorejobapply = () => {
    const storapply = localStorage.getItem('storeApplyjob')
    if (storapply) {
        return JSON.parse(storapply)
    }
    return [];

}
const savestorejobapply = (id) => {
    const storejobapplication = getstorejobapply()
    const findid = storejobapplication.find(j => j == id)
    if(!findid){
        storejobapplication.push(id)
        localStorage.setItem('storeApplyjob',JSON.stringify(storejobapplication))
    }

}

export { getstorejobapply, savestorejobapply }