type TEmittedEvent = {
  event: TAppEvent,
  data?: any
};

enum TAppEvent { }

export {
  TEmittedEvent,
  TAppEvent
};