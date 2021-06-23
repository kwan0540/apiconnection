import React ,{useState, useEffect}from 'react'
import classes from './BusContent.module.css'
import Card from '../UI/Card'
import BusItem from './BusItem'
import Map from './Map'


const BusContent = (props) => {
  const [busData,setBusData] = useState([])
  const [selectedValue, setSelectedValue] = useState()
  const [uniqueBusData, setUniqueBusData] = useState([])  
  const [isLoaded,setIsLoaded] = useState(false)
  const [error,setError] = useState(null)
  const [time, setTime] = useState('')
  const [changed,setChanged] = useState(false)
  let now = new Date()
async function fetchdata () {
    setTime(now)
    setUniqueBusData([])
    try {
      const response = await fetch(props.url)
      const data = await response.json()
      if (!response.ok) {
        throw new Error('No')
      }

      const Bus = data.data.map(x => {
        return {
          key: Math.random(),
          BusEta: new Date(x.eta),
          busRoute: x.route,
        }
      })
      console.log(data)
      setIsLoaded(true)
      console.log(Bus);
      setBusData(Bus)
      setUniqueBusData(old =>[...old, Bus[0].busRoute])
      console.log(selectedValue)
      if (selectedValue === undefined) {
        setSelectedValue(Bus[0].busRoute)
      } else {
        setSelectedValue(selectedValue)
      }
    } catch (error) {
      setError(error.message)
    }
  }

    const storedata = () => {for (let i=1; i<busData.length;i++) {
      if (busData[i].busRoute !== busData[i-1].busRoute) {
          setUniqueBusData(old => [...old, busData[i].busRoute])
      }
  }}
  let selection = uniqueBusData.map (x => 
    <option value={x}>{x}</option>)

    const onChangeHandler = (event) => {
        setSelectedValue(event.target.value)
        console.log(selectedValue)
        setChanged(true)
    }



  useEffect(() => {
    fetchdata()
  },[])  
    

  useEffect(() => {
      storedata()
  }, [busData])

  let content = <p>no Found</p>

    if (isLoaded && busData.length >0) {
      console.log(busData);
      content = busData.filter(x => x.busRoute === selectedValue).map(x => 
      <BusItem busroute={x.busRoute}
      hours = {x.BusEta.getHours()}
      minutes = {x.BusEta.getMinutes()}
      remaining = {x.BusEta.getTime() - time.getTime()}/>  
      )
    }
  
  if(error) {
    content = <p>{error}</p>
  }



  return (
    <div className={classes.content}>
    <h1>天耀巴士站路線</h1>
    <Map data={busData.filter(x=> x.busRoute === selectedValue).map(x => (x.BusEta.getTime() - time.getTime()))} time={time} 
    changed={changed} value={selectedValue}/>
    <button onClick = {fetchdata}>更新</button>
    <h1>請選取你要查詢的路線</h1>
    <select className={classes.Select} onChange={onChangeHandler} value={selectedValue}>
        {selection}
    </select>
    <Card>
        <ul>
            {content}
        </ul>
    </Card>
    </div>
  )
}

export default BusContent