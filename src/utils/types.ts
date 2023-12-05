export interface ICourse {
  courseTitle: string;
  category: string;
  description: string;
  advisor: IInstructor;
  time: string;
  lectures: string;
  videos: any;
  seats: number;
  image: string;
}

export interface IBook {
  title: string;
  writer: string;
  price: number;
  desc: string;
  rating: number;
  image: string;
}
export interface IEvent {
  eventTitle: string;
  speaker: string;
  date: string;
  month: string;
  StartTime: string;
  EndTime: string;
  detail: string;
  image: string;
}
export interface IInstructor {
  name: string;
  role: string;
  vision: string;
  image: string;
}
