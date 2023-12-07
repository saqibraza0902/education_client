interface IVideo {
  _id: string;
  title: string;
  url: string;
  duration: number;
}
export interface ICourse {
  _id: string;
  title: string;
  category: string;
  description: string;
  advisor: IInstructor;
  time: string;
  price: number;
  lectures: string;
  videos: IVideo[];
  seats: number;
  image: string;
}

export interface IBook {
  _id: string;
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
  _id: string;
  name: string;
  role: string;
  vision: string;
  image: string;
}
export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: number;
  dob: string;
}
