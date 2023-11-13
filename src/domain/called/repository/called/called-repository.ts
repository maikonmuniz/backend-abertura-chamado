import { CalledEntity } from "../../entity/called/called-entity"

export interface CalledRepository {
    saveCalled(input: CalledEntity): Promise<void>
    findOneId(input: number): Promise<CalledEntity>;
    findOneId(input: string): Promise<CalledEntity[]>
}
