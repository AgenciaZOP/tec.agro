import { useContext } from "react"
import ProducersContext from "../contexts/producerContext"
import { useIo } from "./useIo"

export const useProducers = () => {
    const io = useIo()
    const producersContext = useContext(ProducersContext)

    const newProducer = (data: Producer & { file: File }) => {
        console.log(data)

        producersContext.setLoading(true)
        io.emit("producer:new", data)
    }

    return { ...producersContext, new: newProducer }
}
