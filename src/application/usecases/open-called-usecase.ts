import { CalledRepository } from "../../domain/called/repository/called/called-repository"
import { CalledEntity } from "../../domain/called/entity/called/called-entity"

type Input = {
    responsibleId: string
    typeCaled: string
    description: string
    status?: string
}

export class OpenCalled {
    calledRepository: CalledRepository

    construtor(calledRepository: CalledRepository) {
        this.calledRepository = calledRepository
    }

    async execute(input: Input) {
        const calledEntity = new CalledEntity(input)
        await this.calledRepository.saveCalled(calledEntity);
    }
}