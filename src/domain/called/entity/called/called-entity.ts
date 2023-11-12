
export class CalledEntity {

    constructor(private readonly props: typeCalled) {
        this.props = props
        this.props.status = 'open'
    }

    getCalled() {
        if (this.props.status != 'treatment'){
            this.props.status = 'treatment'
        }
    }

}

type typeCalled = {
    responsible: string
    createAt: Date
    typeCaled: string
    description: string
    status: string
}
