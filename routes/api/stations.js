// const { Station } = require('../../models/Station')
// const { json } = require('express')

// // 3 tham số cơ bản của middleware
// const getStations = (req,res,next) => {
//     Station.find()
//         .then(stations => {
//         res.status(200).json(stations)
//         })
//     .catch(err => res.json(err))
// }

// const getStationById = (req, res, next) => {
//     const {id} = req.params // truyền params vào
//     Station.findById(id)
//         .then(station => res.status(200).json(station))
//         .catch(err => res.json(err))
// }

// // mỗi middlewares cần next hoặc res
// const postStations = (req,res,next) => {
//     const { name, address, province } = req.body;

//     const newStation = new Station({
//         name,address,province
//     })
//     // save db
//     newStation.save()
//         .then(station => {
//         res.status(201).json(station)
//         })
//     .catch(err => res.json(err))
// }

// // replace all
// const putStationById = (req, res, next) => {
//     const { id } = req.params
//     Station.findById(id)
//         .then(station => {
//             if (!station) 
//                 return Promise.reject({
//                     status: 404,
//                     message: "Station not found"
//                 })
//             // const { name, address, province } = req.body;
//             // station.name = name;
//             // station.addres = address;
//             // station.province = province;
            
//             const keys = ['name', 'address', 'province'];
//             keys.forEach((key) => {
//                 station[key] = req.body[key]
//             });

//             return station.save()
//         })
//         .then(station => res.status(200).json(station))
//         .catch(err => res.json(err))
// }

// // update only one 
// const patchStationById = async (req, res, next) => {
//     const { id } = req.params

//     // Promise Method :
//     Station.findById(id)
//         .then(station => {
//             if (!station) 
//                 return Promise.reject({
//                     status: 404,
//                     message: "Station not found"
//                 })
//             const { name, province, address } = req.body;
//             // station.name = name ? name : station.name;
//             // station.province = province ? province : station.province;
//             // station.address = address ? address: station.address;
            
//             // Không cần kiểm tra sự tồn tại 
//             Object.keys(req.body).forEach(key => {
//                 station[key] = req.body[key]
//             })
//             return station.save()
//         })
//         .then(station => res.status(200).json(station))
//         .catch(err => res.json(err))
    
//     // Async await method :
//     // const station = await Station.findById(id)
//     // try {
//     //     if (!station) {
//     //         await Promise.reject({
//     //             status: 404,
//     //             message: "Station not found"
//     //         });
//     //     }
//     //     const { name } = await req.body;
//     //     station.name = name ? name: station.name;
//     //     const statusCode = await station.save()
//     //     res.status(200).json(statusCode)
//     // } catch (err) {
//     //    // Compusory exist cause above reject is json
//     //    // And res when getting error
//     //     res.json(err)
//     //     console.error(err) 
//     // }
// }


// // delete

// const deleteStationById = (req, res, next) => {
//     const { id } = req.params

//     Station.findById(id)
//         .then(station => {
//             if (!station) 
//                 return Promise.reject({
//                     status: 404,
//                     message: "Station not found"
//                 })
            
//             // Station not station
//             return Promise.all([
//                 Station.deleteOne({ _id: id }),
//                 station
//             ])
//             // return Station.deleteOne({_id: id})
//         })
//         .then(result => res.status(200).json(result[1]))
//         .catch(err => res.json(err))
// }

// module.exports = {
//     getStations,
//     getStationById,
//     postStations,
//     putStationById,
//     patchStationById,
//     deleteStationById
// }