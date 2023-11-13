import { CalledEntity } from "../../entity/called/called-entity"

export interface CalledRepository {
    saveCalled(input: CalledEntity): Promise<void>
}

type Input = {
    responsibleId: number
    typeCaled: string
    description: string
    status?: string
}