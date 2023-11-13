import { CalledRepository } from "../../domain/called/repository/called/called-repository"
import { CalledEntity } from "../../domain/called/entity/called/called-entity"

type Input = {
    status: string
}

export class OpenCalled {
    calledRepository: CalledRepository

    construtor(calledRepository: CalledRepository) {
        this.calledRepository = calledRepository
    }

    async execute(input: Input) {
        const calledAll = this.calledRepository.findOneId(input.status);
        return calledAll
    }
}