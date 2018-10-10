const Player    =   require('../models/Player')

module.exports  =   {
    get:(params)=>{
        return new Promise((resolve,reject)=>{
            Player.find(params)
            .then(data=>{
                resolve(data)
            })
            .catch(err=>{
                reject(err)
            })
        })
    },
    getById:(id)=>{
        return new Promise((resolve,reject)=>{
            Player.findById(id)
            .then(data=>{
                resolve(data)
            })
            .catch(err=>{
                reject(new Error('Player '+id+' not found.'))
            })
        })
    },
    post:(params)=>{
        return new Promise((resolve,reject)=>{
            Player.create(params)
            .then(data=>{
                resolve(data)
            })
            .catch(err=>{
                reject(err)
            })
        })
    },
    put:(id,params)=>{
        return new Promise((resolve,reject)=>{
            Player.findByIdAndUpdate(id,params,{new:true})
            .then(data=>{
                resolve(data)
            })
            .catch(err=>{
                reject(err)
            })
        })
    },
    delete:(id)=>{
        return new Promise((resolve,reject)=>{
            Player.findByIdAndRemove(id)
            .then(()=>{
                resolve({
                    id:id
                })
            })
            .catch(err=>{
                reject(err)
            })
        })
    }
}