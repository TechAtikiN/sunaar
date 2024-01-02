type Navlink = {
    name: string;
    path: string;
    icon: React.ReactNode;
};

type Order = {
  ID: string
  CreatedAt: string
  OrderValue: number
  OrderWeight: number
  Status: string
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

type CustomerDetails = {
  customer: Customer
  orders: Order[]
}