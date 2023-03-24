export interface GroupChat {
  _id: string;
  groupName: string;
  groupDescription?: string;
  groupPhoto?: string;
  participants: Participant[];
  creator: string;
  typingUsers: string[];
  messages: Message[];
  media: string[];
  lastActive: Date;
}

export interface Participant {
  _id: string;
  isAdmin: boolean;
}

export interface Message {
  _id: string;
  text: string;
  sender: string;
  timestamp: Date;
  status: string;
  readBy: string[];
}

export interface Media {
  _id: string;
  sender: string;
  privateChatId?: string;
  groupChatId?: string;
  fileName: string;
  fileSize: string;
  fileUrl: string;
  status: string;
}
