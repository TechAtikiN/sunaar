type Navlink = {
    name: string;
    path: string;
    icon: React.ReactNode;
};

type Order = {
  id: string
  date: Datetime
  customerId: string
  customerName: string
  orderWeight: number
  orderValue: number
  // invoice: File
  status: string
}

type Product = {
  id: number
  category: string
  weight: number
  image: string
}

type Customer = {
  ID: string
  FirstName: string
  LastName: string
  Email: string
  Phone: string
  City: string
  State: string
  PostalCode: string
  Address: string
  CompanyName: string
  CompanyEmail: string
  CompanyPhone: string
  CompanyAddress: string
  Remark: string
  CreatedAt: string
}