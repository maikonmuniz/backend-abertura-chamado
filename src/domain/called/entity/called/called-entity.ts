
export class CalledEntity {

    constructor(private readonly props: typeCalled) {
        this.props = props
        this.props['status'] = 'open'
    }

    getCalled() {
        if (this.props.status != 'treatment'){
            this.props.status = 'treatment'
        }
    }

    toJson () {
        return this.props
    }
}

type typeCalled = {
    responsibleId: string
    typeCaled: string
    description: string
    status?: string
}
