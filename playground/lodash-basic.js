const _ = require('lodash')

const user_1 = {
    name: 'Nguyen Van A',
    age: 30,
    education: {
        universitiy:"DH Van Lang"
    },
    jobs: [
        {
            title: "teacher",
            type: "fulltime"
        },
                {
            title: "dev",
            type: "partime"
        }
    ]
}

const user_2 = {
    name: 'Tran Van B',
    age: 20,
    education: {
        universitiy:"DH Van Lang"
    }
}

const users = [user_1, user_2]

// ko dùng lodash
// users.forEach(user => {
//     user.job && user.job.length > 0
//         ? console.log(user.jobs[0].title) : console.log(null)
// })

// Lodash Get
// users.forEach(user => {
//    console.log(_.get(user,"jobs[0].title","No job"))
// })

// Lodash Set

// Lodash Chain 
const url = 'https://cybersoft.edu.vn/courses/1/chapters/2'

// without chain
// const parseUrl = url.split("/")
// const courseIndex = url.split('/').indexOf("courses")
// const courseIdIndex = courseIndex + 1
// console.log("Course id :", parseUrl[courseIdIndex])

// chain
const getObjectId = (type, ) => {
   return _.chain(url)
    .split('/') // array
    .indexOf(type) // index của course
    .thru(value => value + 1) // index của courseId
    .thru(value => { // courseId cần tìm
            return _.chain(url)
                .split('/')
                .get(value)
                .value()
    })    
    .value()
}


console.log("Course id :", getObjectId('courses'))