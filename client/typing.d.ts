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

type CartProduct = {
  product: Product 
  quantity: number
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

type CustomerResponse = {
  customers: Customer[]
  hasMore: boolean
  status: string
} | undefined

type CustomerDetails = {
  customer: Customer
  orders: Order[]
  status: string
}

type OrderDetails = {
  ID: string
  CustomerID: string
  Products: Product[]
  Status: string
  CompanyName: string
  OrderRemark: string
  CreatedAt: string
  OrderValue: number
  OrderWeight: number
}

type OrderResponse = {
  orders: OrderDetails[]
  hasMore: boolean
} | undefined