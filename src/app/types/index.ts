import { StaticImageData } from "next/image";

export type menuItems = {
  id: number;
  name: "Airtime" | "Data";
  link: string;
  isActive: boolean;
};
export interface ProgressBarProps {
  progress: number;
}
export type dataOP = {
  dataValue: string;
  dataAmount: number;
  bankOptions: {
    bankName: string;
    bankCharge: number;
    transferAmount: number;
  }[];
};
export type dataOptionsResponse = {
  802: dataOP[];
  803: dataOP[];
  809: dataOP[];
  805: dataOP[];
};
export type voucherType = {
  voucherDenom: number;
  voucherPrice: number;
  id?: number;
  image?: StaticImageData;
  color?: string;
  isActive?: boolean;
  network?: "MTN" | "GLO" | "AIRTEL" | "9MOBILE";
};
export type voucherResponse = {
  802: voucherType[];
  803: voucherType[];
  805: voucherType[];
  809: voucherType[];
  bank: {
    bankName: string;
    transferAmount: null | number;
  }[];
  bankOptions?: {
    bankName: string;
    transferAmount: null | number;
  }[];
};

export type airtimeOptions = {
  id: number;
  amount: number;
  value: number;
  isActive: boolean;
};
export type voucher = {
  id: number;
  isActive: boolean;
  network: "MTN" | "GLO" | "AIRTEL" | "9MOBILE";
  amount: 100 | 200 | 500 | 1000;
  image: StaticImageData;
  color: string;
  bg: string;
  border: string;
};
export type countries = {
  code: string;
  name: string;
  flag: any;
  dialingCodes: string[];
};
export type network = {
  name: "MTN" | "GLO" | "9MOBILE" | "AIRTEL" | "DETECT MY NETWORK";
  id: number;
  color?:string
  image: StaticImageData;
};
export type CartItem = {
  network: "MTN" | "GLO" | "9MOBILE" | "AIRTEL" | "DETECT MY NETWORK";
  beneficiary: number;
  type: "mobile data" | "airtime" | "data bundle";
  title: string;
};
export interface UserDetails {
  fullName: string;
  uToken: string;
  email: string;
}
export type bankOptions = {
  bankName: "Providus Bank";
  transferAmount: 1000;
  airtimeGetValue: 1028;
};
export type mobileDataResponse = {
  802: mobileDataType[];
  803: mobileDataType[];
  805: mobileDataType[];
  809: mobileDataType[];
};
export type mobileDataType = {
  dataPlan: string;
  dataPrice: number;
  dataDescr: string;
};
export type airtimeOps = {
  airtimeValue: number;
  isActive?: boolean;
  image?: StaticImageData;
  id?: number;
  color?: string;
  bankOptions: bankOptions[];
};
export type airtimeResponse = {
  802: airtimeOps[];
  803: airtimeOps[];
  805: airtimeOps[];
  809: airtimeOps[];
};
