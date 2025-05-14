export interface Request {
  id: number;
  type: string;
  status: 'Confirmed' | 'Pending' | 'Rejected' | 'Completed' | 'Canceled';
  trip: string;
  passenger: string;
  message: string;
  sentDate: string;
  viewComments: boolean;
  requestCount?: number;
}

export interface Comment {
  id: number;
  requestId: number;
  text: string;
  rating: number;
  author: string;
  createdAt: string;
}