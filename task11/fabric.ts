function notification(constructor: Function) {
    console.log(`Object ${constructor.name} created!`)
}

interface IObject<T> {

}
@notification
class ConcreteIObject<T> implements IObject<T> {

}

class Creator {
    public createConcreteObject<T>() {
    }
}
class ConcreteCreator extends Creator {
    public createConcreteObject<T>() {
        return new ConcreteIObject<T>();
    }
}

const concreteCreator: ConcreteCreator = new ConcreteCreator();
const concreteObject: ConcreteIObject<boolean> = concreteCreator.createConcreteObject<boolean>();