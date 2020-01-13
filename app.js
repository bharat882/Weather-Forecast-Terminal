const request= require('request')
const geocode=require('./utilis/geocode')
const forecast=require('./utilis/forecast')

if(!process.argv[2])
{
    return console.log('Enter a location!')
}

    
const address=process.argv[2]

geocode(address,(error, data)=>
{
    if(error)
    {
      return  console.log('Error', error)
    }

        forecast(data.latitude, data.longitude, (error, fdata) => {
            if(error)
            {
                return console.log('Error', error)
            }

            console.log(data.location)
            console.log(fdata)
        })
    





})
