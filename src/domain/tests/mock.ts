import { UniqueEntityID } from '@/core/domain'
import { EntityProps } from '@/core/domain/Entity'
import { PersisterCreator, PersisterUpdater } from '../protocols/ModelPersister'

export class PersisterCreatorSpy<T> implements PersisterCreator<T> {
  public model: T

  async create(model: T): Promise<void> {
    this.model = model
    return Promise.resolve()
  }
}

export class PersisterUpdaterSpy implements PersisterUpdater {
  public props: EntityProps
  public id: UniqueEntityID

  async update(props: EntityProps, id: UniqueEntityID): Promise<void> {
    this.props = props
    this.id = id
    return Promise.resolve()
  }
}
