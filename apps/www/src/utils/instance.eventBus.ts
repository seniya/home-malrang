import mitt from 'mitt'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type EventsType = {
  showToast: string
}

const eventBus = mitt<EventsType>()

export default eventBus
