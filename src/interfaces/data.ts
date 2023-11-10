export interface Data {
  availableStatus: string[];
  statusStyles: StatusStyles;
  data: Datum[];
}

export interface StatusStyles {
  pending: string;
  contacted: string;
  rejected: string;
  accepted: string;
}

export interface Datum {
  comp: Comp;
  people: People[];
}

export interface Comp {
  name: string;
  status: string;
  additional: string;
}

export interface People {
  name: string;
  status: string;
  info: Info;
}

export interface Info {
  email: string;
  phone: string;
  additional: string;
}
