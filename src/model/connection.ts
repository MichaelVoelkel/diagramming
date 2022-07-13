import Entity from './entity'

export default class Connection {
    public constructor(
        public from: Entity,
        public to: Entity,
        public label: string) {
    }
}