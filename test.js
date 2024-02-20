// const numbers = [1,2,3,4,5,6,7,8]
// const result = numbers.reduce((acc, item)=>{
//     console.log(acc);
//     return acc + item
// },0)
// console.log( "Final result=> ",result);


const adminPaths2 = [
    {
      name: "Dashboard",
      path: "admin-dashboard",
      element: "ADMIN_DASHBOARD"
    },
    {
      name: "User Management",
      children: [
        {
          name: "Create Admin",
          path: "create-admin",
          element: "CREATE_ADMIN"
        },
        {
          name: "Create Faculty",
          path: "create-faculty",
          element: "CREATE_FACULTY"
        },
        {
          name: "Create Student",
          path: "create-student",
          element: "CREATE_STUDENT"
        }
      ]
    }
  ]

//   const result = adminPaths2.reduce((acc, item)=>{
//     acc.push(item)
//     return acc
//   },[])

//   console.log(result);


const result2 = adminPaths2.reduce((acc, item)=>{
    if(item.path && item.element){
        acc.push({
            path: item.path,
            element: item.element
        })
    }
    if(item.children){
        item.children.forEach(child=>{
            acc.push({
                path: child.path,
                element: child.element
            })
        })
    }
    return acc
}, [])

console.log(result2);