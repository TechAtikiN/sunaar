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
  ID: string
  Name: string
  Category: number
  Weight: string
  Image: string
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

type OrderDetails = {
  ID: string
  CustomerID: string
  Products: Product[]
  Status: string
  CustomerName: string
  CustomerEmail: string
  CustomerPhone: string
  CompanyName: string
  OrderRemark: string
  CreatedAt: string
  OrderValue: number
  OrderWeight: number
}