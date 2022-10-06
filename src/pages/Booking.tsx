import { RunnersState } from "../context/Context"


const Booking = () => {
  const { runners } = RunnersState()
  return (
    <div>Booking</div>
  )
}

export default Booking